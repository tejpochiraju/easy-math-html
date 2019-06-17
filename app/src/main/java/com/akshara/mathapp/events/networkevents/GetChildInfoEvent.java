package com.akshara.mathapp.events.networkevents;

import com.akshara.mathapp.data.local.User;
import com.akshara.mathapp.models.NetworkErrorModel;
import com.akshara.mathapp.models.RequestModel;

/**
 * Created by Rajeef on 18/1/18
 */

public class GetChildInfoEvent extends BaseNetworkEvent {

    public static class OnLoadingStart extends OnStart<RequestModel> {
        public OnLoadingStart(RequestModel requestModel) {
            super(requestModel);
        }
    }

    public static class OnLoadingFinished extends OnDone<User> {
        public OnLoadingFinished(User mUser) {
            super(mUser);
        }
    }

    public static class OnLoadingError extends OnLoadingFailed {
        public OnLoadingError(NetworkErrorModel errorModel) {
            super(errorModel);
        }
    }
}
