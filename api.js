const express = require('express');
const axios = require('axios');

const api = express();

api.get("/devices",(req,res)=>{
    axios.get('https://raw.githubusercontent.com/adityakhattri21/StormBreaker_Project/master/devices.json')
    .then(response =>{
        // res.send(response.data.devices[0].name)
        res.send(response.data)
    })
    // res.status(200).json({'message':'Hi biatch'} );
});

api.get("/core",(req,res)=>{
    axios.get("https://raw.githubusercontent.com/stormbreaker-project/official_devices/master/team/core.json")
    .then(response=>{
        res.send(response.data);
    })
});

api.get("/maintainers" , (req,res)=>{
    axios.get('https://raw.githubusercontent.com/stormbreaker-project/official_devices/master/team/maintainers.json')
    .then(response =>{
        res.send(response.data);
    })
})


module.exports = api;