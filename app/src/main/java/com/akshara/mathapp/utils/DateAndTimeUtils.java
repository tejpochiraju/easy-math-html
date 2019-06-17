package com.akshara.mathapp.utils;

import android.text.format.DateUtils;

import java.sql.Timestamp;
import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.Locale;
import java.util.TimeZone;
import java.util.concurrent.TimeUnit;

public class DateAndTimeUtils {

    public static String convertTimeStampToLocalTime(String timeStampValue) {
        long formatedTime = 0;
        DateFormat mDateFormat = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        try {
            formatedTime = mDateFormat.parse(timeStampValue).getTime() + TimeZone.getDefault().getRawOffset();
        } catch (ParseException e) {
            e.printStackTrace();
        }
        return DateFormat.getTimeInstance().format(formatedTime);
    }

    public static String getCurrentEpochTimeStampSecondsString() {
        long unixTime = getCurrentEpochTimeStampInSeconds();
        return String.valueOf(unixTime);
    }

    public static long getCurrentEpochTimeStampInSeconds() {
        return getCurrentEpochTimeStampInMilli() / 1000L;
    }

    public static long getCurrentEpochTimeStampInMilli() {
        return System.currentTimeMillis();
    }

    public static String getGMTDateAndTime() {
        SimpleDateFormat formatter = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss.SSS");
        formatter.setTimeZone(TimeZone.getTimeZone("gmt"));
        return formatter.format(new java.util.Date());
    }

    public static boolean isTimeStampExpired(long timeStampEpochValue) {
        Timestamp timestampExpireDate = new Timestamp(timeStampEpochValue);
        long currentEpoch = getCurrentEpochTimeStampInSeconds();
        Timestamp currentTimeStamp = new Timestamp(currentEpoch);
        return currentTimeStamp.after(timestampExpireDate);
    }

    public static long getTimeStampForDays(int days) {
        Date dt = new Date();
        Calendar c = Calendar.getInstance();
        c.setTime(dt);
        c.add(Calendar.DATE, days);
        dt = c.getTime();
        return dt.getTime() / 1000L;
    }

    public static long addSecondsToTimeStamp(long timeStampEpoch, int secondsToAdd) {
        Calendar c = Calendar.getInstance();
        Timestamp timestamp = new Timestamp(timeStampEpoch);
        c.setTimeInMillis(timestamp.getTime());
        c.add(Calendar.SECOND, secondsToAdd);
        return c.getTime().getTime();
    }

    public static CharSequence getTimeAgo(long timeStamp) {
        return DateUtils.getRelativeTimeSpanString(
                timeStamp,
                getCurrentEpochTimeStampInMilli(), DateUtils.SECOND_IN_MILLIS);
    }

    public static String formatMilliSecondAndReturnString(long milliSecond) {
        return String.format(Locale.ENGLISH, "%02d:%02d:%02d",
                TimeUnit.MILLISECONDS.toHours(milliSecond),
                TimeUnit.MILLISECONDS.toMinutes(milliSecond) -
                        TimeUnit.HOURS.toMinutes(TimeUnit.MILLISECONDS.toHours(milliSecond)),
                TimeUnit.MILLISECONDS.toSeconds(milliSecond) -
                        TimeUnit.MINUTES.toSeconds(TimeUnit.MILLISECONDS.toMinutes(milliSecond)));
    }

    public static long getElapsedTimeFromTimeStamp(long timeStamp) {
        long diff = getCurrentEpochTimeStampInMilli() - timeStamp;
        return diff <= 0 ? 0 : diff;
    }

}
