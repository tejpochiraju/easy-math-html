package com.akshara.mathapp.activity;

import android.content.Intent;
import android.os.Bundle;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.view.View;

import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.adapters.ImageLoginAdapter;
import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.interfaces.PermissionsApi;
import com.akshara.mathapp.utils.AppConstants;
import com.akshara.mathapp.utils.CustomPermissionUtils;
import com.akshara.mathapp.utils.PermissionUtils;
import com.akshara.mathapp.utils.itemdecorators.GridVerticalItemDecorator;

import java.util.ArrayList;
import java.util.List;

import butterknife.Bind;
import butterknife.OnClick;

public class ImageLoginActivity extends BaseActivity implements PermissionsApi.PermissionCallback {

    private static final int GRID_COLUMN_COUNT = 3;
    @Bind(R.id.recyclerView)
    RecyclerView recyclerViewList;

    List<User> userList = new ArrayList<>();
    private ImageLoginAdapter imageLoginAdapter;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setupPermissions();
        setupViews();
    }

    private void setupPermissions() {
        PermissionsApi.getInstance().setPermissionCallback(this);
    }

    private void setupViews() {
        imageLoginAdapter = new ImageLoginAdapter(this, new ImageLoginAdapter.ImageTapListener() {
            @Override
            public void onTap(User user) {
                gotoStartGameScreen(user);
            }
        });
        GridLayoutManager gridLayoutManager = new GridLayoutManager(this, GRID_COLUMN_COUNT);
        GridVerticalItemDecorator gridVerticalItemDecorator = new GridVerticalItemDecorator(this);
        recyclerViewList.addItemDecoration(gridVerticalItemDecorator);
        recyclerViewList.setHasFixedSize(true);
        recyclerViewList.setLayoutManager(gridLayoutManager);
        recyclerViewList.setAdapter(imageLoginAdapter);
        recyclerViewList.setNestedScrollingEnabled(false);
    }

    private void gotoStartGameScreen(User user) {
        Intent intent = new Intent(this, StartGameActivity.class);
        intent.putExtra(AppConstants.USER_EXTRA, user);
        startActivity(intent);

    }

    @Override
    protected void onStart() {
        super.onStart();
        if (PermissionUtils.hasPermission(this, CustomPermissionUtils.getMediaPermissions(), getString(R.string.message_rationale_storage_permission), AppConstants.REQUEST_GALLERY_PERMISSION)) {
            loadUsers();
        }
    }

    private void loadUsers() {
        new Thread(new Runnable() {
            @Override
            public void run() {
                userList = MathApp.get().getLocalDb().userDao().getAll();
                updateUI();
            }
        }).start();
    }

    @Override
    protected String getLanguageValue() {
        return null;
    }

    private void updateUI() {
        runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (!userList.isEmpty()) {
                    recyclerViewList.setVisibility(View.VISIBLE);
                    imageLoginAdapter.setDataset(userList);
                    imageLoginAdapter.notifyDataSetChanged();
                } else {
                    recyclerViewList.setVisibility(View.GONE);
                }
            }
        });
    }


    @Override
    protected int getLayoutResource() {
        return R.layout.activity_image_login;
    }

    @OnClick({R.id.sign_in})
    void onSignInClicked() {
        startActivity(new Intent(this, PhoneLoginActivity.class));
    }

    @OnClick({R.id.register})
    void onRegisterClicked() {
        startActivity(new Intent(this, LanguageSelectionActivity.class));
    }

    @Override
    public void onPermissionGranted(int requestCode) {
        switch (requestCode) {
            case AppConstants.REQUEST_GALLERY_PERMISSION:
                loadUsers();
                break;
        }
    }

    @Override
    public void onPermissionDenied(int requestCode) {

    }
}
