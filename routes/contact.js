var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
    console.log(process.env.NAME)
    res.render('contact', { 
        name: 'Jacob Ortiz-Rodriguez' 
    });
});

/* POST contact */
router.post('/', function(req, res, next) {

    console.log('in post method, contact route')
    console.log(req.body.name)

})

module.exports = router