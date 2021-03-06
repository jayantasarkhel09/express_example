var express = require('express');
var router = express.Router();
var msg = require('./../controller/Connection.js');
/*const { signupWithCredentials } = require('./../controller/AuthenticationController')*/

const AuthenticationController = require('./../controller/AuthenticationController')
const FetchController = require('./../controller/FetchController')
const MongodbController= require('./../controller/MongodbController')
const mnc=new MongodbController();

const fetch=new FetchController()
const auth = new AuthenticationController()




function checkAuth(req, res, next)
 {
  if (!session.user_id) 
  {
    res.send('You are not authorized to view this page');
  } else 
  {
    next();
  }
}
/* GET home page. */
router.get('/', function(req, res, next) 
{
  res.render('index');
});


router.get('/fetchi',auth.fetchdata);

router.get('/delete/:id',auth.fetchdelete);
router.get('/details/:id',auth.details);
router.get('/edit/:id',auth.fetchedit);
router.get('/user',auth.signupWithCredentials);
router.get('/contact',function(req,res,next)
	{
		
		res.render('contacts');
	});

router.post('/save',auth.save);
router.get('/saves',mnc.insert);
router.get('/fetchs',mnc.fetch);
router.get('/login',function(req,res,next)
{
	res.render('login');
});

router.post('/userlogin',auth.userlogin);
router.get('/my_secret_page',function(req,res)
{
		console.log("authenticate");	    

})


router.get('/cart',function(req,res,next)
{
   res.render('cart');
});

router.get('/userlogout',auth.logout);

router.get('/showall',mnc.showall);

module.exports = router;
