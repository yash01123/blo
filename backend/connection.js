const { log } = require('console');
const mongoose = require('mongoose');

const url ="mongodb+srv://ysvardhan12:Yash123@cluster0.bq4mori.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(url)
.then((result) =>{
    console.log('connected to db');
 }).catch((err)=>{
  console.log(err);
});