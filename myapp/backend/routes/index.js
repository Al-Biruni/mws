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
	router.get('/getPhones-:reg',
         SmartphonesCtrl.getPhones );
router.get('/Smartphones/getPhone/:phoneId',
SmartphonesCtrl.getSmartPhone
	);


			router.get('/Smartphones/comparePhones/:phone1-vs-:phone2',
			SmartphonesCtrl.comparePhones
				);
				router.get('/Smartphones/comparePhones/latestComp',
				SmartphonesCtrl.getLatestComp
					);
					router.get('/Smartphones/comparePhones/popularComp',
					SmartphonesCtrl.getPopularComp
						);
router.delete('/Smartphones/deletePhone/:phoneId',
SmartphonesCtrl.deleteSmartPhone
	);

module.exports = router;
