var mongoose = require("mongoose");



var userRatingSchema = mongoose.Schema({

phoneId:{
	type : Number,
	require : true
},
fiveStars:{
type : Number,
default:0
},
fourStars:{
type : Number,
default:0
},
threeStars:{
type : Number,
default:0
},
twoStars:{
type : Number,
default:0
},
oneStar:{
type : Number,
default:0
}
 
},
{
  toObject: {
  virtuals: true
  },
  toJSON: {
  virtuals: true 
  }
  });

userRatingSchema.virtual('avg').get(function(){
	return (this.fiveStars+this.fourStars+this.threeStars+this.twoStars+this.oneStar)/5
});


mongoose.model("userRating",userRatingSchema);