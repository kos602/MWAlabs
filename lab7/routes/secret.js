const express = require('express');
const router = express.Router();
const crypto = require('crypto');
let algorithm = 'aes256', password = 'asaadsaad';

function decrypt(text){
    var decipher = crypto.createDecipher(algorithm, password);
    var dec = decipher.update(text, 'hex', 'utf8');
    dec += decipher.final('utf8');
    return dec;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  let secret = req.app.locals.db.collection('messages').findOne({}).then((secret) => res.end(decrypt(secret.message)));
});

module.exports = router;
