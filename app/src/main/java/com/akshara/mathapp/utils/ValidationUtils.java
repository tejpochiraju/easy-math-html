package com.akshara.mathapp.utils;

import android.content.Context;
import android.telephony.PhoneNumberUtils;

import com.akshara.mathapp.R;

/**
 * Created by Rajeef on 17/1/18
 */

public class ValidationUtils {

    public static boolean isAgeValidated(Context context, String age) {
        int ageInt = Integer.valueOf(age);
        if (age.isEmpty() || ageInt <= 0 || ageInt > 100) {
            MsgUtils.displayToast(context, R.string.error_message_age_field);
            return false;
        }
        return true;
    }

    public static boolean isPhoneValidated(Context context, String phoneNumber) {
        if (phoneNumber.isEmpty() || !android.util.Patterns.PHONE.matcher(phoneNumber).matches()
                || !PhoneNumberUtils.isGlobalPhoneNumber(phoneNumber)
                || phoneNumber.length() < 10) {
            MsgUtils.displayToast(context, R.string.error_message_phone_field);
            return false;
        }
        return true;
    }

    public static boolean isNameValidated(Context context, String name) {
        if (name.isEmpty()) {
            MsgUtils.displayToast(context, R.string.error_message_name_field);
            return false;
        }
        return true;
    }

}
