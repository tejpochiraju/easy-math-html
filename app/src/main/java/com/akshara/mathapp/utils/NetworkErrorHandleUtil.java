package com.akshara.mathapp.utils;


import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;
import com.akshara.mathapp.models.NetworkErrorModel;

import org.json.JSONObject;

import java.io.IOException;

import retrofit2.Response;

/**
 * Created by rmk on 21/10/15.
 */
public class NetworkErrorHandleUtil {

    public static NetworkErrorModel parseAPIError(Response<?> response) {
        try {
            JSONObject errorObject = new JSONObject(response.errorBody().string());
            return new NetworkErrorModel(NetworkErrorModel.API_ERROR, errorObject.getString("description"), response.code());
        } catch (Exception e) {
            e.printStackTrace();
        }
        return new NetworkErrorModel(NetworkErrorModel.API_ERROR, MathApp.get().getString(R.string.error_message_server_error_fallback), response.code());
    }

    public static NetworkErrorModel parseLoadingError(Throwable error) {
        if (error != null && error instanceof IOException) {
            return new NetworkErrorModel(NetworkErrorModel.NETWORK_ERROR, MathApp.get().getString(R.string.error_message_no_internet));
        } else {
            return new NetworkErrorModel(NetworkErrorModel.API_ERROR, MathApp.get().getString(R.string.error_message_server_error_fallback));
        }
    }

}