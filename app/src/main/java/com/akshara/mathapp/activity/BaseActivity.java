package com.akshara.mathapp.activity;

import android.app.ProgressDialog;
import android.content.res.Configuration;
import android.os.Bundle;
import android.support.v7.app.AppCompatActivity;
import android.view.MenuItem;
import android.webkit.WebView;

import com.akshara.mathapp.R;
import com.akshara.mathapp.events.BusProvider;
import com.akshara.mathapp.utils.CustomPermissionUtils;
import com.akshara.mathapp.utils.DataParserUtil;

import org.greenrobot.eventbus.NoSubscriberEvent;
import org.greenrobot.eventbus.Subscribe;

import java.util.Locale;

import butterknife.ButterKnife;

public abstract class BaseActivity extends AppCompatActivity {

    private ProgressDialog progressDialog;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setLanguage();
        setContentView(getLayoutResource());
        ButterKnife.bind(this);

    }

    protected void enableHomeButton() {
        if (getSupportActionBar() != null)
            getSupportActionBar().setDisplayHomeAsUpEnabled(true);
    }

    public void setLanguage() {
        String languageToLoad = DataParserUtil.getLocaleCodeFromLanguageValue(getLanguageValue());
        if (languageToLoad != null) {
            Locale locale = new Locale(languageToLoad);
            Locale.setDefault(locale);
            Configuration config = new Configuration();
            config.locale = locale;
            getBaseContext().getResources().updateConfiguration(config,
                    getBaseContext().getResources().getDisplayMetrics());
        }
    }


    protected boolean isBusRegistered() {
        return true;
    }

    protected abstract int getLayoutResource();

    @Override
    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        if (this.isFinishing())
            return;
        CustomPermissionUtils.onRequestPermissionsResult(this, requestCode, permissions, grantResults);
    }

    public void showProgressDialog(String message) {
        if (this.isFinishing())
            return;
        String msg;
        if (message == null) {
            msg = getString(R.string.progress_dialog_loading_text);
        } else {
            msg = message;
        }
        progressDialog = ProgressDialog.show(this, null, msg, true);
    }

    public void showProgressDialog(String message, boolean dismissable) {
        if (this.isFinishing())
            return;
        String msg;
        if (message == null) {
            msg = getString(R.string.progress_dialog_loading_text);
        } else {
            msg = message;
        }

        progressDialog = ProgressDialog.show(this, null, msg, true, dismissable, null);
    }

    public void updateProgressMessage(String message) {
        if (progressDialog != null && progressDialog.isShowing()) {
            progressDialog.setMessage(message);
        }
    }

    public void dismissProgressDialog() {
        if (this.isFinishing()) return;

        if (progressDialog != null && progressDialog.isShowing()) {
            progressDialog.dismiss();
        }
    }

    public boolean isProgressDialogVisible() {
        return progressDialog != null && progressDialog.isShowing();
    }


    @Override
    protected void onStart() {
        super.onStart();
        if (isBusRegistered()) {
            BusProvider.getInstance().register(this);
        }
    }

    @Override
    protected void onStop() {
        super.onStop();
        if (isBusRegistered()) {
            BusProvider.getInstance().unregister(this);
        }
    }

    @Subscribe
    public void onGenericEvent(NoSubscriberEvent noSubscriberEvent) {

    }

    protected abstract String getLanguageValue();

    @Override
    public boolean onOptionsItemSelected(MenuItem item) {
        if (item.getItemId() == android.R.id.home) {
            finish();
            return true;
        }
        return super.onOptionsItemSelected(item);
    }
}