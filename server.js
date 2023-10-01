// import express package
const express = require("express");
const path = require("path");

// initiate express class, and store object into app constant
const app = express(); // constructor function is called here.

// GET / route : Homepage
app.get("/", function (req, res) {
  const filepath = path.join(__dirname, "/public/home.html");
  res.sendFile(filepath);
  // returns from here
});

// GET /about route: About Us Page
app.get("/about", function (req, res) {
  res.send("this is aboutpage");
});

app.post("/login", function (req, res) {
    
    res.send("this is aboutpage");
  });
  

// start server on port number 3001,
app.listen(3001);
