// Autogenerated from java.template file


var express = require('express')
var router = express.Router()
var BankCtrl = require('../controllers/BankController')

router.get('/',function(req, res, next){

  BankCtrl.find(req.query, function(err, results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})
router.get('/:id', function(req, res, next){
  console.log(req.params.id)
  BankCtrl.findById(req.params.id, function(err,results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})
router.post('/',function(req,res,next){

  console.log(req.body)
  BankCtrl.create(req.body,function(err,results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})
router.post('/:id',function(req,res,next){

  console.log(req.params.id)
  BankCtrl.delete(req.params.id,function(err,results){
    if(err){
      res.json({
        confirmation: 'fail',
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})
router.put('/:id',function(req,res,next){
  console.log(req.body)
  console.log(req.params.id)
  BankCtrl.update(req.params.id,req.body, function(err, results){
    if(err){
      res.json({
        confirmation: "fail",
        message: err
      })
      return
    }
    res.json({
      confirmation: 'success',
      results: results
    })
  })
})
module.exports = router