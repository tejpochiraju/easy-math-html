package com.akshara.mathapp.activity;

import android.content.Intent;
import android.os.Bundle;

import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.data.remote.APIRequestUtil;
import com.akshara.mathapp.events.BusProvider;
import com.akshara.mathapp.events.networkevents.GetChildInfoEvent;
import com.akshara.mathapp.events.networkevents.LoginUserEvent;
import com.akshara.mathapp.interfaces.PermissionsApi;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.AppUtils;
import com.akshara.mathapp.utils.CustomPermissionUtils;
import com.akshara.mathapp.utils.ImageUtils;
import com.akshara.mathapp.utils.MsgUtils;
import com.akshara.mathapp.utils.NetworkUtil;
import com.akshara.mathapp.utils.PermissionUtils;
import com.akshara.mathapp.utils.ValidationUtils;
import com.akshara.mathapp.view.FontEditText;

import org.greenrobot.eventbus.Subscribe;

import butterknife.Bind;
import butterknife.OnClick;

public class PhoneLoginActivity extends BaseActivity implements
        PermissionsApi.PermissionCallback {

    @Bind(R.id.name_edittext)
    FontEditText nameEditText;

    @Bind(R.id.phone_edittext)
    FontEditText phoneEditText;

    private String deviceId = null;
    private String name;
    private String phone;
    private String userToken;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setupPermissions();
        enableHomeButton();
    }

    private void setupPermissions() {
        PermissionsApi.getInstance().setPermissionCallback(this);
    }


    @Override
    protected int getLayoutResource() {
        return R.layout.activity_phone_login;
    }

    @Override
    protected String getLanguageValue() {
        return null;
    }

    @OnClick(R.id.sign_in)
    void onSignInClick() {
        name = nameEditText.getText().toString().trim();
        phone = phoneEditText.getText().toString().trim();

        if (!ValidationUtils.isNameValidated(this, name))
            return;

        if (!ValidationUtils.isPhoneValidated(this, phone))
            return;

        new Thread(new Runnable() {
            @Override
            public void run() {
                User user = MathApp.get().getLocalDb().userDao().findBySignInCred(name, phone);
                continueSignIn(user);
            }
        }).start();

    }

    private void continueSignIn(final User user) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (user == null) {
                    if (deviceId == null) {
                        if (PermissionUtils.hasPermission(PhoneLoginActivity.this, CustomPermissionUtils.getDeviceInfoPermission(),
                                getString(R.string.message_rationale_device_id_permission), AppConstants.REQUEST_DEVICE_INFO)) {
                            deviceId = AppUtils.getDeviceUniqueId();
                        } else {
                            return;
                        }
                    }

                    if (!PermissionUtils.hasPermission(PhoneLoginActivity.this, CustomPermissionUtils.getMediaPermissions(), getString(R.string.message_rationale_storage_permission), AppConstants.REQUEST_GALLERY_PERMISSION)) {
                        return;
                    }


                    if (!NetworkUtil.getConnectivityStatusString(PhoneLoginActivity.this)) {
                        MsgUtils.displayToast(PhoneLoginActivity.this, R.string.error_message_no_internet);
                        return;
                    }

                    signInStudent(name, phone, deviceId);
                } else {
                    MsgUtils.displayToast(PhoneLoginActivity.this, R.string.error_message_already_logged_in);
                    finish();
                }
            }
        });
    }

    private void signInStudent(String name, String phone, String deviceId) {
        showProgressDialog(getString(R.string.progress_dialog_login));
        BusProvider.getInstance().post(new LoginUserEvent.OnLoadingStart(APIRequestUtil.getUserLogin(
                name, phone, deviceId
        )));
    }

    @Subscribe
    public void onDataLoaded(LoginUserEvent.OnLoadingFinished onLoadingFinished) {
        dismissProgressDialog();
        if (onLoadingFinished.getResponse().getStatus().contentEquals(AppConstants.API_SUCCESS)) {
            getChildData(onLoadingFinished.getResponse().getDescription());
        } else {
            dismissProgressDialog();
            MsgUtils.displayToast(this, onLoadingFinished.getResponse().getDescription());
        }

    }

    @Subscribe
    public void onDataLoadingFailed(LoginUserEvent.OnLoadingError onLoadingError) {
        dismissProgressDialog();
        MsgUtils.displayToast(this, onLoadingError.getErrorMessage());
    }

    private void getChildData(String token) {
        userToken = token;
        showProgressDialog(getString(R.string.progress_dialog_child_info));
        BusProvider.getInstance().post(new GetChildInfoEvent.OnLoadingStart(APIRequestUtil.getChildInfo(
                name, phone, token
        )));
    }

    @Subscribe
    public void onDataLoaded(GetChildInfoEvent.OnLoadingFinished onLoadingFinished) {
        dismissProgressDialog();
        if (onLoadingFinished.getResponse().getStatus().contentEquals(AppConstants.API_SUCCESS)) {
            final User user = onLoadingFinished.getResponse();
            user.setUid(userToken);

            if (user.getAvatarBase64() != null && !user.getAvatarBase64().isEmpty())
                user.setAvatarPicLocalPath(ImageUtils.getfilePathFromBase64(this, user.getAvatarBase64()));

            new Thread(new Runnable() {
                @Override
                public void run() {
                    MathApp.get().getLocalDb().userDao().insertAll(user);
                    gotoImageLogin();
                }
            }).start();
        } else {
            dismissProgressDialog();
            MsgUtils.displayToast(this, onLoadingFinished.getResponse().getDescription());

        }

    }

    private void gotoImageLogin() {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                dismissProgressDialog();
                Intent mIntent = new Intent(PhoneLoginActivity.this, ImageLoginActivity.class);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                MsgUtils.displayToast(PhoneLoginActivity.this, R.string.message_success);
                startActivity(mIntent);
                finish();
            }
        });
    }

    @Subscribe
    public void onDataLoadingFailed(GetChildInfoEvent.OnLoadingError onLoadingError) {
        dismissProgressDialog();
        MsgUtils.displayToast(this, onLoadingError.getErrorMessage());
    }


    @Override
    public void onPermissionGranted(int requestCode) {
        switch (requestCode) {
            case AppConstants.REQUEST_DEVICE_INFO:
            case AppConstants.REQUEST_GALLERY_PERMISSION:
                onSignInClick();
                break;
        }
    }

    private void galleryClicked() {

    }

    @Override
    public void onPermissionDenied(int requestCode) {

    }
}
