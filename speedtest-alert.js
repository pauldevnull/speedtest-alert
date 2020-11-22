#!/usr/bin/env node

const nodemailer = require('nodemailer');
const speedTest = require('speedtest-net');
const settings = require('./settings.json');
const transporter = nodemailer.createTransport({
  service: settings.service,
  auth: {
    user: settings.email,
    pass: settings.password,
  }
});

const main = () => {
  speedTest({ acceptLicense: true, acceptGdpr: true }).then((result) => {
    const downloadMegabits = (result.download.bytes / 1000000).toFixed(0);

    if (downloadMegabits < settings.threshold) {
      sendSMS({ 
        subject: 'Internet Service Alert', 
        body: `Download speed is ${downloadMegabits}, below threshold of ${settings.threshold}`, 
      });
    }
  });
};

const sendSMS = (sms) => {
  const mailOptions = {
    from: settings.email,
    to: settings.receiver,
    subject: sms.subject,
    text: sms.body,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

main();
