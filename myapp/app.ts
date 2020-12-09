import {DotaRestApi} from "./modules/dotaapi";
const express = require('express');
const path = require('path');

const app = express(),
      bodyParser = require("body-parser")

const port = 3000;


//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname, '../dist')))

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
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
