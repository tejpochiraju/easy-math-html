package com.akshara.mathapp.utils;

import android.Manifest;
import android.annotation.TargetApi;
import android.content.Context;
import android.os.Build;

import com.akshara.mathapp.R;

public class CustomPermissionUtils {
    @TargetApi(Build.VERSION_CODES.JELLY_BEAN)
    public static String[] getMediaPermissions() {
        return new String[]{Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE};
    }

    @TargetApi(Build.VERSION_CODES.JELLY_BEAN_MR1)
    public static String[] getCameraPermissions() {
        return new String[]{Manifest.permission.CAMERA, Manifest.permission.READ_EXTERNAL_STORAGE, Manifest.permission.WRITE_EXTERNAL_STORAGE};
    }

    public static String[] getReceiveSmsPermission() {
        return new String[]{Manifest.permission.RECEIVE_SMS};
    }

    public static String[] getLocationPermission() {
        return new String[]{Manifest.permission.ACCESS_COARSE_LOCATION, Manifest.permission.ACCESS_FINE_LOCATION};
    }

    public static String[] getDeviceInfoPermission() {
        return new String[]{Manifest.permission.READ_PHONE_STATE};
    }

    public static void onRequestPermissionsResult(Context mContext, int requestCode, String[] permissions, int[] grantResults) {
        switch (requestCode) {
            case AppConstants.REQUEST_GALLERY_PERMISSION:
                PermissionUtils.onRequestPermissionsResult(mContext, requestCode, permissions, grantResults, mContext.getString(R.string.message_rationale_storage_permission));
                break;
            case AppConstants.REQUEST_CAMERA_PERMISSION:
                PermissionUtils.onRequestPermissionsResult(mContext, requestCode, permissions, grantResults, mContext.getString(R.string.message_rationale_camera_permission));
                break;
            case AppConstants.REQUEST_DEVICE_INFO:
                PermissionUtils.onRequestPermissionsResult(mContext, requestCode, permissions, grantResults, mContext.getString(R.string.message_rationale_device_id_permission));
                break;
        }
    }
}
