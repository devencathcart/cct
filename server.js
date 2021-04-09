// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require("express");
const app = express();

// our default array of dreams


// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});
app.get("/unit3", (request, response) => {
  response.sendFile(__dirname + "/views/unit3.html");
});
// send the default array of dreams to the webpage
app.get("/unit2", (request, response) => {
  response.sendFile(__dirname + "/views/unit2.html");
});
app.get("/index", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
app.get("/extra", (request, response) => {
  response.sendFile(__dirname + "/views/extra.html");
});
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
