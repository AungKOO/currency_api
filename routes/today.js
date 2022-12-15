"use strict";
exports.__esModule = true;
var handlers_1 = require("../handlers/handlers");
var router = require("express").Router();
router.get("/day/today.json", handlers_1["default"]);
exports["default"] = router;
