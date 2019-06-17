package com.akshara.mathapp.data.local;

import android.arch.persistence.room.ColumnInfo;
import android.arch.persistence.room.Entity;
import android.arch.persistence.room.Ignore;
import android.arch.persistence.room.PrimaryKey;
import android.os.Parcel;
import android.os.Parcelable;

import com.google.gson.annotations.SerializedName;

/**
 * Created by Rajeef on 1/1/18
 */

@Entity
public class User implements Parcelable {

    @PrimaryKey(autoGenerate = true)
    private int id;

    @ColumnInfo(name = "uid")
    private String uid;

    @ColumnInfo(name = "name")
    private String name;

    @ColumnInfo(name = "phone")
    @SerializedName("phone")
    private String phoneNumber;

    @ColumnInfo(name = "age")
    private String age;

    @ColumnInfo(name = "grade")
    private String grade;

    @ColumnInfo(name = "school_type")
    @SerializedName("schooltype")
    private String schoolType;

    @ColumnInfo(name = "language")
    private String language;

    @ColumnInfo(name = "gender")
    private String gender;

    @ColumnInfo(name = "avatar_pic_local")
    private String avatarPicLocalPath;

    @Ignore
    @SerializedName("avatarpic")
    private String avatarBase64;

    @Ignore
    private String geo;

    @Ignore
    private String deviceId;

    @Ignore
    @SerializedName("status")
    private String status;

    @Ignore
    @SerializedName("description")
    private String description;

    @Ignore
    private String organization;

    public User() {

    }


    protected User(Parcel in) {
        id = in.readInt();
        uid = in.readString();
        name = in.readString();
        phoneNumber = in.readString();
        grade = in.readString();
        schoolType = in.readString();
        language = in.readString();
        gender = in.readString();
        avatarPicLocalPath = in.readString();
        avatarBase64 = in.readString();
        geo = in.readString();
        age = in.readString();
        deviceId = in.readString();
        status = in.readString();
        description = in.readString();
        organization = in.readString();
    }

    public static final Creator<User> CREATOR = new Creator<User>() {
        @Override
        public User createFromParcel(Parcel in) {
            return new User(in);
        }

        @Override
        public User[] newArray(int size) {
            return new User[size];
        }
    };

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUid() {
        return uid;
    }

    public void setUid(String uid) {
        this.uid = uid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGrade() {
        return grade;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }


    public String getSchoolType() {
        return schoolType;
    }

    public void setSchoolType(String schoolType) {
        this.schoolType = schoolType;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getAvatarPicLocalPath() {
        return avatarPicLocalPath;
    }

    public void setAvatarPicLocalPath(String avatarPicLocalPath) {
        this.avatarPicLocalPath = avatarPicLocalPath;
    }

    public String getAvatarBase64() {
        return avatarBase64;
    }

    public void setAvatarBase64(String avatarBase64) {
        this.avatarBase64 = avatarBase64;
    }

    public String getGeo() {
        return geo;
    }

    public void setGeo(String geo) {
        this.geo = geo;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }

    public String getDeviceId() {
        return deviceId;
    }

    public void setDeviceId(String deviceId) {
        this.deviceId = deviceId;
    }

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

    public String getOrganization() {
        return organization;
    }

    public void setOrganization(String organization) {
        this.organization = organization;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel parcel, int i) {
        parcel.writeInt(id);
        parcel.writeString(uid);
        parcel.writeString(name);
        parcel.writeString(phoneNumber);
        parcel.writeString(grade);
        parcel.writeString(schoolType);
        parcel.writeString(language);
        parcel.writeString(gender);
        parcel.writeString(avatarPicLocalPath);
        parcel.writeString(avatarBase64);
        parcel.writeString(geo);
        parcel.writeString(age);
        parcel.writeString(deviceId);
        parcel.writeString(status);
        parcel.writeString(description);
        parcel.writeString(organization);
    }
}
