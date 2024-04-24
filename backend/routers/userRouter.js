const express = require('express');
const router =express.Router();
const Model = require('../models/userModel');

router.get('/add' , (req, res) =>{
    res.send('Response from user add');
});

router.get('/delete',(req, res)=>{
    res.send('Response from user delete');
});
router.get('/update',(req, res)=>{
    res.send('Response from user update');
});
router.get('/getall',(req, res)=>{
    res.send('Response from user getall');
});



module.exports =  router;