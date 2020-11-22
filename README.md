# speedtest-alert

## Overview
Speedtest-alert was created to measure download speeds on a local internet connection and send an email or sms when speeds are below a predefined threshold.

## How to use
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
