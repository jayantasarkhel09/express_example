var express = require('express');
var router = express.Router();
var msg = require('./../controller/Connection.js');
/*const { signupWithCredentials } = require('./../controller/AuthenticationController')*/

const AuthenticationController = require('./../controller/AuthenticationController')
const FetchController = require('./../controller/FetchController')
const fetch=new FetchController()
const auth = new AuthenticationController()
/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index');
});


router.get('/fetchi',auth.fetchdata);
router.get('/delete/:id',auth.fetchdelete);
router.get('/edit/:id',auth.fetchedit);
router.get('/user',auth.signupWithCredentials);
router.get('/contact',function(req,res,next)
	{
		
		res.render('contacts');
	});

router.post('/save',auth.save);



module.exports = router;
