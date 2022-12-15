// todo: import express server
// todo: import handlers
// todo:

const express = require("express");
const app = express();
import route from "./routes/today";
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/api/v1", route);

export default app;
