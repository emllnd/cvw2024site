---
title: A3 - Beat Saber
date: 2024-03-05
description: ''
image: /img/week1/temp-clouds.jpg
---

## Goal

At the end of this assignment, you will create a clone of the popular VR game [Beat Saber](https://beatsaber.com/). A demo version of Beat Saber is available for free [in the Quest Store](https://www.meta.com/en-gb/experiences/1758986534231171/).

### Solution

Here you can find the [solution app .apk](https://www.dropbox.com/scl/fi/j7v7ed7v28int96ad8n9d/CVW_BeatSaber_20210904.apk?rlkey=2zjwz9yzoo1qlflild2b7w3s8&dl=1). Download the .apk file and test it in the Quest for reference. See [MQDH .apk install instructions](/week2/mqdh-install-apps/).

&nbsp;

### Additional Material

- [Music Track - Fat Rat](https://www.dropbox.com/scl/fi/2076nj811ow3zz9qvk08p/Fat-Rat-Unity.mp3?rlkey=2af37a5bnu3h8c0erbhrzoqtu&dl=1)

&nbsp;

### Point List (max 5 points)

- Cubes are spawning (1 point)
- Sabers collide with Cubes (1 point)
- Cubes are moving musically (1 point)
- Extra Tasks

### Instructions

In the following, you find instructions to build the assignment app. If instructions are unclear, refer back to the lecture material or post to the course forum. You earn the full points when your app is feature-complete; it does not need to be an exact copy of the reference app.

### New Project

Create a new project using Unity Hub and choosing the Unity Editor version listed on the [Blessed Versions page](/additional/blessedversions). Uncheck "Connect to Unity Cloud" (scroll down in Project Settings).

### Package Manager

- Install XR Plugin Management (see version on the [Blessed Versions page](/additional/blessedversions))
- Install XR Interaction Toolkit (see version on the [Blessed Versions page](/additional/blessedversions))

### Add XR Origin

- In the Scene Hierarchy - Right-Click -> XR -> Device-based -> XR Origin

### Add Plane

- Right-Click -> 3D Object -> Plane

### Configure Build

- Edit -> Project Settings -> Player
- Change Company Name
- Change Product Name

**in Edit -> Project Settings -> Player -> Android Tab -> OtherSettings**
- Android Tab: Change Minimum API Level to at least 30
- Android Tab: Change scripting backend Mono --> IL2CPP
- Android Tab: uncheck ARMv7, check ARM64
- Android Tab: Active Input Handling -> Input System (new)

**in Edit -> Project Settings -> XR Plug-in Management**
- Desktop Tab -> Enable Open XR
- Android Tab -> Enable Open XR
- Add interaction profile Oculus Touch Controller Profile (not the Meta Touch Pro Controller!)
- Enable Meta Quest Support in Android

### Build

File->Build Settings
- Switch Platform to Android
- Add Open Scene
- Connect Quest Device
- Build and Run

## Create App

### Setup

- Remove Rays from Hand Controller
- Add Debug Window

### Create Sabers

- Make empty game object called Saber
- Reset Saber position all to 0
- Make Cylinder as children (of Saber) called Light
- Scale to a long stick
- Make Cylinder as children (of Saber) called Handle
- Scale to shorter handle
- Move Light and Handle in good positions
- Rotate Saber such that the handle aligns with controller

### Make Prefabs

- Make Folder Prefabs
- Drag Saber to Folder

### Instantiate Prefabs

- Drag Saber to Children of LeftHandController (same for right)

### Add Colors

- Make Folder Materials
- Create Materials named Red and Blue
- Adjust Albedo to color
- Drag on object ‘Light’ in Sabers
- Create Material named black and apply to ‘Handles’

### Making BeatCubes

- Create mid-sized Cube names BeatCubes
- Create ‘CubeMovement’ Script
- Make Folder ‘Scripts’ and move CubeMovement.cs files there (only for tidyness)
- Edit CubeMovement
- Add constant z-movement
- Make Prefab
- Make Prefab Variant for left and right with colors red and blue

### Make CubeSpawner

- Create Empty game object,
- add Script ‘CubeSpawner’
- Add BeatCube_Left as public variable in script
- Instatiate Cube in Start routine, at the position of the spawner
- Instantiate Cube in Co-routine (wait 1 seconds between each spawn)
- Set public variable for spawn interval
- Add probability of spawning with Random
- Make Prefab
- Add two CubeSpawners to Scene (with different colors and positions)

### Hit Cubes

- Add Script CubeHit to BeatCube prefab
- Add OnTriggerEnter
- Add Rigibody to BeatCube and enable ‘is Kinematic’
- In Box Collider, enable ‘is Trigger’
- Destroy gameObject
- Check whether the correct colored cube was hit by comparing tags
- Create Tags (red and blue)
- Add Tags to BeatCube Left and Right Prefab, as well as ‘Light’ in Sabers
- Compare Tags in OnTrigger

### Add Music

- Download track ‘fat rat’ (see above)
- Make empty object ‘Music’ and drag in the sound file
- Enable ‘Loop’ and ‘Play on Awake’ on Audio Source components
- Make Cube Spawning musical: track BPM = 105. Thus, make spawning interval 60/105 = 0.571. Adjust spawning probability.

### Build, Test and Submit
- compiled .apk
- video walkthrough
- readme.txt

&nbsp;

## Extra Tasks

Some ideas can be found [here](https://www.youtube.com/watch?v=gh4k0Q1Pl7E)
- Make cubes sometimes swap colors and destroy missed cubes (0.5 points)
- Add lighting effects with glow, fog and postprocessing. (0.5 points)
- Add cutting direction, e.g., by using the velocity (1 point)
- Add your own feature including explanation in the text file (up to 1 point each)

&nbsp;

## Background Material

Here is an [interview with Beat Saber’s developer Jan Ilavsky](https://www.youtube.com/watch?v=XCongVPDWCM).

&nbsp;

## Credits

Some of material is inspired by [this tutorial](https://www.youtube.com/watch?v=gh4k0Q1Pl7E). You can use this video for more ideas. Note that versions are outdated and instructions might not be up-to-date.

Another great tutorial can be [found here](https://www.raywenderlich.com/4912095-veggie-saber-introduction-to-unity-development-with-the-oculus-quest).
