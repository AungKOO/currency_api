"use strict";
exports.__esModule = true;
var todayHandler_1 = require("../handlers/todayHandler");
var router = require("express").Router();
router.get("/day/today.json", todayHandler_1["default"]);
exports["default"] = router;
