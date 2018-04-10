var awsIot = require('aws-iot-device-sdk');

var device = awsIot.device({
  keyPath: '/home/pi/Downloads/waterpi-node/certs/bed554ec32-private.pem.key',
  certPath: '/home/pi/Downloads/waterpi-node/certs/bed554ec32-certificate.pem.crt',
  caPath: '/home/pi/Downloads/waterpi-node/certs/VeriSign.pem',
  host: "a11orpone228jn.iot.us-east-2.amazonaws.com",
  port: 8883,
  clientId: "raspi-data-publisher",
  region: 'us-east-1'
});

//
// Device is an instance returned by mqtt.Client(), see mqtt.js for full
// documentation.
//
device.on('connect', function() {
  console.log('connect');
  device.subscribe('raspi-water-pump/data');
});

module.exports.device = device