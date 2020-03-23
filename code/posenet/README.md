# Posenet
What can you find in this folder?

## p5-poses-osc
A simple example made with p5.js that uses ml5js (https://ml5js.org/) and posenet to detect poses from the real-time camera image. The positions of the poses is sent via osc to any application capable of receiving osc messages.

- Port: 8000
- Dependencies: 
    - [node.js](https://nodejs.org/en/)
    - [p5js-osc](https://github.com/genekogan/p5js-osc)

### How to use?

- Download and install Node.js (LTS is fine) [https://nodejs.org/en/](https://nodejs.org/en/)
- Clone or download [p5js-osc](https://github.com/genekogan/p5js-osc)
- Install p5js-osc with Terminal (Mac) or Command Prompt (Windows):  
  `cd path/to/p5js-osc/`  
  `npm install`  
- Start the p5js-osc bridge  
  `node bridge.js`  
- Open the p5-poses-osc/index.html in a browser (Chrome seems to be the fastest)
- Give the browser the permission to use the camera (make sure no other application is using it)
- Create something that is able to receive the osc messages

### OSC format

Currently, the OSC messages are formatted in the following way. This might change in future versions or I might give the user the opportunity to easily change the format in order to support different software.

## More Information

[![ml5.js Pose Estimation with PoseNet](http://img.youtube.com/vi/OIo-DIOkNVg/0.jpg)](http://www.youtube.com/watch?v=OIo-DIOkNVg "ml5.js Pose Estimation with PoseNet")

