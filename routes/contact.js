var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {

    res.render('contact', { 
        name: 'Jacob Ortiz-Rodriguez',
        temp: process.env.NAME
    });
});

/* POST contact */
router.post('/', function(req, res, next) {

    console.log('in post method, contact route')
    console.log(req.body.name)
    res.send('currently being worked on (:')
})

module.exports = router