---
date: '2024-10-06T00:00:00.000Z'
description: ''
image: /img/week1/temp-clouds.jpg
title: A6 Challenging - Multiplayer
week: 6
orderInWeek: 10
---

## Assignment 6 Challenging Option: Multiplayer

Do either this, or [Assignment 6 Relaxed](/week6/assignment6-relaxed). No need to do both. If you are doing a bigger project over Week 5 & 6 there's no need to do either of these.

 

## Multiplayer Escape Room in VR

### Goals

- Add multiplayer to escape room experience
- Synchronize state across network
- Synchronous user interfaces and interactions

 

### Solution

Here you can find the [solution app](https://www.dropbox.com/scl/fi/eb9b0vd0xnkrc2pd7fpo8/Normcore.apk?rlkey=4hf820ltelbok5s1sddgg7sue&dl=1). Download the .apk file and test it in the Quest for reference. It is advisable to test the app with 2 or more people at the same time.

 

### Additional Material

- [Scripts](https://www.dropbox.com/scl/fi/3sde85aidu0ei7kui34z9/Scripts.zip?rlkey=fbh87da00ini6bu039hrn4llz&dl=1)

 

_**Point List (max 5 points)**_

- Add multiplayer connection (1 point)
- Synchronize light and timer (1 point)
- Synchronize at least one user interactions (1 point)
- Extra task (2 point)

 

## Multiplayer VR

For solving this assignment, you need a good internet connection. On-campus internet might be blocking the connection. However, aalto open works. Some demos look like they use the Oculus link; however, all material from this week was created with two clients, one on the Quest and one on desktop PC/Mac. Both devices need an internet connection.

 

### Avatar

- Add Avatar
- Add Mirror
- Add Hand Animation (optional)
- Add Voice Mod (optional)

 

### Multiplayer

- Setup Normcore
- Connect XR Origin to Realtime+VRPlayer prefab
- Syncronized Interactables (use RealtimeView and RealtimeTransform)
- Add XRMultiplayer and connect RayInteractor with SelectEvent to RequestOwnership
- Add Custom Avatar or Robot Avatar
- Add Mouth Animation

 

### DataSynchronization

- Install Naughty Attributes
- Change GameEvents and GameEventListener
- Add FloatSync mechanism
- Add DoubleModel and create time syncronization

 

### Multiplayer Escape Room

- Add RealTime Transform to interactable objects (Balls and Card)
- Add RealTime Transform to drawers and doors
- Add Syncronized Timer
- Add Synchronized Light

 

### Extra Tasks

- Add voice modification for multiplayer (1 point)
- Add [multiplayer drawing mechanic](https://normcore.io/documentation/guides/creating-a-multiplayer-drawing-app.html) (1 point)
- Add [Using AR as a Spectator View for Your XR App](https://normcore.io/documentation/guides/using-ar-as-a-spectator-view.html) - only feasible if you now mobile development (2 point)
- Add collaborative puzzle, which needs at least two players to solve (1-2 points)
- Add synchronous music track by using the global timer (1 point)
- Invent your own multiplayer mechanic (1-2 point)
