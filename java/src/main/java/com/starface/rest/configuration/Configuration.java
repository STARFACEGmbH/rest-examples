package com.starface.rest.configuration;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.ObjectMapper;
import okhttp3.OkHttpClient;

public class Configuration {
    @JsonIgnore
    private ObjectMapper objectMapper;
    private String pbxBaseUrl;
    private Admin admin;
    @JsonIgnore
    private OkHttpClient okHttpClient;

    public String getPbxBaseUrl() {
        return pbxBaseUrl;
    }

    public void setPbxBaseUrl(String pbxBaseUrl) {
        this.pbxBaseUrl = pbxBaseUrl;
    }

    public Admin getAdmin() {
        return admin;
    }

    public void setAdmin(Admin admin) {
        this.admin = admin;
    }

    public void setObjectMapper(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public ObjectMapper getObjectMapper() {
        return objectMapper;
    }

    public OkHttpClient getOkHttpClient() {
        return okHttpClient;
    }

    public void setOkHttpClient(OkHttpClient okHttpClient) {
        this.okHttpClient = okHttpClient;
    }
}
