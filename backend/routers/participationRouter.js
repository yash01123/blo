const express = require('express');
const router = express.Router();
const Model = require('../models/participationModel');

router.post('/add', (req, res) => {
  console.log(req.body);
  new Model(req.body).save()
    .then((result) => {
      res.status(200).json(result);

    }).catch((err) => {
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

router.get('/getbyid/:id', (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err)
    });
})
router.get('/getbycompetition/:id', (req, res) => {
  console.log(req.params.id);
  Model.find({ competition: req.params.id }).populate('blog').populate('user')
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err)
    });
})

router.get('/check-participation/:id/:userid', (req, res) => {
  Model.findOne({ competition: req.params.id, user: req.params.userid })
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err)
    });
})




module.exports = router;