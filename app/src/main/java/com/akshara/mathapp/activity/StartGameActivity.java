package com.akshara.mathapp.activity;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.os.Build;
import android.os.Bundle;
import android.support.v4.content.ContextCompat;
import android.widget.ImageView;

import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.ImageUtils;
import com.akshara.mathapp.utils.MsgUtils;
import com.akshara.mathapp.view.FontTextView;
import com.squareup.picasso.Callback;
import com.squareup.picasso.Picasso;

import java.io.File;

import butterknife.Bind;
import butterknife.OnClick;

public class StartGameActivity extends BaseActivity {

    @Bind(R.id.child_name)
    FontTextView childNameTv;

    @Bind(R.id.child_image)
    ImageView childImageIv;

    private User user;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        user = getIntent().getParcelableExtra(AppConstants.USER_EXTRA);
        if (user == null) {
            MsgUtils.displayToast(this, R.string.error_message_server_error_fallback);
            finish();
        }
        super.onCreate(savedInstanceState);
        enableHomeButton();

        childNameTv.setText(user.getName());
        setImage(this, user.getAvatarPicLocalPath());
    }

    private void setImage(Context context, String filePath) {
        final float thumbnailWidth = ImageUtils.getWindowDimension(context, ImageUtils.WIDTH);
        if (filePath != null && !filePath.isEmpty()) {
            Picasso.with(context).load(new File(filePath))
                    .resize(((int) thumbnailWidth), ((int) thumbnailWidth))
                    .centerCrop()
                    .placeholder(R.drawable.image_avatar_placeholder)
                    .into(childImageIv, new Callback() {
                        @Override
                        public void onSuccess() {
                            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
                                childImageIv.setClipToOutline(true);
                                childImageIv.setBackground(ContextCompat.getDrawable(
                                        StartGameActivity.this, R.drawable.bg_color_transparent_rounded_corners_accent_dot_border_no_padding
                                ));
                            }
                        }

                        @Override
                        public void onError() {

                        }
                    });
        } else {
            childImageIv.setImageDrawable(ContextCompat.getDrawable(context, R.drawable.image_avatar_placeholder));
        }
    }

    @OnClick(R.id.edit_button)
    void onEditButtonClick() {
        Intent intent = new Intent(this, EditProfileActivity.class);
        intent.putExtra(AppConstants.USER_EXTRA, user);
        startActivity(intent);
    }

    @OnClick(R.id.delete_button)
    void onDeleteButtonClick() {
        MsgUtils.displayConfirmationDialog(this, null, getString(R.string.error_message_delete_avatar_confirmation), new MsgUtils.AlertDialogCallback() {
            @Override
            public void onButtonClick(DialogInterface dialog, int id, int clickedButtonType) {
                switch (clickedButtonType) {
                    case AppConstants.POSITIVE_BUTTON_CLICKED:
                        deleteUser();
                        break;
                    case AppConstants.NEGATIVE_BUTTON_CLICKED:
                        dialog.dismiss();
                        break;
                }
            }
        });

    }

    private void deleteUser() {
        showProgressDialog("Deleting");
        new Thread(new Runnable() {
            @Override
            public void run() {
                MathApp.get().getLocalDb().userDao().delete(user);
                updateUI();
            }
        }).start();
    }

    private void updateUI() {

        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                dismissProgressDialog();
                MsgUtils.displayToast(StartGameActivity.this, "Deleted user");
                finish();
            }
        });
    }

    @OnClick(R.id.start_game)
    void onStartGameClick() {
        if (user == null)
            finish();
        Intent intent = new Intent(this, WebViewActivity.class);
        intent.putExtra(AppConstants.USER_EXTRA, user);
        startActivity(intent);
    }

    @Override
    protected int getLayoutResource() {
        return R.layout.activity_start_game;
    }

    @Override
    protected String getLanguageValue() {
        return user.getLanguage();
    }

}
