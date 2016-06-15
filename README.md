#Crud-repo

### Getting set up:

Step 1:  Install [node.js](http://www.nodejs.org/).

Step 2: Install [MongoDB](https://www.mongodb.com/).

Step 3: Open your terminal and enter the command 'mongod' (The default port should be set to 27017!)

Step 4 (optional): Open another terminal and enter the command 'mongo'. This will allow you to directly view
database collection, although this is at your own discretion, not necessary for running of the application.


### After cloning the repository:

Step 0: Clone the repository

Step 1: Move to the directory CRUD-repo/CRUDexample

Step 2: Run npm install (This will download all package dependencies based on the packages.json file.)

Step 3: npm install --save mongoose (In case it didn't already install)


### Running the application:

Step 1: Be in CRUD-repo/CRUDexample and execute: npm start

Step 2: Open a web browser to: http://localhost:3000/

Step 3: Enjoy!

Note:
In the terminal running npm start, all requests will flow through this terminal (except mongodb connections,
which are directly monitored in the shell with mongod running)