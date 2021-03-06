# Movie Nerds

#### Authors: War Ahmed, Mehrdad Bahador, Thomas Wang & Tim Wayburn
#### Project Group 10

#### Update
After receiving feedback from our TA, we have implemented a drag and drop in the favorite page, that works if 
the screen size is suitable otherwise the user can remove their favorite movies with a click of a button. We then
have also implemented popup on the the users first login that describes the functionality of the website,
the second popup on the favorite page that describe how to add movies and the purpose of the favorite page, lastly
a popup on the visualisation page if its the first time the user visit that page, that describe how the user can
use that page. We have also fixed some smaller design issues. 

#### Project Description

Building a website for browsing movies, the users will be able to register an account on the website, 
view trailers, and set/remove favorite movies only if they have an account and are logged in. 
For more advanced interaction, we are planning to implement dynamic data visualization, 
for example an interactive graph where the user is able to see the connections between their 
favorite movies and find related/similar movies. We have used Redux with ReactJS and Firebase 
for authorization and also as our database for storing the users favorite movies. 
We are using the api [themoviedb](https://www.themoviedb.org/documentation/api) for retrieving information 
about movies, genres, actors etc.

##### Live Demo: https://movienerds.herokuapp.com/ 

#### What we have done

We have implemented the all of the functions of the app accordingly to what we described in our project plan, the user
can store favorite movies and see they how they connect to each other by their similar movies, this is 
visualized by a graph. We also have played around with different design choices and improved the
overall design of the app och usability of the website.
We have followed the architecture [Redux](https://redux.js.org).
                 

#### File Structure

Under each folder (action, component, containers & reducers) there is a README file that describe each file within those
folders.

`public/index.html` - This is the static HTML file. It only contains the a div with id=root that's shared among all the 
containers. It also contains script and links to different themes. 

`public/style.css` - Global styles.

`src/js/actions:` Actions are just things that happens ex. api calls, users triggered actions. Actions have type that describes
what actions occurred so that corresponding reducer can update that specific state. We have created actions for every unique 
api calls, user triggered actions, events that require the state to be updated etc.

`src/js/components:` State less components that handles rendering of the website, not aware of application state. Info about the 
data that will be rendered are send to a component through a container via props. For ex. the sliders on the first page
is rendered via component the same with the movie images, the information about a movie etc.

`src/js/constants:`

  * `base.js:` Contains the API key, domain, URL etc. for connecting to the firebase AUTH
  *  `constants.js:` Contains descriptions of actions, url, api keys, image size etc. All necessary constant 
  info that the majority of the files in actions, components, containers and reduces use.

`src/js/containers:` Containers fetch state data and use it to render (display) components, state data will become components props.
We have a container for the sliders on the first page, the search bar, log in etc.

`src/js/reducers:` Reducers take in actions and update part of application state. Every action have a corresponding reducer, ex. 
when fetching a movie by a genre we save the data in a array if that api call succeed otherwise another actions is called (failed api call)
then we save the error message. 

`src/js/index.js:` Root component that creates a store that holds the complete state tree of our website by applying the methods createStore and
 applyMiddleware. It's also in this file that we also define all of the routes.
 
`src/js/App.js:` The first page of the website.
 
`src/js/history.js:` For pushing routes to the react router.
 
`src/.env:` firebase api keys, domain, db etc.

`src/js/Help Functions/loader/loader.js:` containing a function that returns our new loader and corresponding css code to that loader.

`src/js/Help Functions/ErrorFunctions.js:` containing a functions that returns text and buttons depending on the error.

`webpack/webpack.config.js:` The main webpack config, webpack is our build tool.

`webpack/webpack-dev.config.js:` Development mode config.

`webpack/webpack-prod.config.js:` Production mode config.

`.gitignore:` For not uploading necessary files to github.

`server.js:` A minimal server running locally for testing the production mode code build.

`package.json:` holds various metadata relevant to the project. 

`.babelrc:` Babel is a JavaScript transpiler that converts JavaScript into plain old ES5 JavaScript so that we can run our website
in any browser both modern and old ones.

## Getting Started

To get started, first install all the necessary dependencies.
```
> npm install
```

Run an initial webpack build and start the development server 
```
> npm run dev
> Then open http://localhost:3000
```

Build production mode
```
> npm run build
```

Host server locally on your own computer

If you don't have pm2 installed on your computer, please run 
```
> npm i pm2
```

Then you can start your server

```
> npm run start
> Then open http://localhost:8080
```

Close server

```
> pm2 stop [id]
```


