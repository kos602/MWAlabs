var express = require('express');
var router = express.Router();

const User = require('../models/User');
const passport = require('../config/passport');

/* GET users listing. */
router.get('/:id', auth.required, function(req, res, next) {
    User.findById(req.params.id).then(function(user){
        if(!user){return res.sendStatus(401);}
        return res.json({user: user.toAuthJSON()});
    }).catch(next);
});

router.post('/new', function(req,res,next){
    var user = new User();
    user.username = req.body.user.username;
    user.email = req.body.user.email;
    user.setPassword(req.body.user.password);
    user.save().then(function(){
        return res.json({user: user.toAuthJSON()});
    }).catch(next);
});

router.post('/login', function(req,res,next){
    if(!req.body.user.email){
        return res.status(422).json({errors: {email: "can't be blank."}});
    }
    if(!req.body.user.password){
        return res.status(422).json({errors: {password: "can't be blank."}});
    }
    passport.authenticate('local', {session: false}, function(err, user, info){
        if(err){return next(err);}
        if(user){
            user.token = user.generateJWT();
            return res.json({user: user.toAuthJSON()});
        } else {
            return res.status(422).json(info);
        }
    })(req,res,next)
});

router.put('/user/:id', auth.required, function(req,res,next){
    User.findById(req.params.id).then(function(user){
        if(!user){return res.sendStatus(401);}
        if(typeof req.body.user.username !== 'undefined'){
            user.username = req.body.user.username;
        }
        if(typeof req.body.user.email !== 'undefined'){
            user.email = req.body.user.email;
        }
        if(typeof req.body.user.bio !== 'undefined'){
            user.bio = req.body.user.bio;
        }
        if(typeof req.body.user.image !== 'undefined'){
            user.image = req.body.user.image;
        }
        if(typeof req.body.user.password !== 'undefined'){
            user.setPassword(req.body.user.password);
        }
        return user.save().then(function(){
            return res.json({user: user.toAuthJSON()});
        });
    }).catch(next);
});

module.exports = router;
