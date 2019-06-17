package com.akshara.mathapp.events.networkevents;

import com.akshara.mathapp.models.BaseModel;
import com.akshara.mathapp.models.NetworkErrorModel;
import com.akshara.mathapp.models.RequestModel;

/**
 * Created by Rajeef on 18/1/18
 */

public class LoginUserEvent extends BaseNetworkEvent {

    public static class OnLoadingStart extends OnStart<RequestModel> {
        public OnLoadingStart(RequestModel requestModel) {
            super(requestModel);
        }
    }

    public static class OnLoadingFinished extends OnDone<BaseModel> {
        public OnLoadingFinished(BaseModel mBaseModel) {
            super(mBaseModel);
        }
    }

    public static class OnLoadingError extends OnLoadingFailed {
        public OnLoadingError(NetworkErrorModel errorModel) {
            super(errorModel);
        }
    }
}
