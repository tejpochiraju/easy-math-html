package com.akshara.mathapp.utils;

import android.support.annotation.NonNull;

import com.akshara.mathapp.models.RequestModel;

import org.json.JSONObject;

import java.io.File;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import okhttp3.MediaType;
import okhttp3.MultipartBody;
import okhttp3.RequestBody;

/**
 * Created by Rajeef on 15/1/18
 */

public class NetworkAPIUtils {

    private static final String MULTIPART_FORM_DATA = "multipart/form-data";
    private static final String JSON_DATA = "application/json; charset=utf-8";

    public static RequestBody getJsonRequestBody(RequestModel onLoadingStart) {
        return RequestBody.create(okhttp3.MediaType.parse(JSON_DATA), (new JSONObject(onLoadingStart.getRequestParams())).toString());
    }

    public static MultipartBody.Part getMultiPartBody(Map<String, File> bodyFileMap) {
        Map.Entry<String, File> entry = bodyFileMap.entrySet().iterator().next();
        File bodyFile = entry.getValue();
        RequestBody requestBody = RequestBody.create(MediaType.parse(MULTIPART_FORM_DATA), bodyFile);
        return MultipartBody.Part.createFormData(entry.getKey(), bodyFile.getName(), requestBody);
    }

    public static HashMap<String, RequestBody> getMultiPartRequestMap(RequestModel onLoadingStart) {
        Iterator it = onLoadingStart.getRequestParams().entrySet().iterator();
        HashMap<String, RequestBody> requestBodyMap = new HashMap<>();
        while (it.hasNext()) {
            Map.Entry pair = (Map.Entry) it.next();
            requestBodyMap.put(pair.getKey().toString(), createPartFromString(pair.getValue().toString()));
            it.remove();
        }
        return requestBodyMap;
    }

    @NonNull
    private static RequestBody createPartFromString(String descriptionString) {
        return RequestBody.create(
                MediaType.parse(MULTIPART_FORM_DATA), descriptionString);
    }
}