// todo: import express server
// todo: import handlers
// todo:

const express = require("express");
const app = express();
import today from "./routes/today";
import month from "./routes/month";

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use("/api/v1", today);
app.use("/api/v1", month);


export default app;
