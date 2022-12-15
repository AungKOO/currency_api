"use strict";
// todo: import logic or something else
exports.__esModule = true;
var data = {
    currencies: [{ rate: 2980, currency_format: "USD" }],
    yearMonth: "2022/12",
    day: "14"
};
var getAllCurrencies = function (req, res) {
    console.log(req.body);
    console.log("It reached the route");
    return res.status(200).json(data);
};
exports["default"] = getAllCurrencies;
