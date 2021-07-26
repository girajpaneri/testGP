Prerequisite:
node js version > 10
npm version > 6.14

Backend: 
Node Js web API 
Express
Sequelize

Database Serve
MySql Server

Setps:
1.Unzip project files:
2 Create a database and change your database name in the config/config.js ->development->database and also update username and password of your MySql Server.
3. Open command terminal and go to your project root and run npm start.
4. Run api in following order which mention in testNode.postman_collection.json
   -> Run /account/login api for gernerate token which passed in header for other apis.
   -> Run /getcabs Api for get  near by cabes by passing current location Lat, Long.
   -> Run /users/book for book cab
   -> Run /users/rides/1 Get history of booked cabs by passing user id

