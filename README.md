**Documentation for React Dashlite application**

**React Quick Start:**

1.  Make sure Node and npm package manager is installed, please check
    the version by the command **_node -v_**

2.  Install Dependencies

    a. **_npm install or yarn install_**

3.  Start the application / Run the dev-server:

    a. **_npm start or yarn start_**

    b. \*Open your browser at **localhost://3000\***

**Detailed Installation Process:**

Installing Node:

1.  Download latest version of node.js
    from [**nodejs.org.**](https://nodejs.org/)

2.  Install and Setup Node.js using downloaded file in the development
    environment

3.  To check your node version, run **node -v **in a terminal/console
    window.

Installing Npm Package Manager:

1.  React CLI, and React apps depend on features and functionality
    provided by libraries that are available as npm packages. To
    download and install npm packages, you must have
    an [**npm **](https://www.npmjs.com/)package manager.

2.  This Quick Start uses the npm client command line interface, which
    is installed with Node.js by default. To check that you have the npm
    client installed, run **npm -v ** in a terminal/console window.

3.  For better understanding React we suggest you to once go through
    official documentation of React
    from [**ReactJS.org**](https://reactjs.org/docs/getting-started.html)

Installing the React CLI:

1.  It is recommended to install the React CLI globally

2.  To Install just run the command **_npm install create-react-app_**

Running React-Dashlite:

1.  Download and extract Dashlite themes from themeforest.net

2.  Extract it and then go in to the extracted folder.

3.  Once in the folder, open the command prompt/git bash/Terminal
    application (Mac) and type in **_cd theme_**

4.  Import all dependency by installing npm command. Type in **_npm
    install_**

5.  After all the packages and dependencies have been installed
    successfully, run the application by typing in **_npm start_**

6.  Once you serve your application by default it will take their
    default port so you can open port
    using [**localhost://3000**](<javascript:void(0)>)

**Build Application**

1.  Build you application for host on server just by typing _npm run
    build_ in the terminal

2.  It will create a build file in the root directory. The application
    is ready to go into the server of your choice, simply the upload the
    zipped build file to the server. However, if the server is an apache
    server create a .htaccess file in the build folder of the
    application and paste the following code in it.

> _Options -MultiViews_
>
> _RewriteEngine On_
>
> _RewriteCond %{REQUEST_FILENAME} !-f_
>
> _RewriteRule \^ index.html \[QSA,L\]_

Copy the contents of the build file into the apache server, make sure
the .htaccess file is included in the server.

**Create New Directory / Page:**

1.  To add a new directory or display contents on the side-panel. Add
    details in the object in the file **_src/layout/menu/MenuData.js_**.

    - Single Page: Add a JavaScript object with the properties of
      icon, text and link

    - Directory: Add a JavaScript object with properties of icon,
      text, link and submenu array where add all the sub-directory
      properties as an object.

2.  Once you have added a new nav as a directory or a page. Create the
    required page components in the pages folder. Make sure to export
    it, to make it available to all other places of the project.

3.  Include it in the route file in the directory **_routes/index.js_**.
    Make sure to import the created component in Step 2, through
    react-lazy process. And place the component in a route inside the
    Switch component such as **_\<Route exact path="/your_link"
    component={Your_Component}/\>._** Make sure the link provided here
    is the same as in step one.

4.  Restart the application and visit the created route.
