package com.akshara.mathapp.activity;

import android.content.DialogInterface;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.view.View;
import android.widget.AdapterView;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.Spinner;

import com.akshara.mathapp.R;
import com.akshara.mathapp.adapters.CustomSpinnerAdapter;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.interfaces.PermissionsApi;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.CustomPermissionUtils;
import com.akshara.mathapp.utils.ImageHandler;
import com.akshara.mathapp.utils.ImageUtils;
import com.akshara.mathapp.utils.MsgUtils;
import com.akshara.mathapp.utils.PermissionUtils;
import com.squareup.picasso.Callback;
import com.squareup.picasso.Picasso;

import java.io.File;

import butterknife.Bind;
import butterknife.OnClick;

public class GenderAvatarSelectionActivity extends BaseActivity implements PermissionsApi.PermissionCallback, AdapterView.OnItemSelectedListener {

    @Bind(R.id.avatar_thumbnail)
    ImageView avatarImageView;

    @Bind(R.id.gender_type_spinner)
    Spinner genderTypeSpinner;

    @Bind(R.id.done_button)
    ImageButton doneButton;

    private ImageHandler mImageHandler;
    private ImageHandlerListener mImageHandlerListener;
    float thumbnailWidth = 0;

    private String selectedLanguage;
    private String orgName = "";

    private String selectedGender = null;
    private int selectedGenderPosition = 0;
    private String finalImagePath = null;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        selectedLanguage = getIntent().getStringExtra(AppConstants.SELECTED_LANGUAGE);
        super.onCreate(savedInstanceState);
        orgName = getIntent().getStringExtra(AppConstants.ORG_NAME_EXTRA);
        setupImageHandler();
        setupPermissions();
        setupGenderSpinner();
        enableHomeButton();
    }

    @Override
    protected void onResume() {
        super.onResume();
        if (thumbnailWidth == 0)
            thumbnailWidth = ImageUtils.getWindowDimension(this, ImageUtils.WIDTH);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        if (mImageHandler != null && mImageHandler.getCameraImageUri() != null)
            outState.putParcelable(ImageHandler.IMAGE_FILE_URI_KEY, mImageHandler.getCameraImageUri());
        outState.putString(AppConstants.SELECTED_LANGUAGE, selectedLanguage);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        if (mImageHandler != null)
            mImageHandler.setCameraImageUri((Uri) savedInstanceState.getParcelable(ImageHandler.IMAGE_FILE_URI_KEY));
        selectedLanguage = savedInstanceState.getString(AppConstants.SELECTED_LANGUAGE);
        super.onRestoreInstanceState(savedInstanceState);
    }

    private void setupGenderSpinner() {
        CustomSpinnerAdapter genderSpinnerAdapter = new CustomSpinnerAdapter(this, R.array.gender_array);

        genderTypeSpinner.setAdapter(genderSpinnerAdapter);
        genderTypeSpinner.setOnItemSelectedListener(this);
        genderSpinnerAdapter.notifyDataSetChanged();
        genderTypeSpinner.setSelection(selectedGenderPosition);
    }

    private void setupPermissions() {
        PermissionsApi.getInstance().setPermissionCallback(this);
    }

    private void setupImageHandler() {
        mImageHandlerListener = new ImageHandlerListener();
        mImageHandler = new ImageHandler(this, mImageHandlerListener);
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

    @Override
    public void onItemSelected(AdapterView<?> adapterView, View view, int i, long l) {
        selectedGenderPosition = i;
        switch (i) {
            case 1:
                selectedGender = AppConstants.GENDER_FEMALE;
                break;
            case 2:
                selectedGender = AppConstants.GENDER_MALE;
                break;
        }
        setDoneButton();
    }

    private void setDoneButton() {
        if (selectedGenderPosition != 0 && finalImagePath != null) {
            doneButton.setSelected(true);
        } else {
            doneButton.setSelected(false);
        }
    }

    @Override
    public void onNothingSelected(AdapterView<?> adapterView) {

    }

    class ImageHandlerListener implements ImageHandler.ImageHandlerFilePickedCallback {

        @Override
        public void onFilePicked(String filePath) {
            if (filePath != null) {
                setImageFromUri(filePath);
                finalImagePath = filePath;
            }
            setDoneButton();
        }
    }

    private void setImageFromUri(String filePath) {
        Picasso.with(this).load(new File(filePath))
                .resize(((int) thumbnailWidth), ((int) thumbnailWidth))
                .centerCrop()
                .into(avatarImageView, new Callback() {
                    @Override
                    public void onSuccess() {
                        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                            avatarImageView.setClipToOutline(true);
                            avatarImageView.setBackground(ContextCompat.getDrawable(
                                    GenderAvatarSelectionActivity.this, R.drawable.bg_color_transparent_rounded_corners_accent_dot_border_no_padding
                            ));
                        }
                    }

                    @Override
                    public void onError() {

                    }
                });
    }


    @OnClick(R.id.title_set_profile_pic)
    public void onSetProfilePicClicked() {
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

    @OnClick(R.id.done_button)
    public void onDoneButtonClicked() {
        if (selectedGenderPosition == 0) {
            MsgUtils.displayToast(this, R.string.message_error_select_gender);
        } else if (finalImagePath == null) {
            MsgUtils.displayToast(this, R.string.message_error_select_profile_picture);
        } else {
            Intent intent = new Intent(this, StudentDetailActivity.class);
            User user = new User();
            user.setLanguage(selectedLanguage);
            user.setGender(selectedGender);
            user.setAvatarPicLocalPath(finalImagePath);
            user.setOrganization(orgName);
            intent.putExtra(AppConstants.USER_EXTRA, user);
            startActivity(intent);
        }
    }

    private void galleryClicked() {
        if (PermissionUtils.hasPermission(this, CustomPermissionUtils.getMediaPermissions(), getString(R.string.message_rationale_storage_permission), AppConstants.REQUEST_GALLERY_PERMISSION))
            mImageHandler.startFilePicker();
    }

    private void cameraClicked() {
        if (PermissionUtils.hasPermission(this, CustomPermissionUtils.getCameraPermissions(), getString(R.string.message_rationale_camera_permission), AppConstants.REQUEST_CAMERA_PERMISSION))
            mImageHandler.captureImageFromCamera();
    }

    @Override
    protected int getLayoutResource() {
        return R.layout.activity_gender_avatar_selection;
    }

    @Override
    protected String getLanguageValue() {
        return selectedLanguage;
    }

    @Override
    public void onBackPressed() {
        finish();
    }
}
