# RaspberryPi-IO-Project
Starting to Play with IO on the Raspberry Pi WORK IN PROGRESS
Intending to use the pi-gpio javascript library

Basing the App on Node.js and I am including all the dependencies (like boostrap, JQuery etc) locally as the pi will not necessarily have internet access when I am using the "website" to control the Pi's IO.

I am particularly pleased with the loop that adds any number of event listeners to the code, this is DRY programming!  Is it meta programming?  The code is generating it's own methods.

There are some overrides in my CSS file.  For some reason my Bootsrtap.css file did not contain the class btn-lg(?!), so I wrote it.

INTRUCTIONS:
Uncomment GPIO in index.js and in Actions.js before deploying on the PI (don't try to use them on a non Pi!)

go to here:
https://www.npmjs.com/package/pi-gpio
to get the GPIO JS Library

good source for how to use it:
http://www.robert-drummond.com/2013/06/06/raspberry-pi-gpio-inputoutput-in-javascript/

WELL, GETTING GPIO IS NOT DEFINED IN ACTIONS.JS IN LINE 18.  NEED TO SOLVE.  1.10.15