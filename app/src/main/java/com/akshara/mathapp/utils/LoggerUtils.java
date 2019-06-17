package com.akshara.mathapp.utils;

import android.util.Log;

public final class LoggerUtils {

    public static void d(String TAG, String string) {
        Log.d(TAG, string);
    }

    public static void e(String TAG, String string) {
        Log.e(TAG, string);
    }

    public static void i(String TAG, String string) {
        Log.i(TAG, string);
    }

}
