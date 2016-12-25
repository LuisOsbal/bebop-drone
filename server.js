// Drone control code
var bebop = require('node-bebop');
var drone = bebop.createClient();

// Server
var express = require('express');
var web = express();
var servidor;

servidor = web.listen(8000, function () {
	console.log('Server running');
});

// Drone functions
function take_off() {
	drone.connect(function() {
		drone.stop();
	  drone.takeOff();
	});
};

function to_land() {
		drone.stop();
		drone.land();
};

function take_a_picture() {
		drone.stop();
		drone.takePicture();
};

// Init page
web.get('/', function (req, res) {
	console.log('Inicio');
	res.sendfile('index.html');
});

// It sends functions to the drone
web.get('/take_off', function (req, res) {
	console.log('despegar');
	take_off();
	res.sendfile('index.html');
});

web.get('/to_land', function (req, res) {
	console.log('aterrizar');
	to_land();
	res.sendfile('index.html');
});

web.get('/take_a_picture', function (req, res) {
	console.log('picture');
	take_a_picture();
	res.sendfile('index.html');
});