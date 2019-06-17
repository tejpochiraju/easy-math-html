package com.akshara.mathapp.utils;

import android.content.Context;

import com.akshara.mathapp.R;

/**
 * Created by Rajeef on 17/1/18
 */

public class DataParserUtil {

    public static int getPositionForLanguage(String language) {
        switch (language) {
            case AppConstants.LANGUAGE_VALUE_ODIYA:
                return 1;
            case AppConstants.LANGUAGE_VALUE_KANNADA:
                return 2;
            case AppConstants.LANGUAGE_VALUE_HINDI:
                return 3;
            case AppConstants.LANGUAGE_VALUE_ENGLISH:
                return 4;
            default:
                return 0;
        }
    }

    public static String getLanguageValueFromPosition(int position) {
        switch (position) {
            case 1:
                return AppConstants.LANGUAGE_VALUE_ODIYA;
            case 2:
                return AppConstants.LANGUAGE_VALUE_KANNADA;
            case 3:
                return AppConstants.LANGUAGE_VALUE_HINDI;
            case 4:
                return AppConstants.LANGUAGE_VALUE_ENGLISH;
            default:
                return "";
        }
    }

    public static int getPositionForSchoolType(String schoolType) {
        switch (schoolType) {
            case AppConstants.ID_SCHOOL_TYPE_GOVT:
                return 1;
            case AppConstants.ID_SCHOOL_TYPE_PVT:
                return 2;
            default:
                return 0;
        }
    }

    public static String getSchoolTypeFromPosition(int position) {
        switch (position) {
            case 1:
                return AppConstants.ID_SCHOOL_TYPE_GOVT;
            case 2:
                return AppConstants.ID_SCHOOL_TYPE_PVT;
            default:
                return "";
        }
    }

    public static String getLanguageValueFromText(Context context, String language) {
        if (language.contentEquals(context.getString(R.string.textview_language_odiya)))
            return AppConstants.LANGUAGE_VALUE_ODIYA;
        if (language.contentEquals(context.getString(R.string.textview_language_kannada)))
            return AppConstants.LANGUAGE_VALUE_KANNADA;
        if (language.contentEquals(context.getString(R.string.textview_language_hindi)))
            return AppConstants.LANGUAGE_VALUE_HINDI;
        if (language.contentEquals(context.getString(R.string.textview_language_english)))
            return AppConstants.LANGUAGE_VALUE_ENGLISH;
        return "";
    }

    public static String getLocaleCodeFromLanguageValue(String selectedLanguage) {
        if (selectedLanguage == null)
            return AppConstants.LANGUAGE_CODE_ENGLISH;
        switch (selectedLanguage) {
            case AppConstants.LANGUAGE_VALUE_ODIYA:
                return AppConstants.LANGUAGE_CODE_ODIYA;
            case AppConstants.LANGUAGE_VALUE_KANNADA:
                return AppConstants.LANGUAGE_CODE_KANNADA;
            case AppConstants.LANGUAGE_VALUE_HINDI:
                return AppConstants.LANGUAGE_CODE_HINDI;
            default:
                return AppConstants.LANGUAGE_CODE_ENGLISH;
        }
    }

    public static int getPositionForClassType(Context context, String grade) {
        if (grade == null)
            return 0;
        if (grade.contentEquals(context.getString(R.string.first_grade)))
            return 1;
        if (grade.contentEquals(context.getString(R.string.second_grade)))
            return 2;
        if (grade.contentEquals(context.getString(R.string.third_grade)))
            return 3;
        if (grade.contentEquals(context.getString(R.string.fourth_grade)))
            return 4;
        if (grade.contentEquals(context.getString(R.string.fifth_grade)))
            return 5;
        if (grade.contentEquals(context.getString(R.string.sixth_grade)))
            return 6;
        if (grade.contentEquals(context.getString(R.string.seventh_grade)))
            return 7;
        if (grade.contentEquals(context.getString(R.string.eighth_grade)))
            return 8;
        if (grade.contentEquals(context.getString(R.string.ninth_grade)))
            return 9;
        return 0;
    }
}
