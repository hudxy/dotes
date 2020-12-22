"use strict";
exports.__esModule = true;
exports.DotaRestApi = void 0;
var https = require("https");
var axios_1 = require("axios");
var DotaRestApi = /** @class */ (function () {
    function DotaRestApi() {
        this.dotaurl = "https://api.opendota.com";
    }
    DotaRestApi.prototype.getPlayers = function (steamid) {
        var acctId = steamid;
        var dota_api_endpt = this.dotaurl + "/api/players/" + acctId;
        https.get(dota_api_endpt, function (resp) {
            var data = '';
            // A chunk of data has been recieved.
            resp.on('data', function (chunk) {
                data += chunk;
            });
            // The whole response has been received. Print out the result.
            resp.on('end', function () {
                console.log(JSON.parse(data));
            });
        }).on("error", function (err) {
            console.log("Error: " + err.message);
        });
    };
    DotaRestApi.prototype.getMatch = function (matchid) {
        var match = matchid;
        var dota_api_endpt = this.dotaurl + "/api/matches/" + match;
        axios_1["default"].get(dota_api_endpt).then(function (res) { return res; });
        // return new Promise(function(resolve, reject) {
        //     https.get(dota_api_endpt, (resp)=>{
        //         let data = '';
        //         // A chunk of data has been recieved.
        //         resp.on('data', (chunk) => {
        //         data += chunk;
        //         });
        //         // The whole response has been received. Print out the result.
        //         resp.on('end', () => {
        //             // return data from Promise
        //             resolve(JSON.parse(data))
        //         });
        //         }).on("error", (err) => {
        //         console.log("Error: " + err.message);
        //         reject("Error: " + err.message);
        //             });
        //     });
    };
    return DotaRestApi;
}());
exports.DotaRestApi = DotaRestApi;
