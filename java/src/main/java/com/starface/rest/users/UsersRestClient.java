package com.starface.rest.users;

import com.fasterxml.jackson.core.type.TypeReference;
import com.starface.rest.configuration.Configuration;
import okhttp3.Request;
import okhttp3.RequestBody;

import java.io.IOException;
import java.util.List;

public class UsersRestClient {

    private static final TypeReference<List<User>> USER_LIST_TYPE_REFERENCE = new TypeReference<>() {};
    private final Configuration configuration;

    public UsersRestClient(Configuration configuration) {
        this.configuration = configuration;
    }

    public List<User> getAllUsers() throws IOException {
        Request getAllUsersRequest = new Request.Builder()
                .get()
                .url(configuration.getPbxBaseUrl() + "/rest/users")
                .build();

        return configuration.getObjectMapper().readValue(configuration.getOkHttpClient().newCall(getAllUsersRequest).execute().body().bytes(), USER_LIST_TYPE_REFERENCE);
    }

    public void createUser(CreateUserRequest newUser) throws IOException {
        Request createUserRequest = new Request.Builder()
                .post(RequestBody.create(configuration.getObjectMapper().writeValueAsBytes(newUser)))
                .addHeader("Content-Type", "application/json")
                .url(configuration.getPbxBaseUrl() + "/rest/users")
                .build();

        configuration.getOkHttpClient().newCall(createUserRequest).execute();
    }

    public void deleteUser(int userId) throws IOException {
        Request deleteUserRequest = new Request.Builder()
                .delete()
                .addHeader("Content-Type", "application/json")
                .url(configuration.getPbxBaseUrl() + "/rest/users/" + userId)
                .build();

        configuration.getOkHttpClient().newCall(deleteUserRequest).execute();
    }

}
