---
date: '2024-04-08T00:00:00.000Z'
description: ''
image: /img/week1/temp-clouds.jpg
title: A4 - Bowling in VR
week: 4
orderInWeek: 10
---

### Goals

* Creating a simple bowling hall
* Grabbing the ball from a socket
* Physics of Pins including collisions
* Scoring and display
* Physics Material
* Interactive Audio
* Snap Turn and Teleporting
* Continuous Movement
* Character Controller

 

### Solution

Here you can find the [solution app bowling part](https://www.dropbox.com/scl/fi/1pkwtuwz0hxwscxd8t3po/CVW_Bowling_20210904.apk?rlkey=4on84x95yzzc2toxr5m5gd05z\&dl=1). Download the .apk file and test it in the Quest for reference. Here you can find the [solution app for the locomotion part](https://www.dropbox.com/scl/fi/6r6wqbclnt12g5w5cgsuf/CVW_Locomotion_20210905.apk?rlkey=4m962m6mzdieho0mjotgigxt7\&dl=1). Please combine all features into a single app.

 

### Additional Material

* [Bowling Alley Soundscape](https://www.dropbox.com/scl/fi/oo9cyx2tqb0f60alc0xpg/BowlingAlley.wav?rlkey=1ukk0jr6abuye91hevqvshsxj\&dl=1)
* [Bowling Pin Sounds](https://www.dropbox.com/scl/fi/540otbq6bqz1hzanmdj7v/BowlingPin.wav?rlkey=eiuu7ce4g63e5pwj9bw53ljgj\&dl=1)
* [Bowling Info](https://en.wikipedia.org/wiki/Ten-pin_bowling)

 

### Point List (max 5 points)

* Ball can be thrown and slips nicely (0.5 point)
* Pins fall and make proper sounds (0.5 point)
* Scoring board counts (0.5 point)
* Teleport and Snap Turn with Left Hand (0.5 point)
* Continuous Movement and Turn with Right Hand (0.5 point)
* Extra Tasks

 

## Instructions

### Setup VR

* Do not remove ray interactors

 

### Create App

### Make World

* Add ground plane. Make it long in z direction.
* Add two lane boundaries with cubes
* Add some colors

### Snap Turns

* Add XR Interaction Setup from Starter Asset
* Test snap turn with thumb stick.

### Teleportation

* Add Teleportation Area component to floor
* Test teleportation with grip button

### Continuous Movement

* Test Continuous Movement
* Disable Strafe on Continuous Move.

### Make Ball

* Make Sphere, set size and color
* Add Rigidbody and enable gravity
* Add XR Grab Interactable
* Make prefab

### Distance Grab and Throw Ball

* RightHandController -> XR Ray Interactor -> Enable Force Grab
* Test grab with ‘grip’ button and throw ball

### Make Pin

* Make Cylinder, set size (e.g., 0.08, 0.2, 0.08) and color
* Add Rigidbody, set mass
* Make prefab
* Place ten pins

### Make Table for the Ball

* Make Cube, place it at the side of the lane
* Place SocketInteractor on table: Create empty GameObject, add XR Socket Interactor, add Sphere Collider (enable IsTrigger)
* Set Ball to XR Socket Interactor -> Starting Selected Interactable. The ball needs to be in the scene, not only a prefab.

### Add Sounds for Pins

* Add to Pin Object: Audio Source Component and add pin impact sound file, disable ‘Play on Awake’
* Add to Pin Object a script “Impact Sound”
* Create variable AudioSource and connect component to script
* OnCollisionEnter play sound, (optional) use velocity to randomize volume and pitch

### Add Physics Material to Ball

* Create Physics Material. Name it ‘Slip’.
* Set Dynamic and Static Friction to 0.1. Friction Combine to Minimum. Bounciness to 0.3.
* Drag Physics Material to Ball

### Add Scoring Board

* Add XR -> UI Canvas, Scale Canvas to (0.01,0.01,0.01), place canvas above pins
* Add Text (Text Mesh Pro) to Canvas as a child. Name “Score”.
* Add Script “Manage Score”. Open for edit
* Add public function ‘IncreaseScore’ for counting the points
* Add function ‘UpdateText’ for changing the Text in the Canvas (use score.ToString())
* Add Script “PinFalling” to Pin
* Add “using UnityEngine.Events;” to header
* Create Unity Event
* Invoke Unity Event on collision and if the pin is standing. (This is somehow inaccurate as the pin might not fall).
* In Unity Editor, add Score to Pins’ unity event

 

### Extra Tasks

You can add any feature you like. Points depend on the complexity of the features. Please explain all implemented features in a text file so we know what to look for.

For inspiration, here are a few ideas for extra features:

* Add Background sounds, textures to objects (0.5 points)
* Spawn new bowling ball in Socket when the ball is removed (0.5 points)
* Add sounds to bowling ball (1 point)
* Add text when all pins fall over and reset pins (1 points)
* Add sound design when you move (0.5 point)
* Add Custom Recticle in Teleportation Area and change appearance XR Ray Interactor (0.5 points)
* Add a crounching mechanic, i.e., add a character controller in a way that the player has to crouch to reach a certain part of the world. (0.5)
