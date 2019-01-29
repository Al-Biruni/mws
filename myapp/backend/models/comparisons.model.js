var mongoose = require("mongoose");

var comparisonSchema = mongoose.Schema({
  d1:{
  	type:String,
  	require:true,
  	trim:true
  },
  d2:{
  	type:String,
  	require:true,
  	trim:true
  },
  compareTime:{
    type:Date,
    default:Date.now

  },
  comparisonNumber:{
    type:Number,
    default:1
  }

});


var Comparisons=mongoose.model("Comparisons",comparisonSchema );

module.exports={
  Comparison : Comparisons
};
