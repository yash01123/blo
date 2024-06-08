const express = require('express');
const router = express.Router();
const Model = require('../models/competitionModel');

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


router.get('/delete', (req, res) => {
  res.send('Response from user delete');
});
router.put('/update/:id', (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, {new : true})
    .then((result) => {
      res.status(200).json(result);
    }).catch((err) => {
      console.log(err);
      res.status(500).json(err)
    });
});
router.get('/getall', (req, res) => {
  res.send('Response from user getall');
});



module.exports = router;