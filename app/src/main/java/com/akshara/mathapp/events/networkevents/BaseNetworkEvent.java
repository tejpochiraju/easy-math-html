package com.akshara.mathapp.events.networkevents;

import com.akshara.mathapp.models.NetworkErrorModel;

public class BaseNetworkEvent {

    protected static class OnStart<Rq> {
        private Rq mRequest;

        public OnStart(Rq request) {
            mRequest = request;
        }

        public Rq getRequest() {
            return mRequest;
        }

    }

    protected static class OnDone<Rs> {

        private Rs mResponse;

        public OnDone(Rs response) {
            mResponse = response;
        }

        public Rs getResponse() {
            return mResponse;
        }
    }

    protected static class OnLoadingFailed {

        private NetworkErrorModel errorModel;

        public OnLoadingFailed(NetworkErrorModel errorModel) {
            this.errorModel = errorModel;
        }

        public String getErrorMessage() {
            return errorModel.getErrorMessage();
        }

        public int getResponseCode() {
            return errorModel.getResponseCode();
        }

        public int getErrorCode() {
            return errorModel.getErrorCode();
        }

    }
}
