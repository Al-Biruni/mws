var mongoose = require("mongoose");


var phoneSchema = mongoose.Schema({
	
criticRating: {
type : String,
require: false,
trim: true
},
userRating:{
type : String,
require: false,
trim: true
},
performance:{
type : String,
require: false,
trim: true
},
display:{
type : String,
require: true,
trim: true
},
storage:{
type : String,
require: true,
trim: true
},
camera:{
type : String,
require: false,
trim: true
},
battery:{
type : String,
require: true,
trim: true
},
ram:{
type : String,
require: true,
trim: true
},
otherSensors:{
type : String,
require: false,
trim: true
},
fingerPrintSensor:{
type : String,
enum:['Yes','No'],
trim: true
},
operatingSystem:{
type : String,
require: true,
trim: true
}
});

mongoose.model("SmartPhone",phoneSchema);
