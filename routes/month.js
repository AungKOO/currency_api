"use strict";
exports.__esModule = true;
var monthHandler_1 = require("../handlers/monthHandler");
var router = require('express').Router();
router.get('/month/:id.json', monthHandler_1["default"]);
exports["default"] = router;
