package com.akshara.mathapp.models;

import android.support.v4.util.ArrayMap;

import java.io.File;
import java.util.ArrayList;
import java.util.Map;

public class RequestModel {

    private Map<String, Object> requestParams = new ArrayMap<>();
    private ArrayList<Map<String, File>> requestBodyFile = new ArrayList<>();

    public Map<String, Object> getRequestParams() {
        return requestParams;
    }

    public ArrayList<Map<String, File>> getBody() {
        return requestBodyFile;
    }

    public void addParam(String key, Object value) {
        requestParams.put(key, value);
    }

    public void addBody(String key, File value) {
        Map<String, File> requestMap = new ArrayMap<>();
        requestMap.put(key, value);
        requestBodyFile.add(requestMap);
    }

}
