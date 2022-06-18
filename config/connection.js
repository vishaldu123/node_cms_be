const mysql = require('mysql');
var mysqlConection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"node_cms_be",
    port:"3307",
    multipleStatements:true,
});
mysqlConection.connect((err)=>{
    if(!err){console.log("Connect")}else{console.log("failed",err)}
});

module.exports=mysqlConection;