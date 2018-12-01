var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.set('Cache-Control', 'public, max-age=360');
  res.send('respond with a resource');
});

module.exports = router;
