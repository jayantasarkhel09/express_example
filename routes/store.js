var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/store', function(req, res, next) 
{
  res.render('contacts');
});



module.exports = router;