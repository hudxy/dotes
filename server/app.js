"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var axios_1 = require("axios");
var dotaapi_1 = require("./modules/dotaapi");
var express = require('express');
var path = require('path');
var cors = require('cors');
var app = express(), bodyParser = require("body-parser");
var port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../dist')));
app.use(cors());
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
app.get('/api/match/:match_id', function (req, result) { return __awaiter(void 0, void 0, void 0, function () {
    var match, return_data;
    return __generator(this, function (_a) {
        match = req.params.match_id;
        return_data = { "heroes": {}, "players": {} };
        axios_1["default"].get("https://api.opendota.com/api/matches/" + match).then(function (res) {
            // axios get request to the api endpoint for matches
            var index = 0;
            // fetch the players and the hero id for the response
            for (var _i = 0, _a = res.data['players']; _i < _a.length; _i++) {
                var v = _a[_i];
                return_data.heroes[index] = v['hero_id'];
                return_data.players[index] = v['personaname'];
                index++;
            }
            result.send(return_data);
        });
        return [2 /*return*/];
    });
}); });
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
