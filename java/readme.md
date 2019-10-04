#### Starface REST API Java Client Example

This project contains examples how to use the Starface REST API with Java. 

We use the following technologies to issue and parse requests:
* [OkHttp](https://square.github.io/okhttp/) to execute HTTP based requests
* [Jackson](https://github.com/FasterXML/jackson) to serialize and deserialize JSON
* [Apache Commons Codec](https://commons.apache.org/proper/commons-codec/) to create SHA-512 hashes

### How to use the client?
All the relevant client code is located under _src/main/java_ and each resource has its own package. 
In order to initiate a client class, you would need a configuration object.
This object will contain all the necessary data to perform the login and obtain a token. 
 
 
#### Prepare the configuration
The configuration can be obtained via the _ConfigurationLoader_:
 
```$java
Configuration configuration = ConfigurationLoader.load();
```

The loader will pick up all the relevant information from the _configuration.json_ file located at _src/resources_.
There is an example of a configuration file that you can rename and complete.

#### Examples per resource
Once you completed the _configuration.json_ you can already start using the examples under _src/test/java_.
Those examples demonstrate the basic usage of the APIs, but won't modify any existing resources!

In general the pattern to run any client is:
```$java
Configuration configuration = ConfigurationLoader.load();

// users resource
UsersRestClient usersClient = new UsersClient(configuration);
List<User> users = client.getAllUsers();

// groups resource
GroupsRestResource groupsClient = new GroupsClient(configuration);
List<Group> groups = client.getAllGroups();
```

We recommend the usage of an IDE to run those tests (the project has to be imported as Gradle Project). 
There are multiple free alternatives:
* [IntelliJ IDEA](https://www.jetbrains.com/idea/download)
* [Eclipse](https://www.eclipse.org/downloads/)
* [Netbeans](https://netbeans.apache.org/download/)


