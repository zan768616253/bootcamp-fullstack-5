var express= require('express');
var calculatorController= require('../controllers/calculatorController')

var router= express.Router();
router.get('/add', (req, res) =>{
    calculatorController.addNumbers(req,res)
})
module.exports= router;