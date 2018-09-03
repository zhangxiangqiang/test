const express = require('express'),
    route = express.Router();

route.get('/commend',(req,res)=>{
    let data = req.categoryDATA.commend;

    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

route.get('/huawei_ph',(req,res)=>{
    let data = req.categoryDATA.huawei_ph;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

route.get('/rongyao_ph',(req,res)=>{
    let data = req.categoryDATA.rongyao_ph;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

route.get('/rongyao_ipd',(req,res)=>{
    let data = req.categoryDATA.rongyao_ipd;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

route.get('/zhineng',(req,res)=>{
    let data = req.categoryDATA.commend;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

route.get('/jiaju',(req,res)=>{
    let data = req.categoryDATA.jiaju;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

route.get('/peijian',(req,res)=>{
    let data = req.categoryDATA.peijian;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

route.get('/typeijian',(req,res)=>{
    let data = req.categoryDATA.typeijian;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

route.get('/cological',(req,res)=>{
    let data = req.categoryDATA.cological;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});

route.get('/service',(req,res)=>{
    let data = req.categoryDATA.service;
    res.send({
        code:0,
        msg: 'ok',
        data
    })
});


module.exports = route;