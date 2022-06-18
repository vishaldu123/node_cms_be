const express = require('express');
const Router = express.Router();
const mysqlConection = require("../config/connection");

Router.get('/:id', (req, res,next)=>{
    mysqlConection.query('SELECT p.id AS page_id, p.title, p.slug, m.id AS menu_id, m.menu_name, p.is_active FROM pages AS p INNER JOIN menu_pages ON p.id = menu_pages.page_id INNER JOIN menu AS m ON menu_pages.menu_id = m.id WHERE m.id = ' + req.params.id,(err,rows,fields)=>{
        if(!err){res.send(rows);}else{console.log("err:",err);} 
     })
})
module.exports = Router;