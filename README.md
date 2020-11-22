# speedtest-alert

## Overview
Speedtest-alert was created to measure download speeds on a local internet connection and send an email or sms when speeds are below a predefined threshold.

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
Carolina West Wireless		10digit10digitnumber@cwwsms.com
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