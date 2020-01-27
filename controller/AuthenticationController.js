   var cookieParser = require('cookie-parser');
    var session = require('express-session');


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
      var mysql = require('mysql')
      var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin#123',
     database: 'mydb'
      });

      connection.connect();
      var name=req.body.name;
      var email=req.body.email;

      console.log("Connected!");
        var sql = "INSERT INTO `user` (name, emailid) VALUES ('" +name + "','" + email + "')";
  connection.query(sql, function (err, result) {
    if (err) throw err;
     res.redirect('/fetchi');
  });
   
    }
    fetchdata(req,res)
    {
        var mysql = require('mysql')
      var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin#123',
     database: 'mydb'
      });

      connection.connect();
     
      console.log("Connected!");
        var sql = "select * from user";
  connection.query(sql, function (err, result) {
    if (err) throw err;
   res.render('test',{data:result});
  });


      console.log("jayanta");
     

  

    }
    fetchdelete(req,res)
    {
      var paramid=req.params.id;
       var mysql = require('mysql')
      var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin#123',
     database: 'mydb'
      });

      connection.connect();
     
      console.log("Connected!");
      var sql='DELETE FROM user WHERE id = "' + paramid + '"';
      //console.log(paramid);
      connection.query(sql, function (err, result) {
    if (err) throw err;
     res.redirect('/fetchi');
  });
    }
    fetchedit(req,res)
    {
       

      console.log("test");
    }



    details(req,res)
    {
      var paramid=req.params.id;
      var mysql = require('mysql')
      var connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin#123',
      database: 'mydb'
      });
      var sql='select *from user WHERE id = "' + paramid + '"';
      console.log(paramid);
      connection.query(sql, function (err, result) 
      {
      if (err) throw err;

      res.render('details',{data:result});

      });
      //   var paramid=req.params.id;

    }

    async userlogin(req,res)
  {
    console.log("going right");

    var username=req.body.uname;
    var password=req.body.psw
    console.log(password);
    if(username=='jayanta.sarkhel09@gmail.com'&& password=='jayanta100')
    {
      console.log("this is again a try");
        session.user_id = 12;
        console.log(session.user_id);
      res.redirect('/my_secret_page');
    }
    else
    {
      console.log("not user");

    }

  }
 logout(req,res)
  {

    console.log(session.user_id);
     delete session.user_id;
     console.log(session.user_id);
  }
  showall(req,res)
  {
    
  res.render('products');
    //console.log("products");
  }
}


module.exports=AuthenticationController;