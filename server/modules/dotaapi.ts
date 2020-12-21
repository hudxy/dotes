import * as https from 'https'
import axios from "axios";
export class DotaRestApi{
    dotaurl : string;
    constructor(){
        this.dotaurl = "https://api.opendota.com"
    }
    
    getPlayers(steamid:string){
        let acctId = steamid
        let dota_api_endpt = this.dotaurl + "/api/players/" + acctId;
        https.get(dota_api_endpt, (resp)=>{
            let data = '';
            // A chunk of data has been recieved.
            resp.on('data', (chunk) => {
            data += chunk;
            });

            // The whole response has been received. Print out the result.
            resp.on('end', () => {
            console.log(JSON.parse(data));
            });

            }).on("error", (err) => {
            console.log("Error: " + err.message);
                });
    }

    getMatch(matchid:string) {
        let match = matchid
        let dota_api_endpt = this.dotaurl + "/api/matches/" + match;
        axios.get(dota_api_endpt).then((res) => res)
        
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
    }
}
