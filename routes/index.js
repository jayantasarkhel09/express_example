var express = require('express');
var router = express.Router();
/*const { signupWithCredentials } = require('./../controller/AuthenticationController')*/

const AuthenticationController = require('./../controller/AuthenticationController')

const auth = new AuthenticationController()
/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index');
});



router.get('/user',auth.signupWithCredentials);
router.get('/contact',function(req,res,next)
	{
		
		res.render('contacts');
	});

router.post('/contact',auth.save);

module.exports = router;
