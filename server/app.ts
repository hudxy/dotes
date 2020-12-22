import axios from "axios"
import {DotaRestApi} from "./modules/dotaapi";
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express(),
      bodyParser = require("body-parser")

const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, '../dist')))
app.use(cors());

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
  });   

app.post('/api/steam_submission', (req, res) => {

    const DotaClient = new DotaRestApi();
    console.log(req.body.steamid);
    let acctid = req.body.steamid;
    let mydotaobject = DotaClient.getPlayers(acctid);
    res.send("sniped blitch");
});

app.get('/api/match/:match_id', async (req, result) => {
  let match = req.params.match_id;
  let return_data = {"heroes" : {}, "players" : {}};

  axios.get("https://api.opendota.com/api/matches/" + match).then((res) => {
    // axios get request to the api endpoint for matches
    let index = 0;

    // fetch the players and the hero id for the response
    for (let v of res.data['players'])
    {
      return_data.heroes[index] = v['hero_id'];
      return_data.players[index] = v['personaname'];
      index++;
    }
    result.send(return_data);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
