package com.akshara.mathapp.models;

import com.google.gson.annotations.SerializedName;

/**
 * Created by Rajeef on 15/1/18
 */

public class BaseModel {

    @SerializedName("status")
    private String status;

    @SerializedName("description")
    private String description;

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
