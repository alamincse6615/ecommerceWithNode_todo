 const mongoose = require('mongoose');


 const connection = mongoose.createConnection('mongodb://localhost:27017').on('open',()=>{
    console.log("mongo db connected");
 }).on('error',()=>{
    console.log("error on mongo db connected");
 });

 module.exports = connection;