// Your code goes here

var vinElem = document.getElementById('vin');
gm.info.getVehicleConfiguration(function(data) {
	vinElem.innerHTML = gm.info.getVIN();
});

var steeringAngel = 0;
var acceleratorPosition = 0;

function onData(d) {
	if (d.wheel_angle != undefined)	
		steeringAngel = d.wheel_angle;
	
	if (d.accelerator_position != undefined)
		acceleratorPosition = d.accelerator_position;
	$('#steering-wheel').html(d.wheel_angle);

	//$('#accelerator_position').html(d.
}

//brake_position, accelerator_position
//gear, throttle_position

var dataToGet = [
	'average_speed', 'wheel_angle',
	'brake_position', 'accelerator_position',
	'gear', 'throttle_position'
];


//src\three.js-master
gm.info.watchVehicleData(onData, dataToGet);


