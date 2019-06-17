package com.akshara.mathapp.models;

import android.support.annotation.IntDef;

import com.akshara.mathapp.events.networkevents.BaseNetworkEvent;

/**
 * Created by Rajeef on 31/12/17
 */

public class NetworkErrorModel extends BaseNetworkEvent {
    public static final int API_ERROR = 101;
    public static final int NETWORK_ERROR = 102;

    @IntDef({API_ERROR, NETWORK_ERROR})
    public @interface NetworkError {

    }

    private String errorMessage;
    private int responseCode;
    private int errorCode;

    public NetworkErrorModel(@NetworkError int errorCode, String errorMessage, int responseCode) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
        this.responseCode = responseCode;
    }

    public NetworkErrorModel(@NetworkError int errorCode, String errorMessage) {
        this.errorCode = errorCode;
        this.errorMessage = errorMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public int getResponseCode() {
        return responseCode;
    }

    public int getErrorCode() {
        return errorCode;
    }
}
