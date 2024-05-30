const express = require('express');
// const cors = require('cors');

// Initialize express
const app = express();

// app.use(cors({
//   origin: (origin, callback) => {
//     return callback(null, true);
//   }
// }));

// Set cors variables
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Request-With, Content-Type, Accept");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  next();
});

// add the route
require('./routes/resume.routes')(app, express);

app.use(express.static(__dirname + "../../"));
app.use(express.static(__dirname + "./"));

// Server Initialization
app.listen("3000", '0.0.0.0',
  (error) => {
    if (!error) {
      console.log("App is listening on port 3000");
    }
    else {
      console.log("Server failed ", error);
    }
  }
);