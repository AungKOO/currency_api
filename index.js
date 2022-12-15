"use strict";
// todo: import express server
// todo: import handlers
// todo:
exports.__esModule = true;
var express = require("express");
var app = express();
var today_1 = require("./routes/today");
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/api/v1", today_1["default"]);
exports["default"] = app;
