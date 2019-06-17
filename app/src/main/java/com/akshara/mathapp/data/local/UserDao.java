package com.akshara.mathapp.data.local;

import android.arch.persistence.room.Dao;
import android.arch.persistence.room.Delete;
import android.arch.persistence.room.Insert;
import android.arch.persistence.room.Query;
import android.arch.persistence.room.Update;

import java.util.List;

/**
 * Created by Rajeef on 1/1/18
 */

@Dao
public interface UserDao {

    @Query("SELECT * FROM user")
    List<User> getAll();

    @Insert
    void insertAll(User... users);

    @Update
    void updateUsers(User... users);

    @Delete
    void delete(User user);

    @Query("SELECT * FROM user WHERE name LIKE :name AND "
            + "phone LIKE :phone LIMIT 1")
    User findBySignInCred(String name, String phone);


}
