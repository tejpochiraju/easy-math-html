package com.akshara.mathapp.data.remote;

import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.events.BusProvider;
import com.akshara.mathapp.events.networkevents.GetChildInfoEvent;
import com.akshara.mathapp.events.networkevents.LoginUserEvent;
import com.akshara.mathapp.events.networkevents.SignupUserEvent;
import com.akshara.mathapp.events.networkevents.UpdateUserEvent;
import com.akshara.mathapp.events.networkevents.UploadImageFileEvent;
import com.akshara.mathapp.models.BaseModel;
import com.akshara.mathapp.utils.NetworkAPIUtils;
import com.akshara.mathapp.utils.NetworkErrorHandleUtil;

import org.greenrobot.eventbus.Subscribe;

import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

/**
 * Created by Rajeef on 31/12/17
 */

public class APIRequestHandler {

    private APIClient mAPIClient;

    public APIRequestHandler() {
        mAPIClient = APIClient.getInstance();
        BusProvider.getInstance().register(this);
    }

    @Subscribe
    public void onSignupUserEvent(SignupUserEvent.OnLoadingStart onLoadingStart) {
        mAPIClient.getNetworkServiceInterface().getUserSignup(NetworkAPIUtils.getJsonRequestBody(onLoadingStart.getRequest()))
                .enqueue(new Callback<BaseModel>() {
                    @Override
                    public void onResponse(Call<BaseModel> call, Response<BaseModel> response) {
                        if (response.isSuccessful()) {
                            BusProvider.getInstance().post(new SignupUserEvent.OnLoadingFinished(response.body()));
                        } else {
                            BusProvider.getInstance().post(new SignupUserEvent.OnLoadingError(NetworkErrorHandleUtil.parseAPIError(response)));
                        }
                    }

                    @Override
                    public void onFailure(Call<BaseModel> call, Throwable t) {
                        BusProvider.getInstance().post(new SignupUserEvent.OnLoadingError(NetworkErrorHandleUtil.parseLoadingError(t)));
                    }
                });
    }

    @Subscribe
    public void onUpdateUserEvent(UpdateUserEvent.OnLoadingStart onLoadingStart) {
        mAPIClient.getNetworkServiceInterface().getUserUpdateProfile(
                NetworkAPIUtils.getJsonRequestBody(onLoadingStart.getRequest()))
                .enqueue(new Callback<BaseModel>() {
                    @Override
                    public void onResponse(Call<BaseModel> call, Response<BaseModel> response) {
                        if (response.isSuccessful()) {
                            BusProvider.getInstance().post(new UpdateUserEvent.OnLoadingFinished(response.body()));
                        } else {
                            BusProvider.getInstance().post(new UpdateUserEvent.OnLoadingError(NetworkErrorHandleUtil.parseAPIError(response)));
                        }
                    }

                    @Override
                    public void onFailure(Call<BaseModel> call, Throwable error) {
                        BusProvider.getInstance().post(new UpdateUserEvent.OnLoadingError(NetworkErrorHandleUtil.parseLoadingError(error)));
                    }
                });
    }

    @Subscribe
    public void onUserLoginEvent(LoginUserEvent.OnLoadingStart onLoadingStart) {
        mAPIClient.getNetworkServiceInterface().getUserLogin(NetworkAPIUtils.getJsonRequestBody(onLoadingStart.getRequest()))
                .enqueue(new Callback<BaseModel>() {
                    @Override
                    public void onResponse(Call<BaseModel> call, Response<BaseModel> response) {
                        if (response.isSuccessful()) {
                            BusProvider.getInstance().post(new LoginUserEvent.OnLoadingFinished(response.body()));
                        } else {
                            BusProvider.getInstance().post(new LoginUserEvent.OnLoadingError(NetworkErrorHandleUtil.parseAPIError(response)));
                        }
                    }

                    @Override
                    public void onFailure(Call<BaseModel> call, Throwable error) {
                        BusProvider.getInstance().post(new LoginUserEvent.OnLoadingError(NetworkErrorHandleUtil.parseLoadingError(error)));
                    }
                });
    }

    @Subscribe
    public void onGetChildInfoEvent(GetChildInfoEvent.OnLoadingStart onLoadingStart) {
        mAPIClient.getNetworkServiceInterface().getChildInfo(NetworkAPIUtils.getJsonRequestBody(onLoadingStart.getRequest()))
                .enqueue(new Callback<User>() {
                    @Override
                    public void onResponse(Call<User> call, Response<User> response) {
                        if (response.isSuccessful()) {
                            BusProvider.getInstance().post(new GetChildInfoEvent.OnLoadingFinished(response.body()));
                        } else {
                            BusProvider.getInstance().post(new GetChildInfoEvent.OnLoadingError(NetworkErrorHandleUtil.parseAPIError(response)));
                        }
                    }

                    @Override
                    public void onFailure(Call<User> call, Throwable error) {
                        BusProvider.getInstance().post(new GetChildInfoEvent.OnLoadingError(NetworkErrorHandleUtil.parseLoadingError(error)));
                    }
                });
    }

    @Subscribe
    public void onUploadImageFileEvent(UploadImageFileEvent.OnLoadingStart onLoadingStart) {
        mAPIClient.getNetworkServiceInterface().getUploadImageFile(
                NetworkAPIUtils.getMultiPartRequestMap(onLoadingStart.getRequest()),
                NetworkAPIUtils.getMultiPartBody(onLoadingStart.getRequest().getBody().get(0)))
                .enqueue(new Callback<BaseModel>() {
                    @Override
                    public void onResponse(Call<BaseModel> call, Response<BaseModel> response) {
                        if (response.isSuccessful()) {
                            BusProvider.getInstance().post(new UploadImageFileEvent.OnLoadingFinished(response.body()));
                        } else {
                            BusProvider.getInstance().post(new UploadImageFileEvent.OnLoadingError(NetworkErrorHandleUtil.parseAPIError(response)));
                        }
                    }

                    @Override
                    public void onFailure(Call<BaseModel> call, Throwable error) {
                        BusProvider.getInstance().post(new UploadImageFileEvent.OnLoadingError(NetworkErrorHandleUtil.parseLoadingError(error)));
                    }
                });
    }
}
