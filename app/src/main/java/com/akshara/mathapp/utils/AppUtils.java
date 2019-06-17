package com.akshara.mathapp.utils;

import android.app.Activity;
import android.content.Context;
import android.os.Build;
import android.provider.Settings;

import com.akshara.mathapp.MathApp;
import com.google.android.gms.common.ConnectionResult;
import com.google.android.gms.common.GoogleApiAvailability;

import java.util.Calendar;

/**
 * Created by Rajeef on 2/1/18
 */

public class AppUtils {

    private static final int PLAY_SERVICES_RESOLUTION_REQUEST = 9000;

    public static String getRandomFileName() {
        Calendar calendar = Calendar.getInstance();
        return "" + calendar.get(Calendar.DAY_OF_MONTH) + calendar.get(Calendar.MONTH) + calendar.get(Calendar.YEAR) + "_" + Math.random();
    }

    public static String getDeviceUniqueId() {
        String serialNumber;
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.O) {
            serialNumber = Build.getSerial();
        } else {
            serialNumber = Build.SERIAL;
        }
        String androidID = Settings.Secure.getString(MathApp.get().getContentResolver(), Settings.Secure.ANDROID_ID);
        return serialNumber + "_" + androidID;
    }

    public static boolean isNamePhoneAgeValidated(Context context, String name, String phoneNumber, String age) {
        if (!ValidationUtils.isNameValidated(context, name))
            return false;

        if (!ValidationUtils.isPhoneValidated(context, phoneNumber))
            return false;

        if (!ValidationUtils.isAgeValidated(context, age))
            return false;

        return true;
    }

    public static boolean isGooglePlayServiceAvailable(Activity context) {
        if (context == null)
            return false;

        int resultCode = GoogleApiAvailability.getInstance().isGooglePlayServicesAvailable(context);
        if (resultCode == ConnectionResult.SUCCESS)
            return true;
        if (GoogleApiAvailability.getInstance().isUserResolvableError(resultCode)) {
            if (context.getResources() != null) {
                GoogleApiAvailability.getInstance().getErrorDialog(context, resultCode, PLAY_SERVICES_RESOLUTION_REQUEST)
                        .show();
            }
        }
        return false;
    }

}
