package com.starface.rest.users;

import com.starface.rest.configuration.Configuration;
import com.starface.rest.configuration.ConfigurationLoader;
import org.junit.jupiter.api.Test;

import java.io.IOException;
import java.util.Locale;
import java.util.Optional;

class UsersRestClientTest {

    private final Configuration configuration = ConfigurationLoader.load();
    private final UsersRestClient usersRestClient = new UsersRestClient(configuration);

    @Test
    public void getAllUsers() throws IOException {
        usersRestClient.getAllUsers().forEach(System.out::println);
    }

    @Test
    public void createAndDeleteUser() throws IOException {
        CreateUserRequest newUser = new CreateUserRequest();
        newUser.setEmail("test@starface.com");
        newUser.setFirstName("Test");
        newUser.setFamilyName("Test");
        newUser.setPassword("secret1234!");
        newUser.setLogin("1002");
        newUser.setLanguage(Locale.ENGLISH.getLanguage());
        usersRestClient.createUser(newUser);

        Optional<User> user = usersRestClient.getAllUsers()
                .stream()
                .filter(entry -> entry.getLogin().equals(newUser.getLogin()))
                .findFirst();

        if (user.isPresent()) {
            usersRestClient.deleteUser(user.get().getId());
        }
    }
}