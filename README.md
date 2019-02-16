"# react-redux-login-demo"

ABOUT THIS SITE:
  - This app will be a demonstration of a React/ Redux login app. It will have a MongoDB backend that is accessed with the mongoose library. It will also use the express library as a server. This is based on the following tutorial: DevConnector

INSTALL:
  1. Create mLab database
  2. Config connection in config/keys.js

TECHNOLOGIES TO USE:
  - Frontend:
    - React
    - JavaScript/ J-Query
    - HTML
    - CSS
    - Bootstrap
    - Mongoose
    - node.js

  - Backend:
    - MongoDB
    - Express
    - Mongoose
    - node.js

  - Other
    - GIT
    - Heroku
    - Postman

IMPLEMENTATIONS:
  - React (via create-react-app)
  - Bootstrap (in index.html with links and script)
  - React Router DOM

SCRUM:

Product Backlog (Prioritized list of features):
  - 2/13/2019
    - TRANSFERRED TO SPRINT BACKLOG: Priority 1. Create git project and upload to GitHub.
    - TRANSFERRED TO SPRINT BACKLOG: Priority 2. Create app by initializing the project, installing required libraries and testing.
    - TRANSFERRED TO SPRINT BACKLOG: Priority 3. Set up express server.
    - TRANSFERRED TO SPRINT BACKLOG: Priority 4. Create a test model, route and validation, and then test to ensure the server is working correctly with Postman
    - TRANSFERRED TO SPRINT BACKLOG: Priority 1. Update routes in users.js
    - TRANSFERRED TO SPRINT BACKLOG: Priority 2. Create validation for User (Register, Login, Current User)
    - TRANSFERRED TO SPRINT BACKLOG: Priority 3. Test routes and validation for backend login and register
    - TRANSFERRED TO SPRINT BACKLOG: Priority 1. Create the frontend that implements the signup and register processes

Sprint Backlog:
  - 2/13/2019
    - COMPLETE: Priority 1. Create git project and upload to GitHub.
    - COMPLETE: Priority 2. Create app by initializing the project, installing required libraries and testing.
    - COMPLETE: Priority 3. Set up express server.
    - COMPLETE: Priority 4. Create a test model, route and validation, and then test to ensure the server is working correctly with Postman
    - COMPLETE: Priority 1. Update routes in users.js
    - COMPLETE: Priority 2. Create validation for User (Register, Login, Current User)
    - COMPLETE: Priority 3. Test routes and validation for backend login and register
    - COMPLETE: Priority 1. Create the frontend that implements the signup and register processes


SPRINT LOG

  - 2/15/2019 Fourth Sprint
    - Plan
      - 2/15/2019
        - Preparation:
        - Priority 1. Create the frontend that implements the signup and register processes
          - Initiate create-react-app in client file to hold the front end.
          - Install the following libraries into react app (Not server):
            - axios
            - classnames
            - jwt-decode
            - moment
            - react
            - react-dom
            - react-moment
            - react-redux
            - react-router-dom
            - react-scripts
            - redux
            - redux-thunk
          - Ensure package.json scripts are correct
          - Ensure proxy is properly defined
          - Test to make sure client and server work together correctly
          - Create the following folders in client/src folder:
            - actions
            - components
            - reducers
            - utils
            - validation
          - In utils folder, create setAuthToken function to add/ delete Authorization header
          - In components/common create <PrivateRoute>
            - That takes in a component and renders it if user is authenticated, or redirects to login if not.
          - In src, create store.js to hold state, apply middleware and configure redux dev tools
          - Configure App.js:
            - Check for token provider
            - Ensure <Provider /> component wraps other content to allow access to store
            - Ensure <Router /> (BrowserRouter as Router) is wrapped around content to allow history
            - Create test route that doesn't require login
            - Create switch that will render a component if user is logged in
            - Test the route and switch
            - In common folder, create <InputGroup>, <SelectListGroup>, <TextAreaFieldGroup> and <TextAreaFieldGroup>
            - Create auth folder in components folder, and create <Login> and <Register> components
            - Create authActions.js in actions folder
            - Create authReducer.js in reducers folder as well as index
            - Set up <Login> and <Register> components in app.js
            - Test frontend login functionality


    - Build
      - 2/15/2019
        - Installed dependencies
        - Scripts confirmed to be correct
        - Proxy defined in package.json
        - Tested to make sure server and client launch (Success)
        - Created folders in src
        - Created setAuthToken.js to add/ delete Authorization token to headers
        - In component/common folder, <PrivateRoute> was created.
        - Created store.js
        - Created registerUser(), loginUser(), setCurrentUser() and logoutUser() functions in authActions.js
        - Added is-empty.js to scr/validation
        - Created authReducer.js and added function to handle SET_CURRENT_USER case
        - Created reducers/index.js to combine all reducers
        - Created errorReducer.js and added function to handle errors
        - UNSPECIFIED IN PLAN: Created /src/components/layout folder and <Landing> component within
        - UNSPECIFIED IN PLAN: Created /src/components/dashboard folder and <Dashboard> component within (<Dashboard> will need to be expanded upon)
        - Created profileAction.js
        - Updated src/actions/types.js with constants
        - Tested route that doesn't require login(worked)
        - Added img folder with image for styling
        - Added bootstrap scripts and links into public/index.html
        - Created <Login> component
        - Created <Register> component
        - Created routes for <Login> and <Register> in app.js
        - Created <Education>, <Experience> and <ProfileActions>
        - Updated src/common components
        - Created profileReducer.js reducer
        - Created <Navbar> and <Footer> components in src/components/layout
        - Added <Navbar> and <Footer> components in App.js with routes
        - IMPORTANT! ignore /client/node_modules (DONE)

    - Test
      - 2/16/2019
        - npm run dev runs both frontend and backend
        - Frontend runs on localhost:3000
        - Loads to "/" route and displays <Navbar>, <Landing> and <Footer>
        - "Developer" placeholder redirects to "/profile" but displays blank
        - "Sign Up" link redirects correctly to "/register" and displays <Register>
        - Sign up seems to be working correctly
          - Errors display when fields are incorrectly entered
          - Adds new user
        - Login seems to be working correctly  
          - Errors display when fields are incorrectly entered
          - Login in user
          - Redirects to "/dashboard"
          - /client/node_modules ignored
    - Review
      - 2/16/2019
        - "/profile" route will need to be established to display <Profile>
        - "/feed" route will need to be established
        - "/create-profile" route will need to be established
        
