var express = require('express');
const { check, validationResult } = require('express-validator/check');
var router = express.Router();

router.get('/', function(req, res, next) {
    req.app.db.collection('locations').find({}).toArray((err, data) => {
      if (err) return next(err);
      res.json(data);
    });
});

router.post('/create',
    check(['name', 'category']).not().isEmpty().isString(),
    check(['location']).isArray(),
    check(['location.1']).matches(/\d+.\d+/),
    check(['location.0']).matches(/\d+.\d+/),
    function(req, res, next) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            req.app.db.collection('locations').insert({name: req.body.name, category: req.body.category, location: [req.body.location[0], req.body.location[1]]});
            return res.send('Grade added');
        }
        else return next({status: 500, message: 'Sorry there is somethig wrong.'});
    });

router.get('/nearest',
    check(['category']).not().isEmpty().isString(),
    function(req, res, next) {
        const errors = validationResult(req);
        if(errors.isEmpty()){
            req.app.db.collection('locations')
                .find({location: {$near: [-91.9665342, 41.017654]}, category: req.body.category}, {})
                .toArray((err, data) => {
                  if (err) return next(err);
                    res.json(data);
                });
        }
        else return next({status: 500, message: 'Sorry there is somethig wrong.'});
    });

module.exports = router;