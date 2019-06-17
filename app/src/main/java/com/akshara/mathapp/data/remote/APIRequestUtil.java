package com.akshara.mathapp.data.remote;

import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.models.RequestModel;

import java.io.File;

/**
 * Created by Rajeef on 31/12/17
 */

public class APIRequestUtil {

    private static RequestModel getBaseAuthParams() {
        return new RequestModel();
    }

    public static RequestModel getUserRegisterParams(User user) {
        RequestModel requestModel = getBaseAuthParams();
        requestModel.addParam("name", user.getName());
        requestModel.addParam("phone", user.getPhoneNumber());
        requestModel.addParam("age", user.getAge());
        requestModel.addParam("grade", user.getGrade());
        requestModel.addParam("schooltype", user.getSchoolType());
        requestModel.addParam("geo", user.getGeo());
        requestModel.addParam("language", user.getLanguage());
        requestModel.addParam("gender", user.getGender());
        requestModel.addParam("deviceid", user.getDeviceId());
        if (user.getOrganization() != null)
            requestModel.addParam("organization", user.getOrganization());
        return requestModel;
    }

    public static RequestModel getUserUpdateParams(User user) {
        RequestModel requestModel = getBaseAuthParams();
        requestModel.addParam("access_token", user.getUid());
        requestModel.addParam("phone", user.getPhoneNumber());
        requestModel.addParam("age", user.getAge());
        requestModel.addParam("grade", user.getGrade());
        requestModel.addParam("schooltype", user.getSchoolType());
        requestModel.addParam("language", user.getLanguage());
        requestModel.addParam("phone", user.getPhoneNumber());
        if (user.getAvatarBase64() != null)
            requestModel.addParam("avatarpic", user.getAvatarBase64());
        return requestModel;
    }

    public static RequestModel getUserLogin(String name, String phone, String deviceId) {
        RequestModel requestModel = getBaseAuthParams();
        requestModel.addParam("name", name);
        requestModel.addParam("phone", phone);
        requestModel.addParam("deviceid", deviceId);
        return requestModel;
    }

    public static RequestModel getImageFileUpload(String accessToken, String filePath) {
        RequestModel requestModel = getBaseAuthParams();
        requestModel.addParam("access_token", accessToken);
        requestModel.addBody("avatarpicfile", new File(filePath));
        return requestModel;
    }

    public static RequestModel getChildInfo(String name, String phone, String accessToken) {
        RequestModel requestModel = getBaseAuthParams();
        requestModel.addParam("name", name);
        requestModel.addParam("phone", phone);
        requestModel.addParam("access_token", accessToken);
        return requestModel;
    }

}
