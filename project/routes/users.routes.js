const express = require('express');
const router = express.Router();
const users = require('../data.json')
const bankController = require('../controllers/bank.controllers')



router.get('/',(req,res)=>{
  bankController.getWorkers(req, res)
});

router.get('/2',(req,res)=>{
  bankController.getWorkers2(req, res)
});

// router.get('/',(req,res)=>{
      // function1 // workerController.addWorker(req, res); ////// or ////// return res.status(200).json({users : usersJson.users})
// }).get('/:id',(req,res)=>{
  // function2 // workerController.getWorkers(req, res); ////// or ////// return res.status(200).json({user : usersJson.users[req.params.id]})
// }).post('/',(req,res)=>{
// function3 // workerController.anotherfunc...(req, res); ////// or ////// return res.status(200).json({user : usersJson.users[req.params.id]})
// })

module.exports = router;