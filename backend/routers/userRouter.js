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
router.post('/authenticate', (req, res) => {
    console.log(req.body);
  
    Model.findOne(req.body)
      .then((result) => {
        if (result) res.status(200).json(result);
        else res.status(400).json({ message: 'login failed' })
      }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  
  })

  router.get('/getall', (req, res) => {
    Model.find()
      .then((result) => {
        res.status(200).json(result);
      }).catch((err) => {
        console.log(err);
        res.status(500).json(err) 
      });
  });
    
  router.get("/getbymail/:email", (req,res) => {
    Model.findOne({email: req.params.email })
    .then((result) => {
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({status: "User not found"});
        }
    }).catch((err) => {
        res.status(500).json(err);
    })
 })

 router.put( '/update/:id', (req, res) => {
    Model.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})




module.exports =  router;