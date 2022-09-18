Table of Contents
Table of Contents
General Inf
Technologies
Installation and run
Authors
General Inf
It is an iot web (industrial internet of things) application linked to our own hardware adaptable to various environments such as greenhouses, home automation control of lights, motors, water pumps, actuators, iiot control

alt text alt text

Technologies
A list of technologies used within the project:

Flask
Python
MySQL
Nginx
Gunicorn
EC2
Proteus
Installation and run
To run the project you will help yourself with the file called app.py and installs this packages and dependencies:

Install to run: python3-pip venv, flask, flask_mysqldb, mysql-server.
Install the firmware dependencies: Arduino IDE, ArduinoJson, AsyncTCP-master, ESPAsyncWebServer-master, WebSockets.
Then run the project:

$ git clone https://github.com/ssebastiancardona/web_iot.git
$ run with: python3 app.py
Authors
Juan sebastian cardona maya - ss3bastiancardona@gmail.com

Carolina Ramón Palacio - caroramonp@gmail.com