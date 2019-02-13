"# react-redux-login-demo"

ABOUT THIS SITE:
  - This app will be a demonstration of a React/ Redux login app. It will have a MongoDB backend that is accessed with the mongoose library. It will also use the express library as a server.

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
    - Priority 1. Create git project and upload to GitHub.
    - Priority 2. Create app by initializing the project, installing required libraries and testing.
    - Priority 3. Set up express server.
    - Priority 4. Create a test model, route and validation, and then test to ensure the server is working correctly with Postman

Sprint Backlog:
  - 2/13/2019


  SPRINT LOG
 - 2/13/2019 Second Spring
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
   - Review
      - Didn't create test validation. Would be unusable with current test route
