package com.starface.rest.configuration;

import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.starface.rest.login.StarfaceAuthenticator;
import okhttp3.OkHttpClient;

import java.io.IOException;

public class ConfigurationLoader {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper().configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);

    public static Configuration load() {
        final Configuration configuration;
        try {
            configuration = OBJECT_MAPPER.readValue(ConfigurationLoader.class.getClassLoader().getResourceAsStream("configuration.json"), Configuration.class);
        } catch (IOException e) {
            throw new IllegalArgumentException("Unable to parse configuration", e);
        }
        configuration.setObjectMapper(OBJECT_MAPPER);
        configuration.setOkHttpClient(new OkHttpClient.Builder().authenticator(new StarfaceAuthenticator(configuration)).build());
        return configuration;
    }
}
