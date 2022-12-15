"use strict";
exports.__esModule = true;
var router = require('express').Router();
router.get('/month/:id.json', function (req, res) {
    console.log(req.params.id);
});
exports["default"] = router;
