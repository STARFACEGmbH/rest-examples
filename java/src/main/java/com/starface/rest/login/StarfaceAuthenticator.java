package com.starface.rest.login;

import com.starface.rest.configuration.Configuration;
import okhttp3.Authenticator;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;
import okhttp3.Route;
import org.apache.commons.codec.digest.DigestUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * This class creates the Authentication Token as described in
 * https://knowledge.starface.de/display/wiki67/REST+-+Schnittstelle#REST-Schnittstelle-Beispielf%C3%BCrdieAuthentifizierung
 */
public class StarfaceAuthenticator implements Authenticator {

    private final DigestUtils digestUtils = new DigestUtils("SHA-512");

    private final OkHttpClient client = new OkHttpClient.Builder().build();
    private final Configuration configuration;

    public StarfaceAuthenticator(Configuration configuration) {
        this.configuration = configuration;
    }

    @Override
    public Request authenticate(@Nullable Route route, @NotNull Response response) throws IOException {
        final String nonce = requestNonceFromPbx();
        Map<String, String> tokenRequestBody = createSecret(nonce);
        final String authToken = requestToken(tokenRequestBody);
        return response.request().newBuilder().header("authToken", authToken).build();
    }

    private String requestNonceFromPbx() throws IOException {
        Request getNonce = new Request.Builder()
                .get()
                .url(configuration.getPbxBaseUrl() + "/rest/login")
                .build();

        return configuration.getObjectMapper().readValue(client.newCall(getNonce).execute().body().string(), Map.class).get("nonce").toString();
    }

    private Map<String, String> createSecret(String nonce) {
        final String hash = digestUtils.digestAsHex(configuration.getAdmin().getUsername() + nonce + digestUtils.digestAsHex(configuration.getAdmin().getPassword()));

        final String secret = configuration.getAdmin().getUsername() + ":" + hash;
        Map<String, String> tokenRequestBody = new HashMap<>();
        tokenRequestBody.put("loginType", "Internal");
        tokenRequestBody.put("nonce", nonce);
        tokenRequestBody.put("secret", secret);
        return tokenRequestBody;
    }

    private String requestToken(Map<String, String> tokenRequestBody) throws IOException {
        Request getToken = new Request.Builder()
                .addHeader("Content-Type", "application/json")
                .addHeader("X-Version", "2")
                .url(configuration.getPbxBaseUrl() + "/rest/login")
                .post(RequestBody.create(configuration.getObjectMapper().writeValueAsBytes(tokenRequestBody)))
                .build();

        return configuration.getObjectMapper().readValue(client.newCall(getToken).execute().body().string(), Map.class).get("token").toString();
    }
}
