<h1 align="center">
<br>
  <a href="https://git.xenonstack.com/util/react-boilerplate.git"><img src="https://i.imgur.com/GpQk5wG.png" alt="React Boilerplate" width=128"></a>
<br>
<br>
React Boilerplate
</h1>

<p align="center">The best boilerplate for your React projects.</p>

<hr />

## Introduction

This boilerplate contains all you need to start your next React.js project. Simple, robust, well-organized, all you need to do is clone, install and you're ready to start.

## Features

This boilerplate features all the latest tools and practices in the industry.

- **React** — 16.7.0-alpha.0 with Hooks
- **Redux** — State Management
- **Babel** — ES6 syntax, Airbnb & React/Recommended config
- **Webpack**  — Hot Reloading, Code Splitting, Optimized Build
- **CSS** — Styled Components
- **Lint** — ESlint
- **Husky** — Prevent bad commits

## Folders and Files Structure

Your project directory should look something like this:

```
react_boilerplate
  config/
    webpack/
  node_modules/
  src/
      common/
      component/
      middleware/
      pages/
      routes/
      static/
      types/
      config.js
      index.js
  .babelrc
  .eslintrc
  .gitignore
  .prettierrc
  CHANGELOG.md
  package-lock.json
  package.json
  postcss.config.js
  README.md
  webpack.config.js
  yarn.lock
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

Other than these files, the mentined names are the recommended names. If changed any, can be need to change in webpack config also, according to following rules

```
  Rules Goes Here
```

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.
You need to **put any JS and CSS files inside `src`**, otherwise, Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.

## Detailed description of the folder:-
##  Feature Modules:-
 
 The feature folders are the folders which are basically the modules  of the application. These are structured in the format of parent (**container** ) and child components.(**pages**) . The child component will take the data from parent component and will pass these data to the child components.
 
 It is considered as a best practice to load all the data in the container ,and pass it to the child . 
 
 It contains all the components which are part of the feature . For e. g a Home feature in a page , can contain table, graphs, cards which can be components.
 
 **The feature module should always contain:-**

 **common:-** The common folder will contain all the action, effects,selector,and reducer file which will commonly used in the application.
 
 **Component:-** The component folder will contain the reusable component which we can call anywhere in the application.

 **middleware:-** The middleware folder will call all the apis which is  needed for the particular feature.
 
 **pages:-** The pages folder will contain all the components which like form, table etc.
 
 **routes:-** The routes folder contains the routes of the application.
 
 **static:-** The static folder will contains all the images, css, fonts and json files used in the application .
 
 so, any feature introduced in the applications should be added according to the above mentioned format.
 
 ## Core Modules:-
 
 This folder contains the file which needs to be loaded only once when the application runs.
 It basically contains the headers, footers etc.
##  Shared Modules:-
 
 This folder contains components, services  which is shared by the application. For e.g buttons, inputs, dropdowns, cards(components) will be shared because it can be used in the different parts of application with different set of data. 
##  Assets folder:-
 
 The assets folder contain the images ,documents, logos which needs to be used in the application as a source.
 ## Environments :-
 
 This folder contains the api end points and other configurations which are used for different environments. 
 For e.g It can be different for local, dev and QA environment.
 ## Getting started

```
## Installing node and npm

Step 1: Add Node.js PPA

    * sudo apt install curl

    Then for the Latest release, add this PPA..
    * curl -sL https://deb.nodesource.com/setup_10.x | sudo bash -

    To install the LTS release, use this PPA
    * curl -sL https://deb.nodesource.com/setup_8.x | sudo bash -

Step 2: Install Node.js and NPM

    To install, run the commands below
    * sudo apt install nodejs

    You can use the commands below to view the version number installed….
    * node -v
    * npm -v
```

1. Clone this repo using `https://git.xenonstack.com/util/react-boilerplate.git`
2. Move to the appropriate directory: `cd react_boilerplate`.<br />
3. Run `yarn` or `npm install` to install dependencies.<br />
4. Run `npm start` to see the example app at `http://localhost:8080`.

## Run App in Production build

- **Start the application in _Local_ mode**

    To start the project for Local Env run the following command.

    ```
    npm start
    ```
    The app will automatically rebuild with webpack and refresh with each save<br>
    The app will run on 8080 port for the Local mode.<br>
    Open [http://localhost:8080](http://localhost:8080) to view it in the browser.<br><br>

- **Build the application in _Development_ mode**

    To build the project for Development Env run the following command.

    ```
    npm run build:dev
    ```
    And serve by

    ```
    serve -s build
    ```
    The app will run on 5000 port for the Development mode.<br>
    Open [http://localhost:5000](http://localhost:5000) to view it in the browser.<br><br>

- **Build the application in _Production_ mode**

    To build the project for Production Env run the following command.

    ```
    npm run build:prod
    ```
    And serve by

    ```
    serve -s build
    ```
    The app will run on 5000 port for the Production mode.<br>
    Open [http://localhost:5000](http://localhost:5000) to view it in the browser.<br><br>

- **Build the application in _UAT_ mode**

    To build the project for UAT Env run the following command.

    ```
    npm run build:uat
    ```
    And serve by

    ```
    serve -s build
    ```
    The app will run on 5000 port for the UAT mode.<br>
    Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

## Dependencies
* React, React-DOM and React Redux
 See `package.json` for more Dependencies and packages Required.


## Commands

- `npm start` - start the local dev server
- `npm run build:dev` - create a development configured build in `build` folder
- `npm run build:prod` - create a production ready build in `build` folder
- `npm run build:uat` - create a uat ready build in `build` folder
- `npm run lint` - execute an eslint check
- `npm run lint:fix` - execute an eslint and fix the errors

## Environment Variable

Set environment variable for App Base API and Auth API as below:

**App Environment Variable**

```
* No environment variables yet
```
