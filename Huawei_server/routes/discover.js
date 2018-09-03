const express = require('express'),
    route = express.Router();

route.get('/banner',(req,res)=>{
    let data = req.discoverDATA.banner;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

route.get('/list',(req,res)=>{
    let data = req.discoverDATA.contentList;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

route.get('/goods',(req,res)=>{
    let data = req.discoverDATA.goods;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

module.exports = route;