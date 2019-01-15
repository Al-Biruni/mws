var express = require('express');
var SmartphonesCtrl = require("../controllers/smartPhone.controller");
var router = express.Router();


router.get('/',function(req,res){
	res.send("Welcome to here");
});
/*smartphone handlers */
router.post('/Smartphones/create',
SmartphonesCtrl.createSmartPhone
	);
	router.get('/getphones',
         SmartphonesCtrl.getPhones );
router.get('/Smartphones/getPhone/:phoneId',
SmartphonesCtrl.getSmartPhone
	);
router.delete('/Smartphones/deletePhone/:phoneId',
SmartphonesCtrl.deleteSmartPhone
	);

module.exports = router;
