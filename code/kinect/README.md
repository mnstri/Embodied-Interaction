# Kinect

## Hardware

### Kinect V1
The original Kinect sensor
#### Model Versions for Kinect V1
There are three different model numbers for the original Kinect. All of them look identical, but you can find the model number on the base of Kinect. Microsoft has discontinued all of these models so you are most likely only going to find used devices on eBay etc. (There is also a white version of the original Kinect, it’s the same except for the color).
* 1414 (the oldest model, most reliable in most software)
* 1473 (updated model, might cause some issues in some software)
* 1517 (Kinect for Windows model, might cause some issues in some software)

The main issue that I have run into with models other than the 1414 is that it does not correctly report the serial number of the device. This is not really an issue in most cases, but if you want to do something where you need to use multiple Kinect sensors with one computer, you might have problems identifying which Kinect is which. There are workarounds for this. You can for example use the serial number of the audio device to differentiate between the devices.

#### Where to get it?

The Kinect V1 has been discontinued, you might be able to find used ones. Make sure it comes with the USB adapter/power supply.

### Kinect V2
This is the newer version of the Kinect Sensor. Unfortunately, the naming policy in Microsoft is very confusing so sometimes this version is called the Kinect One (since is was made for the XBox One). I will be calling this the Kinect V2 and the older original Kinect sensor will be referred to as the Kinect V1.

#### Where to get it?

The Kinect V2 has been discontinued, you might be able to find used ones. Also remember to get the USB adapter.

## How to Use It?

### Depth Image + openCV

### Using the 3D Point Cloud

### Tracking People (User Tracking, Skeleton Tracking)

#### OpenNI

OpenNI is the framework originally developed by [PrimeSense](https://en.wikipedia.org/wiki/PrimeSense), the company that created the Kinect V1 hardware. Apple bought PrimeSense in 2013 and the development of the OpenNI framework essentially stopped completely. Every year it gets more and more difficult to work with the OpenNI skeleton tracking as each hardware and software update introduces new problems that never get fixed.

#### Kinect for Windows

[Kinect for Windows SDK](https://developer.microsoft.com/en-us/windows/kinect/) is developed by Microsoft and is very similar to the original OpenNI SDK. It supports skeleton tracking with either the Kinect V1 or V2. After Microsoft discontinued the Kinect Sensor, the development of the Kinect for Windows SDK also stopped. You can still download the SDK and it is still supported by many programming environments and other software.

## Tracker and Code Examples

### Processing

### openFrameworks

#### ofxKinect

ofxKinect is an openFrameworks addon that comes built-in with the openFrameworks library when you download it. It supports only the Kinect V1 device. It does NOT support the user and skeleton tracking (OpenNI or Kinect for Windows). It is most often used to work with the point cloud data from the depth image or together with openCV for depth filtering and blob tracking. openFrameworks comes with an example that shows how you can do depth thresholding and blob tracking.

This is very useful for situations where you can install the Kinect above the users so you can.

#### ofxOpenNI

An openFrameworks addon that uses the OpenNI user and skeleton tracking.

### TouchDesigner

### Quartz Composer

### Vuo

### NI Mate
https://ni-mate.com/about/

A general purpose tracking application for Kinect and some other older depth cameras. Made specifically to be used with Blender as a low-cost motion capture solution, but also has nice features, such as MIDI and OSC output, for all kinds of applications.

Supported sensors on MacOS and Windows:

* Kinect for Windows (gen2), Kinect XBOX 360 (gen1)
* Asus Xtion Pro Live, PrimeSense Carmine 1.08
* Intel RealSense F200, R200, SR300

*NOTE: Seems to be broken on Mac OS 10.14 and above.*

### Nuitrack
https://nuitrack.com/

Nuitrack is a skeleton tracking middleware that is able to use many different sensors (Kinect, RealSense, Azure Kinect etc.). The SDK has examples for Unity and Unreal Engine. They also have C++ and C# examples, so you can make your own implementations.

Features:

* Full Body Skeletal Tracking (19 Joints)
* 3D Point Cloud
* User Masks
* Gesture Recognition
* Cross-platform SDK for Android, Windows and Linux
* 3D Sensor independent - supports Kinect v1, Asus Xtion, Orbbec Astra, Orbbec Persee, Intel RealSense
* Unity and Unreal Engine Plugins
* OpenNI 1.5 compatible - OpenNI module allows you to move your OpenNI-based apps developed for Kinect and Asus Xtion to other platforms, including Android
* You need to buy a license to actually use it

Links:

* [Nuitrack website](https://nuitrack.com/)
* [Nuitrack SDK documentation](http://download.3divi.com/Nuitrack/doc/)

# Alternatives to the Kinect sensor

* [Intel RealSense](https://github.com/Mnstri/Embodied-Interaction/tree/master/code/intel-realsense)
* [Azure Kinect](https://azure.microsoft.com/en-in/services/kinect-dk/) (not yet released in Europe)
* [Webcam + OpenPose](https://github.com/Mnstri/Embodied-Interaction/tree/master/code/posenet)
* [TVico](https://tvico.io/) (Android Box + Depth Sensor built into one device)
