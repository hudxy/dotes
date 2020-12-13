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

app.get('/api/match', async (req, res) => {
  const DotaClient = new DotaRestApi();
  console.log(req.query.matchid);
  let match = req.query.matchid;
  let mydotaobject = DotaClient.getMatch(match).then(function (match_data)
  {
    // log JSON data from Promise then display JSON data on browser
    console.log(match_data);
    res.send(match_data);
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
