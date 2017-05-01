'use strict';
const nodemailer = require('nodemailer');
const config = require('../config');


module.exports = {

    sendMail: (name, from, phoneNumber, to, subject, text) => {

        to = config.email.emailTo;

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.email.nodemailerAccount,
                pass: config.email.nodemailerAccountPass
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: name + " <" + from + ">", // sender address
            to: to, // list of receivers
            subject: subject, // Subject line
            // text: text, // plain text body
            html: `<b><h2>Inquiry from `+name+` on amitmaraj.com</h2></b>
            <h4>Contact at: `+phoneNumber+`</h4><br />
            <p>`+text+`</p>` // html body
        };

        return new Promise((resolve, reject) => {

            // send mail with defined transport object
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    return reject(error);
                }
                return resolve('Message %s sent: %s', info.messageId, info.response);
            });

        })

    }

}