package com.akshara.mathapp.activity;

import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.util.Base64;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ImageView;
import android.widget.Spinner;

import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.adapters.CustomSpinnerAdapter;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.data.remote.APIRequestUtil;
import com.akshara.mathapp.events.BusProvider;
import com.akshara.mathapp.events.networkevents.UpdateUserEvent;
import com.akshara.mathapp.interfaces.PermissionsApi;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.CustomPermissionUtils;
import com.akshara.mathapp.utils.DataParserUtil;
import com.akshara.mathapp.utils.ImageHandler;
import com.akshara.mathapp.utils.ImageUtils;
import com.akshara.mathapp.utils.MsgUtils;
import com.akshara.mathapp.utils.NetworkUtil;
import com.akshara.mathapp.utils.PermissionUtils;
import com.akshara.mathapp.utils.ValidationUtils;
import com.akshara.mathapp.view.FontEditText;
import com.akshara.mathapp.view.FontTextView;
import com.squareup.picasso.Callback;
import com.squareup.picasso.Picasso;

import org.greenrobot.eventbus.Subscribe;

import java.io.ByteArrayOutputStream;
import java.io.File;

import butterknife.Bind;
import butterknife.OnClick;

public class EditProfileActivity extends BaseActivity implements
        AdapterView.OnItemSelectedListener, PermissionsApi.PermissionCallback {

    @Bind(R.id.avatar_thumbnail)
    ImageView avatarThumbnail;

    @Bind(R.id.title_set_profile_pic)
    FontTextView profilePicTextView;

    @Bind(R.id.phone_header)
    FontTextView phoneHeader;

    @Bind(R.id.phone_edittext)
    FontEditText phoneEditText;

    @Bind(R.id.language_edit_spinner)
    Spinner languageEditSpinner;

    @Bind(R.id.age_edittext)
    FontEditText ageEditText;

    @Bind(R.id.school_type_spinner)
    Spinner schoolTypeSpinner;

    @Bind(R.id.class_type_spinner)
    Spinner classTypeSpinner;

    private User user;
    private int selectedLanguagePosition = 0;
    private int selectedSchoolTypePosition = 0;
    private int selectedClassTypePosition = 0;
    private String selectedClassValue = null;

    String avatarBase64 = null;
    private ImageHandler mImageHandler;
    private ImageHandlerListener mImageHandlerListener;
    float thumbnailWidth = 0;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        user = getIntent().getParcelableExtra(AppConstants.USER_EXTRA);
        if (user == null)
            finish();
        super.onCreate(savedInstanceState);
        setupSpinners();
        setupImageHandler();
        setupPermissions();
        setupViews();
        enableHomeButton();
    }

    @Override
    protected void onStart() {
        super.onStart();
        if (thumbnailWidth == 0)
            thumbnailWidth = ImageUtils.getWindowDimension(this, ImageUtils.WIDTH);
        setImageFromUri(user.getAvatarPicLocalPath());
    }

    @Override
    protected String getLanguageValue() {
        return user.getLanguage();
    }

    private void setupPermissions() {
        PermissionsApi.getInstance().setPermissionCallback(this);
    }

    private void setupImageHandler() {
        mImageHandlerListener = new ImageHandlerListener();
        mImageHandler = new ImageHandler(this, mImageHandlerListener);
    }

    class ImageHandlerListener implements ImageHandler.ImageHandlerFilePickedCallback {

        @Override
        public void onFilePicked(String filePath) {
            if (filePath != null) {
                user.setAvatarPicLocalPath(filePath);
                setBase64(filePath);
                setImageFromUri(filePath);
            }
        }
    }

    private void setImageFromUri(String filePath) {
        if (filePath != null && !filePath.isEmpty()) {
            Picasso.with(this).load(new File(filePath))
                    .resize(((int) thumbnailWidth), ((int) thumbnailWidth))
                    .centerCrop()
                    .placeholder(R.drawable.image_avatar_placeholder)
                    .into(avatarThumbnail, new Callback() {
                        @Override
                        public void onSuccess() {
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                                avatarThumbnail.setClipToOutline(true);
                                avatarThumbnail.setBackground(ContextCompat.getDrawable(
                                        EditProfileActivity.this, R.drawable.bg_color_transparent_rounded_corners_accent_dot_border_no_padding
                                ));
                            }
                        }

                        @Override
                        public void onError() {

                        }
                    });
        } else {
            avatarThumbnail.setImageDrawable(ContextCompat.getDrawable(this, R.drawable.image_avatar_placeholder));
        }
    }

    private void setBase64(String filePath) {
        Bitmap bm = BitmapFactory.decodeFile(filePath);
        ByteArrayOutputStream baos = new ByteArrayOutputStream();
        bm.compress(Bitmap.CompressFormat.JPEG, 100, baos); //bm is the bitmap object
        byte[] b = baos.toByteArray();
        avatarBase64 = Base64.encodeToString(b, Base64.DEFAULT);
    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        mImageHandler.onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        mImageHandlerListener = null;
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        if (mImageHandler != null && mImageHandler.getCameraImageUri() != null)
            outState.putParcelable(ImageHandler.IMAGE_FILE_URI_KEY, mImageHandler.getCameraImageUri());
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        if (mImageHandler != null)
            mImageHandler.setCameraImageUri((Uri) savedInstanceState.getParcelable(ImageHandler.IMAGE_FILE_URI_KEY));
        super.onRestoreInstanceState(savedInstanceState);
    }

    private void setupViews() {
        phoneEditText.setText(user.getPhoneNumber());
        ageEditText.setText(user.getAge());
    }

    private void setupSpinners() {
        CustomSpinnerAdapter schoolAdapter = new CustomSpinnerAdapter(this, R.array.school_type_array);
        schoolTypeSpinner.setAdapter(schoolAdapter);
        schoolTypeSpinner.setOnItemSelectedListener(this);
        schoolAdapter.notifyDataSetChanged();
        selectedSchoolTypePosition = DataParserUtil.getPositionForSchoolType(user.getSchoolType());
        schoolTypeSpinner.setSelection(selectedSchoolTypePosition);


        CustomSpinnerAdapter languageAdapter = new CustomSpinnerAdapter(this, R.array.language_type_array);
        languageEditSpinner.setAdapter(languageAdapter);
        languageEditSpinner.setOnItemSelectedListener(this);
        languageAdapter.notifyDataSetChanged();
        selectedLanguagePosition = DataParserUtil.getPositionForLanguage(user.getLanguage());
        languageEditSpinner.setSelection(selectedLanguagePosition);

        CustomSpinnerAdapter classAdapter = new CustomSpinnerAdapter(this, R.array.class_type_array);
        classTypeSpinner.setAdapter(classAdapter);
        classTypeSpinner.setOnItemSelectedListener(this);
        classAdapter.notifyDataSetChanged();
        selectedClassTypePosition = DataParserUtil.getPositionForClassType(this, user.getGrade());
        classTypeSpinner.setSelection(selectedClassTypePosition);

    }

    @Override
    protected int getLayoutResource() {
        return R.layout.activity_edit_profile;
    }

    @OnClick(R.id.done_button)
    public void onDoneButtonClicked() {
        if (selectedSchoolTypePosition == 0) {
            MsgUtils.displayToast(this, getString(R.string.message_error_select_school_type));
            return;
        }

        if (selectedLanguagePosition == 0) {
            MsgUtils.displayToast(this, getString(R.string.message_error_select_language));
            return;
        }

        if (selectedClassTypePosition == 0 || selectedClassValue == null) {
            MsgUtils.displayToast(this, R.string.error_message_class_field);
            return;
        }

        String age = ageEditText.getText().toString().trim();
        String phone = phoneEditText.getText().toString().trim();
        if (!ValidationUtils.isAgeValidated(this, age))
            return;

        if (!ValidationUtils.isPhoneValidated(this, phone))
            return;

        if (!NetworkUtil.getConnectivityStatusString(this)) {
            MsgUtils.displayToast(this, R.string.error_message_no_internet);
            return;
        }


        showProgressDialog(getString(R.string.progress_dialog_saving));
        user.setAge(age);
        user.setGrade(selectedClassValue);
        user.setPhoneNumber(phone);
        user.setLanguage(DataParserUtil.getLanguageValueFromPosition(selectedLanguagePosition));
        user.setSchoolType(DataParserUtil.getSchoolTypeFromPosition(selectedSchoolTypePosition));
        if (avatarBase64 != null)
            user.setAvatarBase64(avatarBase64);
        updateProfile();
    }

    private void updateProfile() {
        BusProvider.getInstance().post(new UpdateUserEvent.OnLoadingStart(APIRequestUtil.getUserUpdateParams(user)));
    }

    @Subscribe
    public void onDataLoaded(UpdateUserEvent.OnLoadingFinished onLoadingFinished) {
        dismissProgressDialog();
        if (onLoadingFinished.getResponse().getStatus().contentEquals(AppConstants.API_SUCCESS)) {
            new Thread(new Runnable() {
                @Override
                public void run() {
                    MathApp.get().getLocalDb().userDao().updateUsers(user);
                    gotoImageLogin();
                }
            }).start();
        } else {
            handleFailed(onLoadingFinished.getResponse().getDescription());

        }
    }

    private void handleFailed(final String description) {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                dismissProgressDialog();
                MsgUtils.displayToast(EditProfileActivity.this, description);
            }
        });
    }

    private void gotoImageLogin() {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                dismissProgressDialog();
                Intent mIntent = new Intent(EditProfileActivity.this, ImageLoginActivity.class);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_CLEAR_TASK);
                mIntent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                MsgUtils.displayToast(EditProfileActivity.this, R.string.message_updated);
                startActivity(mIntent);
                finish();
            }
        });
    }

    @Subscribe
    public void onDataLoadingFailed(UpdateUserEvent.OnLoadingError onLoadingError) {
        dismissProgressDialog();
        MsgUtils.displayToast(this, onLoadingError.getErrorMessage());
    }

    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        switch (adapterView.getId()) {
            case R.id.school_type_spinner:
                selectedSchoolTypePosition = i;
                break;
            case R.id.language_edit_spinner:
                selectedLanguagePosition = i;
                break;
            case R.id.class_type_spinner:
                selectedClassTypePosition = i;
                selectedClassValue = (String) adapterView.getItemAtPosition(i);
                break;

        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }

    @Override
    public void onPermissionGranted(int requestCode) {
        switch (requestCode) {
            case AppConstants.REQUEST_GALLERY_PERMISSION:
                galleryClicked();
                break;
            case AppConstants.REQUEST_CAMERA_PERMISSION:
                cameraClicked();
                break;
        }
    }

    @Override
    public void onPermissionDenied(int requestCode) {

    }

    @OnClick(R.id.title_set_profile_pic)
    public void onAvatarButtonClicked() {
        MsgUtils.displayAvatarSourceSelection(this, new MsgUtils.AlertDialogCallback() {
            @Override
            public void onButtonClick(DialogInterface dialog, int id, int clickedButtonType) {
                if (clickedButtonType == AppConstants.GALLERY_BUTTON_CLICKED) {
                    galleryClicked();
                } else if (clickedButtonType == AppConstants.CAMERA_BUTTON_CLICKED) {
                    cameraClicked();
                }
            }
        });
    }

    private void cameraClicked() {
        if (PermissionUtils.hasPermission(this, CustomPermissionUtils.getCameraPermissions(), getString(R.string.message_rationale_camera_permission), AppConstants.REQUEST_CAMERA_PERMISSION))
            mImageHandler.captureImageFromCamera();
    }

    private void galleryClicked() {
        if (PermissionUtils.hasPermission(this, CustomPermissionUtils.getMediaPermissions(), getString(R.string.message_rationale_storage_permission), AppConstants.REQUEST_GALLERY_PERMISSION))
            mImageHandler.startFilePicker();
    }
}
