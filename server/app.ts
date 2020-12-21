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

app.get('/api/match', async (req, result) => {
  const DotaClient = new DotaRestApi();
  console.log(req.query.matchid);
  let match = req.query.matchid;
  let return_data = {"heroes" : {}, "players" : {}};

  axios.get("https://api.opendota.com/api/matches/" + match).then((res) => {
    // log JSON data from Promise then display JSON data on browser
    let index = 0;
    for (let v of res.data['players'])
    {
      return_data.heroes[index] = v['hero_id'];
      return_data.players[index] = v['personaname'];
      index++;
    }
    console.log(return_data)
    // console.log(res.data)
    result.send(return_data)
    });
  // let mydotaobject = DotaClient.getMatch(match).then(function (match_data: object)
  // {
  //   // log JSON data from Promise then display JSON data on browser
  //   let return_data = {"hero" : {}, "players" : {}};
  //   // console.log(match_data);
  //   for (let v of match_data['players'])
  //   {
  //     return_data.hero = v['hero_id'];
  //     return_data.players = v['personaname'];
  //     console.log(return_data.hero)
  //     console.log(  return_data.players)
  //   }
    
  //   res.send(return_data);
  // });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
