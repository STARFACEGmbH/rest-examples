package com.starface.rest.groups;

import com.fasterxml.jackson.core.type.TypeReference;
import com.starface.rest.configuration.Configuration;
import com.starface.rest.users.User;
import okhttp3.Request;
import okhttp3.RequestBody;
import okhttp3.Response;

import java.io.IOException;
import java.util.Collections;
import java.util.List;

public class GroupsRestClient {

    private static final TypeReference<List<GroupOverview>> USER_LIST_TYPE_REFERENCE = new TypeReference<>() {};
    private final Configuration configuration;

    public GroupsRestClient(Configuration configuration) {
        this.configuration = configuration;
    }

    public List<GroupOverview> getAllGroups() throws IOException {
        Request getAllGroupsRequest = new Request.Builder()
                .get()
                .url(configuration.getPbxBaseUrl() + "/rest/groups")
                .build();

        return configuration.getObjectMapper().readValue(configuration.getOkHttpClient().newCall(getAllGroupsRequest).execute().body().bytes(), USER_LIST_TYPE_REFERENCE);
    }

    public Group getGroupDetails(int id) throws IOException {
        Request getAllGroupsRequest = new Request.Builder()
                .get()
                .url(configuration.getPbxBaseUrl() + "/rest/groups/" + id)
                .build();

        return configuration.getObjectMapper().readValue(configuration.getOkHttpClient().newCall(getAllGroupsRequest).execute().body().bytes(), Group.class);
    }

    public void addUserToGroup(User user, Group group) throws IOException {
        AssignableUser assignableUser = new AssignableUser();
        assignableUser.setId(user.getId());
        assignableUser.setFirstname(user.getFirstName());
        assignableUser.setLastname(user.getFamilyName());
        assignableUser.setAssigned(true);
        group.setAssignableUsers(Collections.singletonList(assignableUser));

        Request addUserToGroupRequest = new Request.Builder()
                .put(RequestBody.create(configuration.getObjectMapper().writeValueAsBytes(group)))
                .addHeader("Content-Type", "application/json")
                .url(configuration.getPbxBaseUrl() + "/rest/groups")
                .build();

        configuration.getOkHttpClient().newCall(addUserToGroupRequest).execute();
    }
}
