# A REST API web client example for STARFACE PBX  
JavaScript / HTML 5 demo for the REST API of [STARFACE PBX].

## <a name="quick"></a>Quick deployment for the impatient reader
* Edit [starface-rest-demo/sf-config.js] according to the comments therein.  
*__Note__: This is the place where you define the PBX which to connect with*.
* Upload or copy the folder `starface-rest-demo` into the web root of a web server of your choice.  
* Open `http(s)://[url.of.the.web.server.of.your.choice]/starface-rest-demo/` in the web browser (Firefox or Chrome).

## The core dependency
**[STARFACE REST client API]** is the core Javascript REST client API for STARFACE PBX and **already included**.

It was auto-generated from a *starface-api.yaml* file downloaded straight from a __STARFACE PBX__ (version 6.7.0.22).  
This yaml file is also located in [docs]. 

The REST client API documentation is included in [src/starface-rest-api/docs].

## Development
### Prerequisites  
__[Node.js]__  
__[npm]__

Recommended reading: [Downloading and installing Node.js and npm]

For node modules used for developing, building and deploying  __starface-rest-demo__, please see [package.json] and [src/starface-rest-api/package.json].

### Installation of required node modules
Run the following commands inside the folder of this README file `(rest-examples/javascript)`.

    npm install

### Local deployment 
Edit [public/sf-config.js](./public/sf-config.js) according to the comments therein.  
*__Note__: This is the place where you define the PBX which to connect with*.

Then run in development mode on your local machine:

    npm run serve

### Deployment for production

Run to build / re-build `./starface-rest-demo` for distribution:

    npm run build

Now you're ready for [quick deployment](#quick).


## Creating your own web application
The current state of the **starface-rest-demo** is as the name suggests a simple demo.  
It relies on the workhorses [jQuery](https://api.jquery.com/) 
for DOM manipulation, [lodash](https://lodash.com/) and comes with 
only a minimum of styling (plain CSS, that is).

The range of REST request featured in this demo is currently a mere handful:
* Login and logout
* Displaying user data and avatar
* Changing and deleting the avatar
* Displaying a basic list of all users

As the incorporated [STARFACE REST client API] offers every available REST endpoint on the STARFACE PBX, the suggested next steps are:
* Retrieving the [user's permissions](./src/starface-rest-api/docs/PermissionsApi.md) and depending on the permissions  
allow for displaying the corresponding GUI elements and features:
    * Editing the user data or preferences
    * Displaying function keys, address book etc.
    * Create new user accounts
    * …

Apart from this, one can choose any Javascript flavour for designing one's own web app – 
e.g. with Vanilla JS, vueJS, react, AngularJS (you name them)  
– and simply 
include the [STARFACE REST client API] (or even write a custom REST 
client API based on the [starface-api.yaml](./docs/starface-api.yaml)).

 
 

[STARFACE PBX]: https://www.starface.com/en/

[starface-rest-demo/sf-config.js]: ./starface-rest-demo/sf-config.js
[STARFACE REST client API]: ./src/starface-rest-api/
[src/starface-rest-api]: ./src/starface-rest-api/
[src/starface-rest-api/docs]: ./src/starface-rest-api/docs/
[docs]: ./docs/starface-api.yaml
[Node.js]: https://nodejs.org/en/download/
[npm]: https://www.npmjs.com/get-npm
[Downloading and installing Node.js and npm]: https://docs.npmjs.com/downloading-and-installing-node-js-and-npm

[package.json]: ./package.json
[src/starface-rest-api/package.json]: ./src/starface-rest-api/package.json
