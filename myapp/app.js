"use strict";
exports.__esModule = true;
var dotaapi_1 = require("./modules/dotaapi");
var express = require('express');
var path = require('path');
var app = express(), bodyParser = require("body-parser");
var port = 3000;
//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.post('/api/steam_submission', function (req, res) {
    var DotaClient = new dotaapi_1.DotaRestApi();
    console.log(req.body.steamid);
    var acctid = req.body.steamid;
    var mydotaobject = DotaClient.getPlayers(acctid);
    res.send("sniped blitch");
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
