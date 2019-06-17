package com.akshara.mathapp.data.remote;

import com.akshara.mathapp.MathApp;
import com.akshara.mathapp.R;

/**
 * Created by Rajeef on 31/12/17
 */

public class ApiConstants {
    static final String BASE_URL = MathApp.get().getString(R.string.BASE_URL);

    private static final String ROUTE = "/abs";

    static final String USER_LOGIN = ROUTE + "/login";
    static final String USER_SIGNUP = ROUTE + "/register";
    static final String USER_UPDATE_PROFILE = ROUTE + "/updateprofile";
    static final String GET_CHILD_INFO = ROUTE + "/getchild";
    static final String USER_UPLOAD_IMAGE_FILE = ROUTE + "/uploadpicfile";

}
