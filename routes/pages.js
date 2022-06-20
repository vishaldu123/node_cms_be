const express = require('express');
const Router = express.Router();
const mysqlConection = require("../config/connection");

Router.get('/',(req,res,next)=>{
    mysqlConection.query("select * from pages",(err,rows,fields)=>{
       if(!err){res.send(rows);}else{console.log("err:",err);} 
    })
})
Router.get('/p/:slug', (req, res,next)=>{
    mysqlConection.query('SELECT * FROM pages WHERE slug = "'+req.params.slug+'" ',(err,rows,fields)=>{
        //console.log("here----",req.params.slug);
        if(!err){res.send(rows);}else{console.log("err:",err);} 
     })
})
Router.get('/id/:id', (req, res,next)=>{
    mysqlConection.query('SELECT * FROM pages WHERE id = ' + req.params.id,(err,rows,fields)=>{
        if(!err){res.send(rows);}else{console.log("err:",err);} 
     })
})
Router.get('/home', (req, res,next)=>{
    mysqlConection.query('SELECT * FROM home_page order by position_order',(err,rows,fields)=>{
         console.log("here----","home");
        if(!err){res.send(rows);}else{console.log("err:",err);} 
     })
})
module.exports = Router;