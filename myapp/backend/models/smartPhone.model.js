var mongoose = require("mongoose");
var userRating = require("./userRating.model");
const root = '../public/images/';
var phoneSchema = mongoose.Schema({

	picture: {
    type: String,
    get: v => `${root}${v}`
  },
userRating:{
type : userRating,
},
///////////Importan details
name:{
	type:String,
	unique : true,
	 required : true,
	 dropDups: true ,
	 trim:true
},
screenSize:{
	type : Number,

	trim: true

},
storage:{
type : String,

trim: true
},
camera:{
type : String,
require: false,
trim: true
},
battery:{
type : Number,

trim: true
},
proc:{
	type: String,

	trim : true
},
ram:{
type : String,

trim: true
},
tradeMark:{
	type : String,
	require:true,
	trim:true
},
operatingSystem:{
type : String,

trim: true
},
sim:{
type : String,

trim: true
},
relaseDate:{
type : Date ,

trim : true
},
userInterface:{
type : String,

trim : true
},
network:{
type : String,

trim : true
},

////////////////////////////////special details
fingerPrintSensor:{
type : String,
enum:['Yes','No']
},
faceSensor:{
type : String,
enum:['Yes','No']
},
otherSensors:{
type : String,
require: false,
trim: true
},
notiLight:{
type : String,
enum:['Yes','No']
},
///////////////media details
loudSpeaker:{
type : String,
enum:['Yes','No']
},
radio:{
type : String,
enum:['Yes','No']
},
audioJack:{
type : String
},
///////////////////perfomance
procType:{
	type:String,
	require:true
},
procDetails:{
	type:String
},
graphicProc:{
	type:String

},
//ram

/////////////////design
weight:{
	type:Number	,
	require:true
},
dim:[{

		length:{
	type:Number,
	require:true
},
        width:{
        	type:Number,
        	require:true
        }


}],
thickness:{
	type:Number,
	require:true
},
phoneMat:{
	type:String,

},
color:{
	type:String
},
//////////////////////screen details

screenType:{
	type:String
},
screenDim:[{

		length:{
	type:Number,
	require:true
},
        width:{
        	type:Number,
        	require:true
        }


}],
screenThickness:{
	type:Number,
	require:true
},
screenProtection:{
type : String,
enum:['Yes','No']
},
screenToPhoneR:{
type : String
},

////////////inetrnal storage details
//storage
addStorage:{
type : String,
enum:['Yes','No']
},
OTG:{
type : String,
enum:['Yes','No']
},
//////////////camera
fCamRes:{
	type:Number
},
fCamLens:{
	type:String
},
fCamImgQ:{
	type:Number
},
fCamVidQ:{
	type:String
},
fCamFlash:{
	type:String
},
fCamModes:{
	type:String
},

bCamRes:{
	type:Number
},
bCamLens:{
	type:String
},
bCamImgQ:{
	type:String
},
bCamVidQ:{
	type:String
},
bCamFlash:{
	type:String
},
bCamModes:{
	type:String
},
//////////////////////////battery details////////////////////
batSize:{
	type:Number
},
batType:{
	type:String
},
batUseageTime:{
	type:String
},
batReplace:{
type : String,
enum:['Yes','No']
},
batCharType:{
	type:String
},
//////////////////////Network details///////////////
wifi:{
type : String,
enum:['Yes','No']
},
hotspot:{
type : String,
enum:['Yes','No']
},
bluetooth:{
type : String,
enum:['Yes','No']
},
netwSupport:{
	type:String
},
gps:{
type : String,
enum:['Yes','No']
},
//sim
networkType:{
	type:String
},

price:{
type : Number
}


});

mongoose.model("SmartPhone",phoneSchema);
