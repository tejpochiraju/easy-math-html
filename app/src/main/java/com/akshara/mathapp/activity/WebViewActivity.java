package com.akshara.mathapp.activity;

import android.content.res.Configuration;
import android.os.Bundle;
import android.util.Log;
import android.webkit.WebView;
import android.widget.Toast;

import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.utils.AppConstants;

import org.apache.cordova.CordovaActivity;

public class WebViewActivity extends CordovaActivity {

    WebView cordovaWebView;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.init();
        if (getIntent().hasExtra(AppConstants.USER_EXTRA)) {
            User user = getIntent().getParcelableExtra(AppConstants.USER_EXTRA);
            if (user == null)
                finish();

            //loadUrl(getUrl(user));
            cordovaWebView = (WebView) appView.getEngine().getView();

            if (savedInstanceState == null) {
               cordovaWebView.loadUrl(getUrl(user));
            }
            else {
                cordovaWebView.restoreState(savedInstanceState);
            }


        } else {
            finish();
        }
    }


    private String getUrl(User user) {
        String baseUrl = "file:///android_asset/www/index.html#";
        return baseUrl + "uid=" + user.getUid() + "?lang=" + user.getLanguage() + "?grade=" + user.getGrade();
    }

    @Override
    public void onBackPressed() {
        super.onBackPressed();
        finish();
    }

  /*  @Override
    protected void onStart() {
        super.onStart();
        Log.d("lifecycle","onStart invoked");
    }

    @Override
    protected void onResume() {
        super.onResume();
        Log.d("lifecycle","onResume invoked");
    }

    @Override
    protected void onPause() {
        super.onPause();
        Log.d("lifecycle","onPause invoked");
    }

    @Override
    protected void onStop() {
        super.onStop();
        Log.d("lifecycle","onStop invoked");
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        Log.d("lifecycle","onRestart invoked");
    }

    @Override
    public void onDestroy() {
        super.onDestroy();
        Log.d("lifecycle","onDestroy invoked");
        Toast.makeText(this, "onDestroy invoked", Toast.LENGTH_SHORT).show();
    }
*/

    @Override
    public void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        cordovaWebView.saveState(outState);
    }

 /*   @Override
    public void onRestoreInstanceState(Bundle outState) {
        super.onRestoreInstanceState(outState);
        cordovaWebView.restoreState(outState);
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        super.onConfigurationChanged(newConfig);

        // Checks the orientation of the screen
        if (newConfig.orientation == Configuration.ORIENTATION_LANDSCAPE) {
            Toast.makeText(this, "landscape", Toast.LENGTH_SHORT).show();
        } else if (newConfig.orientation == Configuration.ORIENTATION_PORTRAIT){
            Toast.makeText(this, "portrait", Toast.LENGTH_SHORT).show();
        }
    }

*/
}
