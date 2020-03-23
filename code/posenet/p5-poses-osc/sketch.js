// we need a handle to the socket to send our osc values
var socket;
var isConnected;
let video;
let poseNet;
let poses = [];

// make an array of Balls 


function setup() {
	createCanvas(640, 360);
	setupOsc(8000, 12000);

	// use this to get a correct size for your camera. values depend on your camera.
	video = createCapture({
		video: {
		  width: { min: 640, ideal: 640, max: 1920 },
		  height: { min: 360, ideal: 360, max: 1080 }
		},
		audio: false
	  })

	
	video.size(width, height);

	// Create a new poseNet method with a single detection
	poseNet = ml5.poseNet(video, modelReady);
	// This sets up an event that fills the global variable "poses"
	// with an array every time new poses are detected
	poseNet.on('pose', function(results) {
	  poses = results;
	});
	// Hide the video element, and just show the canvas
	video.hide();

}

function modelReady() {
	select('#status').html('Model Loaded');
  }

function draw() {
	background(0);
	image(video, 0, 0, width, height);
	sendOsc('/poses/amount', poses.length);
	drawKeypoints();
	drawSkeleton();
	fill(255);
	text('poses detected: ' + poses.length,40,40);
	text('fps: ' + frameRate().toFixed(2),40,60);
};

// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
	// Loop through all the poses detected
	for (let i = 0; i < poses.length; i++) {
	  // For each pose detected, loop through all the keypoints
	  let pose = poses[i].pose;
	  for (let j = 0; j < pose.keypoints.length; j++) {
		// A keypoint is an object describing a body part (like rightArm or leftShoulder)
		let keypoint = pose.keypoints[j];
		let oscValues = [keypoint.score, keypoint.position.x, keypoint.position.y]
		sendOsc('/poses/' + i + '/' + keypoint.part, oscValues);
		// Only draw an ellipse is the pose probability is bigger than 0.2
		if (keypoint.score > 0.2) {
		  fill(255, 0, 0);
		  noStroke();
		  ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
		}
	  }
	}
  }

// A function to draw the skeletons
function drawSkeleton() {
	// Loop through all the skeletons detected
	for (let i = 0; i < poses.length; i++) {
	  let skeleton = poses[i].skeleton;
	  // For every skeleton, loop through all body connections
	  for (let j = 0; j < skeleton.length; j++) {
		let partA = skeleton[j][0];
		let partB = skeleton[j][1];
		stroke(255, 0, 0);
		line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
		
	  }
	}
  }

function receiveOsc(address, value) {
	console.log("received OSC: " + address + ", " + value);
}

function sendOsc(address, value) {
	socket.emit('message', [address, value]);
}

function setupOsc(oscPortIn, oscPortOut) {
	socket = io.connect('http://127.0.0.1:8081', { port: 8081, rememberTransport: false });
	socket.on('connect', function() {
		socket.emit('config', {	
			server: { port: oscPortIn,  host: '127.0.0.1'},
			client: { port: oscPortOut, host: '127.0.0.1'}
		});
	});
	socket.on('connect', function() {
		isConnected = true;
	});
	socket.on('message', function(msg) {
		if (msg[0] == '#bundle') {
			for (var i=2; i<msg.length; i++) {
				receiveOsc(msg[i][0], msg[i].splice(1));
			}
		} else {
			receiveOsc(msg[0], msg.splice(1));
		}
	});
}
