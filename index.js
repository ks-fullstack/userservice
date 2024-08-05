const dotenv = require('dotenv');
dotenv.config({path: './env/.env'});
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routers/router');
const connectDB = require('./db/mongo-connection');
const securityMiddleware = require('./utils/security');
const errorHandler = require('./utils/error.handler');

process.on('uncaughtException', (err) => {
  console.log('Uncaught Exception occured! Shutting down...', err);
  process.exit(1);
});

//insert security middleware
new securityMiddleware(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.send('App is working'));

routes.forEach(routeObj => {
  app.use(routeObj.path, routeObj.router)
});

//Global error handler
app.use(errorHandler);
const port = process.env.PORT || 5000;
const server = app.listen(port);

process.on('unhandledRejection', (err) => {
  console.log('Unhandled rejection occured! Shutting down...', err);
  /*server.close(() => {
   process.exit(1);
  });*/
});