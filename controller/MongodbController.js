class MongodbController 
{
	insert(req,res)
	{
		//var MongoClient = require('mongodb').MongoClient;
    const Product = require('../models/product.model');

//Simple version, without validation or sanitation


	
	 var product1 = new Product({ name: 'Introduction to Mongoose', price: 10});
	 console.log("after product");
	 product1.save(function (err, product1) {
      if (err) return console.error(err);
      console.log(product1.name + " saved to bookstore collection.");
    }); 
   
 



	

	}

}

module.exports=MongodbController;