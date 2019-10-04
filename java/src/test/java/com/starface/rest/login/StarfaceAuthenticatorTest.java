package com.starface.rest.login;

import com.starface.rest.configuration.Configuration;
import com.starface.rest.configuration.ConfigurationLoader;
import okhttp3.Protocol;
import okhttp3.Request;
import okhttp3.Response;
import org.junit.jupiter.api.Test;

import java.io.IOException;

import static org.assertj.core.api.Assertions.assertThat;

class StarfaceAuthenticatorTest {

    private final Configuration configuration = ConfigurationLoader.load();
    private final StarfaceAuthenticator starfaceAuthenticator = new StarfaceAuthenticator(configuration);

    @Test
    public void loginSuccess() throws IOException {
        Response response = new Response.Builder()
                .protocol(Protocol.HTTP_1_1)
                .message("message")
                .code(401)
                .request(new Request.Builder().url(configuration.getPbxBaseUrl() + "/rest/users").build())
                .build();
        Request request = starfaceAuthenticator.authenticate(null, response);
        assertThat(request.header("authToken")).isNotBlank();
    }

}