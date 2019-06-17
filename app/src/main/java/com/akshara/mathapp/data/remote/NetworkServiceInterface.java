package com.akshara.mathapp.data.remote;

import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.models.BaseModel;

import java.util.Map;

import okhttp3.MultipartBody;
import okhttp3.RequestBody;
import retrofit2.Call;
import retrofit2.http.Body;
import retrofit2.http.Multipart;
import retrofit2.http.POST;
import retrofit2.http.Part;
import retrofit2.http.PartMap;

/**
 * Created by Rajeef on 31/12/17
 */

public interface NetworkServiceInterface {

    @POST(ApiConstants.USER_SIGNUP)
    Call<BaseModel> getUserSignup(@Body RequestBody requestBody);

    @POST(ApiConstants.USER_UPDATE_PROFILE)
    Call<BaseModel> getUserUpdateProfile(@Body RequestBody requestBody);

    @POST(ApiConstants.USER_LOGIN)
    Call<BaseModel> getUserLogin(@Body RequestBody requestBody);

    @POST(ApiConstants.GET_CHILD_INFO)
    Call<User> getChildInfo(@Body RequestBody requestBody);

    @Multipart
    @POST(ApiConstants.USER_UPLOAD_IMAGE_FILE)
    Call<BaseModel> getUploadImageFile(
            @PartMap() Map<String, RequestBody> partMap, @Part MultipartBody.Part file);
}