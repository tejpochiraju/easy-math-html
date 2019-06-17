package com.akshara.mathapp;

import android.app.Application;
import android.arch.persistence.room.Room;

import com.akshara.mathapp.data.local.AppDatabase;
import com.akshara.mathapp.data.remote.APIRequestHandler;
import com.akshara.mathapp.utils.AppConstants;

/**
 * Created by Rajeef on 31/12/17
 */

public class MathApp extends Application {

    private static MathApp sMathApp;
    private AppDatabase db;
    public static APIRequestHandler apiRequestHandler;

    @Override
    public void onCreate() {
        super.onCreate();
        sMathApp = this;
        setupLocalDatabase();
        setupNetworkLayer();
    }

    private void setupNetworkLayer() {
        apiRequestHandler = new APIRequestHandler();
    }

    private AppDatabase setupLocalDatabase() {
        return db = Room.databaseBuilder(getApplicationContext(),
                AppDatabase.class, AppConstants.LOCAL_DB_NAME).fallbackToDestructiveMigration().build();
    }

    public AppDatabase getLocalDb() {
        if (db == null)
            return setupLocalDatabase();
        return db;
    }

    public static MathApp get() {
        if (sMathApp == null)
            System.exit(0);
        return sMathApp;
    }
}
