package com.starface.rest.groups;

import com.starface.rest.configuration.Configuration;
import com.starface.rest.configuration.ConfigurationLoader;
import com.starface.rest.users.CreateUserRequest;
import com.starface.rest.users.User;
import com.starface.rest.users.UsersRestClient;
import org.junit.jupiter.api.AfterAll;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.util.Collections;
import java.util.Locale;
import java.util.Optional;

class GroupsRestClientTest {

    private static final Configuration configuration = ConfigurationLoader.load();
    private static final UsersRestClient usersRestClient = new UsersRestClient(configuration);
    private static User userToAdd;

    private final GroupsRestClient groupsRestClient = new GroupsRestClient(configuration);


    @BeforeAll
    public static void setup() throws IOException {
        CreateUserRequest newUser = new CreateUserRequest();
        newUser.setEmail("test@starface.com");
        newUser.setFirstName("Test");
        newUser.setFamilyName("Test");
        newUser.setPassword("secret1234!");
        newUser.setLogin("1002");
        newUser.setLanguage(Locale.ENGLISH.getLanguage());
        usersRestClient.createUser(newUser);

        userToAdd = usersRestClient.getAllUsers()
                .stream()
                .filter(entry -> entry.getLogin().equals(newUser.getLogin()))
                .findFirst().orElseThrow(() -> new IllegalStateException("User was not created"));
    }

    @AfterAll
    public static void cleanup() throws IOException {
        usersRestClient.deleteUser(userToAdd.getId());
    }

    @Test
    public void getAllGroups() throws IOException {
        groupsRestClient.getAllGroups().forEach(System.out::println);
    }

    @Test
    public void addUserToGroup() throws IOException {
        final Optional<GroupOverview> first = groupsRestClient.getAllGroups().stream().findFirst();

        if (first.isPresent()) {
            final GroupOverview groupOverview = first.get();
            Group group = groupsRestClient.getGroupDetails(groupOverview.getId());
            groupsRestClient.addUserToGroup(userToAdd, group);
        }
    }
}