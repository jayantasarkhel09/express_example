class AuthenticationController {
     async signupWithCredentials (req, res)
      {
     	res.send("here is the data");
      }
    withoutStaticMethod(req, res) {
        console.log('you are just calling non static method using object')
    }
    save(req,res)
    {
      //console.log(role);
      

    	console.log(req.body.name);
    }
}


module.exports=AuthenticationController;