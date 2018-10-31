var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

/*Compare page */
router.get('/compare', function(req, res) {
  res.render('compare', { title: 'Compare Smartphones' });
});

module.exports = router;
