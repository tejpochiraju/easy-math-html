package com.akshara.mathapp.utils;

import android.app.Activity;
import android.content.ClipData;
import android.content.Context;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Environment;
import android.provider.MediaStore;

import com.akshara.mathapp.R;
import com.akshara.mathapp.activity.BaseActivity;
import com.nononsenseapps.filepicker.FilePickerActivity;

import java.io.File;
import java.util.ArrayList;

public class ImageHandler {

    private ImageHandlerFilePickedCallback imageHandlerFilePickedCallback;
    private Context mContext;
    private static final int FILE_CODE = 234;
    public static final int CAMERA_IMAGE_REQUEST = 235;
    public static final String IMAGE_FILE_URI_KEY = "file_uri";
    private Uri cameraImageUri;

    public ImageHandler(Context mContext, ImageHandlerFilePickedCallback imageHandlerFilePickedCallback) {
        this.mContext = mContext;
        this.imageHandlerFilePickedCallback = imageHandlerFilePickedCallback;
    }

    public interface ImageHandlerFilePickedCallback {
        void onFilePicked(String filePath);
    }

    public void captureImageFromCamera() {
        Intent intent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        cameraImageUri = ImageUtils.getOutputMediaFileUri(mContext);
        intent.putExtra(MediaStore.EXTRA_OUTPUT, cameraImageUri);
        startActivityForResult(intent, CAMERA_IMAGE_REQUEST);
    }

    public void setCameraImageUri(Uri cameraImageUri) {
        this.cameraImageUri = cameraImageUri;
    }

    public Uri getCameraImageUri() {
        return cameraImageUri;
    }

    public void startFilePicker() {
        // This always works
        //Intent i = new Intent(this, FilePickerActivity.class);

        // This works if you defined the intent filter
        Intent i = new Intent(Intent.ACTION_GET_CONTENT);
        i.setType("image/*");

        // Set these depending on your use case. These are the defaults.
        i.putExtra(FilePickerActivity.EXTRA_ALLOW_MULTIPLE, false);
        i.putExtra(FilePickerActivity.EXTRA_ALLOW_CREATE_DIR, false);
        i.putExtra(FilePickerActivity.EXTRA_MODE, FilePickerActivity.MODE_FILE);

        // Configure initial directory by specifying a String.
        // You could specify a String like "/storage/emulated/0/", but that can
        // dangerous. Always use Android's API calls to get paths to the SD-card or
        // internal memory.
        i.putExtra(FilePickerActivity.EXTRA_START_PATH, Environment.getExternalStorageDirectory().getPath());

        startActivityForResult(i, FILE_CODE);
    }


    private void startActivityForResult(Intent intent, int requestCode) {
        if (mContext != null) {
            if (mContext instanceof BaseActivity) {
                ((BaseActivity) mContext).startActivityForResult(intent, requestCode);
            }
        }
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {
        if (requestCode == FILE_CODE && resultCode == Activity.RESULT_OK) {
            if (data.getBooleanExtra(FilePickerActivity.EXTRA_ALLOW_MULTIPLE, false)) {
                // For JellyBean and above
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
                    ClipData clip = data.getClipData();
                    if (clip != null) {
                        for (int i = 0; i < clip.getItemCount(); i++) {
                            Uri uri = clip.getItemAt(i).getUri();
                            if (imageHandlerFilePickedCallback != null) {
                                imageHandlerFilePickedCallback.onFilePicked(getCompressedFilePath(ImageUtils.getPath(mContext, uri)));
                            }
                        }
                    }
                    // For Ice Cream Sandwich
                } else {
                    ArrayList<String> paths = data.getStringArrayListExtra
                            (FilePickerActivity.EXTRA_PATHS);

                    if (paths != null) {
                        for (String path : paths) {
                            Uri uri = Uri.parse(path);
                            if (imageHandlerFilePickedCallback != null) {
                                imageHandlerFilePickedCallback.onFilePicked(getCompressedFilePath(ImageUtils.getPath(mContext, uri)));
                            }
                        }
                    }
                }

            } else {
                Uri uri = data.getData();
                if (imageHandlerFilePickedCallback != null) {
                    imageHandlerFilePickedCallback.onFilePicked(getCompressedFilePath(ImageUtils.getPath(mContext, uri)));
                }
            }
        } else if (requestCode == CAMERA_IMAGE_REQUEST && resultCode == Activity.RESULT_OK) {
            if (cameraImageUri != null) {
                if (imageHandlerFilePickedCallback != null)
                    imageHandlerFilePickedCallback.onFilePicked(getCompressedFilePath(ImageUtils.getFilePathFromContentUri(cameraImageUri)));

            } else {
                MsgUtils.displayToast(mContext, R.string.error_message_camera_uri_error);
            }
        }
    }

    private String getCompressedFilePath(String filePath) {
        File compressedImageFile = ImageUtils.compressImageAndReturnNewFile(filePath);
        if (compressedImageFile != null) {
            return compressedImageFile.getPath();
        } else {
            MsgUtils.displayToast(mContext, R.string.error_capturing_image);
            return null;
        }
    }
}
