var mongoose = require("mongoose"),
	moment = require("moment"),
	Validations = require("../utils/Validations"),
	SmartPhone = mongoose.model("SmartPhone");

	module.exports.createSmartPhone = function(req,res,next){

		SmartPhone.create(req.body,function(err,smartPhone){
			if(err)
				return next(err);

				res.status(201).json({
					err: null,
					msg: "New Device was added ",
					data: smartPhone
				});
			
		});

	};
	module.exports.deleteSmartPhone = function(req,res,next){
		SmartPhone.findByIdAndRemove(req.params._id).exec(function(err,smartphone){
			if(err)
				return next(err);
			if(!smartphone)
				return res.status(404).json({err:null,msg:"No such smartphone",data:null});

        res.status(200).json({
			err: null,
			msg: "SmartPhone was deleted successfully.",
			data: user
		});


		});

	};
	module.exports.getSmartPhone = function(req,res,next){

		SmartPhone.find({_id: req.params._id}).exec(function(err,smartphone){
			if(err)
				return next(err);
		});
		res.status(200).json({
			err: null,
			msg: " SmartPhone : "
			data: smartphone 
		});


	};