var mongoose = require("mongoose"),
	moment = require("moment"),
	Validations = require("../utils/Validations"),
	SmartPhone = mongoose.model("SmartPhone");
var Comparisons = mongoose.model("Comparisons");



	module.exports.comparePhones = function(req,res,next){

  phone1 = req.params.phone1;
	phone2 = req.params.phone2;
	phone3 = req.params.phone3;
	phone4 = req.params.phone4;
var phonesData =[];
	SmartPhone.findById(phone1,function(err,ph1){
if(err){
console.log(err);
return next(err);
}
phonesData.push(ph1);


SmartPhone.findById(phone2,function(err,ph2){
if(err)
return next(err);

var time = Date.now();
Comparisons.update({d1:ph1.name,d2:ph2.name}, 	{$inc:{comparisonNumber:1}}, function(error, rawResponse) {
      if (error) {
        console.error(error);
        process.exit(2);
      }
});
Comparisons.findOne({$or:[{d1:ph1.name,d2:ph2.name},{d1:ph2.name,d2:ph1.name}]},

	function(err,comparison){
	if(comparison==null){
var c = new Comparisons({d1:ph1.name, d2:ph2.name});
c.save(function (err) {
 if (err) return handleError(err);
 console.log("creating new comparison");
 console.log(comparison);
});
}
 console.log(comparison);

});
phonesData.push(ph2);

if(phone3!="undefined")
SmartPhone.findById(phone3,function(err,ph3){
if(err)
return next(err)

phonesData.push(ph3);

});
if(phone4!="undefined")
SmartPhone.findById(phone4,function(err,ph4){
if(err)
return next(err)

phonesData.push(ph4);

});

		res.status(201).json(
			{err:null,
		 msg: "Devices",
		 data:phonesData}
		);


});

	});





	};


	module.exports.getLatestComp = function(req,res,next){
		console.log("getLatestComp");
Comparisons.find({}).sort('-compareTime').limit(10).exec(function(err,comparisons) {
if(err){
	console.log(err);
return next(err);
}
console.log(comparisons);
	res.status(201).json({
		err: null,
		msg: "last 10 comparisons made ",
		data: comparisons
	})
});
};
module.exports.getPopularComp = function(req,res,next){
	console.log("getPopularComp");
Comparisons.find({}).sort('-comparisonNumber').limit(10).exec(function(err,comparisons) {
if(err){
console.log(err);
return next(err);
}
console.log(comparisons);
res.status(201).json({
	err: null,
	msg: "last 10 comparisons made ",
	data: comparisons
})
});
};


	module.exports.createSmartPhone = function(req,res,next){

		SmartPhone.create(req.body,function(err,smartPhone){
			if(err)
				return next(err);



				res.sendStatus(201).json({
					err: null,
					msg: "New Device was added ",
					data: smartPhone
				});

		});


	};
	module.exports.getPhones = function(req,res,next){
console.log("getPhones function");


var r = req.params.reg;
	SmartPhone.find({name:{$regex:r}}).limit(5).exec(function(err,phones){
console.log("callback");
			if(err){
				console.log(err);
			return next(err);
}else{

			res.status(201).json(
				{err:null,
			 msg: "Devices",
			 data: phones}
			);

}
         });





	};
	module.exports.deleteSmartPhone = function(req,res,next){
		SmartPhone.findByIdAndRemove(req.params._id).exec(function(err,smartphone){
			if(err)
				return next(err);
			if(!smartphone)
				return res.status(404).json({err:null,msg:"No such smartphone",data:null});

        res.sendStatus(200).json({
			err: null,
			msg: "SmartPhone was deleted successfully.",
			data: smartphone
		});


		});

	};
	module.exports.getSmartPhone = function(req,res,next){

		SmartPhone.find({_id: req.params._id}).exec(function(err,smartphone){
			if(err)
				return next(err);
		});
		res.sendStatus(200).json({
			err: null,
			msg: " SmartPhone : ",
			data: smartphone
		});


	};
