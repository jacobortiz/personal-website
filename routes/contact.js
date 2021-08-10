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
    console.log(process.env.EMAIL)
    res.send('currently being worked on (:')
})

module.exports = router