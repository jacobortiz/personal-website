var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { 
        name: 'Jacob Ortiz-Rodriguez',
    });
});

/* POST contact */
router.post('/', function(req, res, next) {
    res.send(process.env.EMAIL)
})

module.exports = router