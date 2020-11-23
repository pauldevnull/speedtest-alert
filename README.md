# speedtest-alert

## Overview
Measures download speeds on a local internet connection and sends an email (or SMS) alert when speeds are below a predefined threshold.

## Why?
Sometimes routers or modems have bad days and need to be reboot, and sometimes ISPs have outages/service degredation and don't communicate with their customers or provide credits unless their customers contact them regarding the issue. This repository exists to provide people with a convenient way to stay informed about their internet speeds so that issues can be quickly mitigated.

## How To Use
* Clone this repository: "git clone https://github.com/pauldevnull/speedtest-alert.git"
* Navigate to the cloned repository: "cd speedtest-alert"
* Install dependencies: "npm install"
* Fill out the settings.json file:
```
	{
	// This is the threshold (in MBPS) that will trigger the alert if download speeds are less than the provided value
	"threshold": 800,
	// The service used to send the email or sms alert
	"service": "gmail",
	// The email address used to send the email or sms alert
	"email": "my-send-email@gmail.com",
	// The email address used to send the email or sms alert
	"password": "my-send-email-password@gmail.com",
	// The address that will receive the alert
	"receiver": "my-receiver-email@gmail.com"
}
```
* Run the script: "node speedtest-alert.js"

### SMS Alerting
To receive SMS alerts, use your phone number for the "receiver" value in the "config.json" formatted depending on your cell service provider (e.g. "receiver": "5551234567@vtext.com"):
```
AT&T				10digitphonenumber@txt.att.net
Carolina West Wireless		10digitphonenumber@cwwsms.com
Cellular One			10digitphonenumber@mobile.celloneusa.com
Illinois Valley Cellular	10digitphonenumber@ivctext.com
Inland Cellular Telephone	10digitphonenumber@inlandlink.com
Sprint				10digitphonenumber@messaging.sprintpcs.com
T-Mobile			10digitphonenumber@tmomail.net
US Cellular			10digitphonenumber@email.uscc.net
Sprint				10digitphonenumber@messaging.sprintpcs.com
T-Mobile			10digitphonenumber@tmomail.net
US Cellular			10digitphonenumber@email.uscc.net
Verizon				10digitphonenumber@vtext.com
Virgin Mobile			10digitphonenumber@vmobl.com
```

### Scheduling
This script can be scheduled to run at a fixed interval. Guides can be found below depending on your operating system:
* [Windows](https://joshuatz.com/posts/2020/using-windows-task-scheduler-to-automate-nodejs-scripts/)
* [OS X](https://medium.com/better-programming/schedule-node-js-scripts-on-your-mac-with-launchd-a7fca82fbf02)
* [Linux](https://www.howtogeek.com/101288/how-to-schedule-tasks-on-linux-an-introduction-to-crontab-files/)
