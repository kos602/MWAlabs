var express = require('express');
var axios = require('axios');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.set('Cache-Control', 'private, max-age=86400');
    new Promise(function (resolve, reject) {
        const data = axios.get('https://randomuser.me/api/', {params: {results: 10}});
        if (data) {
            resolve(data)
        }
    }).then(res.json(data));

});

module.exports = router;
