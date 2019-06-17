package com.akshara.mathapp.data.remote;

import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;

import okhttp3.OkHttpClient;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

/**
 * Created by Rajeef on 31/12/17
 */

public class APIClient {


    private static volatile APIClient instance;
    private NetworkServiceInterface networkServiceInterface;

    private APIClient() {
        init();
    }

    public void init() {
        HttpLoggingInterceptor logging = new HttpLoggingInterceptor();
        if (MathApp.get().getApplicationContext().getResources().getBoolean(R.bool.DEBUG_MODE)) {
            logging.setLevel(HttpLoggingInterceptor.Level.BODY);
        } else {
            logging.setLevel(HttpLoggingInterceptor.Level.NONE);
        }

        OkHttpClient client = new OkHttpClient.Builder()
                .addInterceptor(logging)
                .build();

        Retrofit retrofit = new Retrofit.Builder()
                .baseUrl(ApiConstants.BASE_URL)
                .addConverterFactory(GsonConverterFactory.create())
                .client(client)
                .build();
        networkServiceInterface = retrofit.create(NetworkServiceInterface.class);

    }

    public static APIClient getInstance() {
        APIClient localInstance = instance;
        if (localInstance == null) {
            synchronized (APIClient.class) {
                localInstance = instance;
                if (localInstance == null) {
                    instance = localInstance = new APIClient();
                }
            }
        }
        return localInstance;
    }

    public NetworkServiceInterface getNetworkServiceInterface() {
        return networkServiceInterface;
    }

}
