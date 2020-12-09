import * as https from 'https'
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
}
