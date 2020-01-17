const Product = require('../models/product.model');
class MongodbController 
{

	insert(req,res)
	{
		
	 var product1 = new Product({ name: 'Introduction to Nodejs', price: 20});
	 console.log("after product");
	 product1.save(function (err, product1) {
      if (err) return console.error(err);
      console.log(product1.name + " saved to bookstore collection.");
    }); 
   
 
	}
	async fetch(req,res)
	{
		var data=await Product.find({price:10});
		console.log(data);

	}

}

module.exports=MongodbController;