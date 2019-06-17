package com.akshara.mathapp.utils;

import android.annotation.SuppressLint;
import android.content.Context;

public class UserPreferencesUtils extends BasePreferenceUtils {

    static String fileName = AppConstants.USER_SETTINGS;

    public static boolean getBoolean(Context context, String keyId, boolean defaultValue) {
        return getBoolean(fileName, context, keyId, defaultValue);
    }

    @SuppressLint("CommitPrefEdits")
    public static void setBoolean(Context context, String keyId, boolean value) {
        setBoolean(fileName, context, keyId, value);
    }

    public static int getInt(Context context, String keyId, int defaultValue) {
        return getInt(fileName, context, keyId, defaultValue);
    }

    @SuppressLint("CommitPrefEdits")
    public static void setInt(Context context, String keyId, int value) {
        setInt(fileName, context, keyId, value);
    }

    public static long getLong(Context context, String keyId) {
        return getLong(fileName, context, keyId);
    }

    @SuppressLint("CommitPrefEdits")
    public static void setLong(Context context, String keyId, long value) {
        setLong(fileName, context, keyId, value);
    }

    public static String getString(Context context, String keyId, String defaultValue) {
        return getString(fileName, context, keyId, defaultValue);

    }

    @SuppressLint("CommitPrefEdits")
    public static void setString(Context context, String keyId, String value) {
        setString(fileName, context, keyId, value);
    }

    @SuppressLint("CommitPrefEdits")
    public static void resetAll(Context context) {
        resetAll(fileName, context);
    }

}
