const express = require('express');
const router =express.Router();
const Model = require('../models/userModel');

router.post('/add' , (req, res) =>{
    console.log(req.body);
    new Model(req.body).save()
    .then((result)=>{
        res.status(200).json(result);
       
    }).catch((err)=>{
        console.log(err);
        res.status(500).json(err);

    });
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