----------
  - 2/14/2019 Third Sprint
    - Plan
      - 2/14/2019
        - Preparation:
        - Priority 1. Update routes in users.js
        - Priority 2. Create validation for User (Register, Login, Current User)
        - Priority 3. Priority 3. Test routes and validation for backend login and register
    - Build
      - 2/14/2019
        - Created validation folder and login.js and register.js validation folders
        - Created helper file is-empty.js
        - Added register, login and find current user by email routes.
        -
    - Test
      - 2/15/2019
        - Minor spelling errors fixed in register route (Wrong function being called).
        - Fixed isEmpty helper function
        - Fixed minor spelling error in login.js validation.
    - Review
      - 2/15/2019
        - Fixed bugs. Seems to be working fine.
        - Can move on to front end development, but will need to add other routes as needed
----------

  - 2/13/2019 Second Sprint
   - Plan
     - 2/13/2019
       - Preparation:
       - Priority 1. Create git project and upload to GitHub.
       - Priority 2. Create app by initializing the project, installing required libraries and testing.
       - Priority 3. Set up express server.
       - Priority 4. Create a test model, route and validation, and then test to ensure the server is working correctly with postman
       - NOT SPECIFIED: Create .gitignore to prevent node_modules from being added to git
   - Build
    - 2/13/2019
      - Created git project and upload to GitHub.
      - Created app by initializing the project, installing required libraries and testing.
        - npm init (Created package.json, set server.js as entry point)
        - Libraries:
          - npm install:
            - bcryptjs --save (For secure authentication)
            - express --save  (Server framework for Node.js)
            - body-parser --save (Body-parsing middleware)
            - concurrently --save (Run multiple commands concurrently)
            - jsonwebtoken --save (Securely transfer information)
            - mongoose --save (MongoDB object modeling tool)
            - passport --save (Authentication middleware for Node.js)
            - passport-jwt --save (Authenticate endpoints using a JSON web token)
            - validator --save (String validators and sanitizers)
          - (devDependencies) npm install --save-dev nodemon
        - NOT SPECIFIED: Must create a mLab DB
          - mLab DB created
        - Create scripts in package.json
          - start (Will start server)
          - server (Will start server and update when changes are made to code)
          - client
          - dev (concurrently used for both server and client. Prep for when client is   
            created)
        - Created server.js
          - Initialized express() (app)
          - Added bodyParser to middleware of app
          - Added config folder
          - Created keys.js file. Added mongoURI for access to database
          - Created db variable for connection to database
          - Created connection to mongoose using db URI
          - Tested server connection (Successful)
          - Added passport middleware
          - Added passport.js in config file
        - Created test model
          - Created User model
        - Created test route
          - Created routes/api/ folder
          - Created users.js in routes/api
          - Created test route for user
          - Added route to server (server.js)
          - Tested test route with Postman (Successful after some debugging)
        - Created test validation
          - Did Not Complete
        - Tested with Postman
        - Created .gitignore
          - Ignored node_modules folder
          - Ignored config/dev_constants.js file
          - Tested ignored files
            -
   - Test
      - Tested scripts defined in package.json
        - Tested test. Works, but no tests are implemented
        - Tested start. Works.
        - Tested server. Works.
      - Tested express server. Running on port 5555. Works correctly.
      - Tested mongoose
      - Tested test route in routes/api/users.js. Worked correctly.

   - Review
      - Didn't create test validation. Would be unusable with current test route.
      - No noticeable bugs or errors.
      - Will need to update scripts in package.json
