"use strict";
exports.__esModule = true;
// todo: import logic or something else
var express = require("express");
var router = express.Router();
var data = {
    currencies: [{ rate: 2980, currency_format: "USD" }],
    yearMonth: "2022/12",
    day: "14"
};
router.get("/day/today.json", function (req, res) {
    return res.status(200).json(data);
});
exports["default"] = router;
