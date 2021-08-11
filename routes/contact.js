var express = require('express');
var router = express.Router();

var nodemailer = require('nodemailer')

const name = 'Jacob Ortiz-Rodriguez'

/* GET contact page. */
router.get('/', function(req, res, next) {
    res.render('contact', { 
        name: name,
        status: 'muted', 
        message: '* Required'
    });
});

/* POST contact */
router.post('/', function(req, res, next) {
    var name = req.body.name
    var surname = req.body.surname
    var email = req.body.email
    var message = req.body.message

    const transporter = nodemailer.createTransport({
        service: 'gmail', 
        auth: {
            type: 'OAuth2',
            user: process.env.EMAIL,
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
            refreshToken: process.env.refreshToken,
            accessToken: process.env.accessToken
        }
    });

    var mail_options = {
        from: email,
        to: 'jacob@jacobortiz.io',
        subject: `From: ${name} ${surname}, ${email} | New Message!`,
        text: message
    }

    transporter.sendMail(mail_options, function(error, response) {
        if(error) {
            console.log(error)
            res.render('contact', {
                name: name,
                status: 'danger',
                message: 'Oops, something went wrong, please try again in a bit.'

            })

        } else {
            res.render('contact', {
                name: name,
                status: 'success',
                message: 'Message sent successfully, I will get back to you soon!'
            })
        }


    });
})

module.exports = router