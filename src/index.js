"use strict";
exports.__esModule = true;
var express_1 = require("express");
var cors_1 = require("cors");
var morgan_1 = require("morgan");
var PORT = process.env.PORT || 4000;
var app = (0, express_1["default"])();
app.use((0, cors_1["default"])());
app.use((0, morgan_1["default"])("short"));
app.get("/ping", function (_, res) {
    res.json({ ping: "pong" });
});
app.listen(PORT, function () {
    console.log("Server is running in http://localhost:".concat(PORT));
});
