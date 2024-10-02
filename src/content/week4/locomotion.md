---
date: '2024-04-06T00:00:00.000Z'
description: ''
image: /img/week1/temp-clouds.jpg
title: Locomotion
week: 4
orderInWeek: 4
---

<script>
import VideoEmbed from '$lib/VideoEmbed.svelte'
import VideoPlayer from '$lib/VideoPlayer.svelte'
</script>

Locomotion is one of the critical challenges of good VR design. If done incorrectly, users can become motion sick which renders the app unusable. Besides, VR playing areas are typically smaller than the virtual game world, such that there needs to be a mechanism to dissociate physical from virtual locomotion.

Some techniques aim for most natural movement, e.g., by treadmills or redirected walking. Other methods are focused on usability, such as world scaling, which is excellent for design tasks at different scales (see "World Scaling" on this page). And some techniques are informed by a narrative goal where fantastic interactions can enhance fictional embodiment (see "Scrunch" on this page).

Here you can find a literature overview on [VR locomotion studies](https://www.mdpi.com/2414-4088/1/4/24). Another excellent resource on motion sickness and VR design are [Jason Jerald’s VR Book](https://thevrbook.net/).

 

![unified model](/img/week4/UnifiedModel.png)

FIGURE 1: A unified model of motion perception and motion sickness, see [Jason Jerald's VR Book](https://thevrbook.net/).

The [broken escalator phenomenon](https://en.wikipedia.org/wiki/Broken_escalator_phenomenon) illustrates how complex the relation between expectation, sensory input and dizzyness is.

 

### Examples

There are many extra techniques for locomotion, such as redirected walking and treadmills. Here, we focus on what is available in a standard VR headset. An example of the design considerations is shown in Half-Life: Alyx - Locomotion Deep Dive.

<VideoEmbed youtube="TX58AbJq-xo"></VideoEmbed>

 

### Vignette Movement

Based on [Combating VR sickness through subtle dynamic field-of-view modification](https://ieeexplore.ieee.org/document/7460053) Only the first 2 minutes shows the vignette. The remaining tutorial is out-dated.

<VideoEmbed youtube="HZf2dp_sn-8"></VideoEmbed>

 

### Rest Frames

Having a rest frame can help to reduce motion sickness, see for example Visually-Induced Motion Sickness Reduction via Static and Dynamic Rest Frames.

![rest frames](/img/week4/RestFrames.png)

FIGURE 2: Real-World Stabilized Cues - Rest Frames from CCP Games, EVE Valkyrie, see [Jason Jerald's VR Book](https://thevrbook.net/).

 

### Non-Euclidean Worlds

[Tea for God](https://www.meta.com/en-gb/experiences/tea-for-god-demo/3762343440541585)

<VideoEmbed youtube="PtnydnvOwGw"></VideoEmbed>

 

### Climbing

[National Geographic VR](https://www.meta.com/en-gb/experiences/national-geographic-explore-vr/2046607608728563/)

<VideoPlayer videoUrl="https://www.dropbox.com/scl/fi/388of3qs0xknbom0syzvx/com.forcefieldxr.explorevr-20201124-093540.mp4?rlkey=fn67jpwas8ulbgrxf0b2qxemq&dl=0&raw=1#t=30"></VideoPlayer>

 

### Paddling

[National Geographic VR](https://www.meta.com/en-gb/experiences/national-geographic-explore-vr/2046607608728563/)

<VideoPlayer videoUrl="https://www.dropbox.com/scl/fi/k71pmgw643z3m8sqw7qtg/com.forcefieldxr.explorevr-20201124-094342.mp4?rlkey=hmzo5o7fo3nbl1tej8lzyb67k&dl=0&raw=1#t=60"></VideoPlayer>

 

### World Scaling

[Open Brush](https://www.meta.com/en-gb/experiences/open-brush-3d-painting/3600360710032222/) (video from the predecessor: [Tilt Brush](https://www.meta.com/en-gb/experiences/tilt-brush/2322529091093901/))

<VideoPlayer videoUrl="https://www.dropbox.com/scl/fi/jvouyleteqxhui1ya5sak/com.google.tiltbrush-20201124-095135.mp4?rlkey=bg4yjyrfqe7ngwcodtxv27tji&dl=0&raw=1#t=30"></VideoPlayer>

 

### Slingshot Teleport and Arm Swinging

[Half + Half](https://www.meta.com/en-gb/experiences/half-half/2035353573194060/)

<VideoPlayer videoUrl="https://www.dropbox.com/scl/fi/onydv8he1enho62x5jvt0/com.normalvr.halfandhalf-20201124-092912.mp4?rlkey=xbzd0br9e7owi8ndlrkftndkl&dl=0&raw=1#t=180"></VideoPlayer>

 

### Scrunch Movement

[The Under Presents](https://www.meta.com/en-gb/experiences/the-under-presents/1917371471713228/)

<VideoPlayer videoUrl="https://www.dropbox.com/scl/fi/td8gopjmk1z5p9apqho9c/com.TenderClaws.TheUnderPresents.Quest-20201124-094643.mp4?rlkey=x3nb5grakawhf7s8czaqoaxu3&dl=0&raw=1#t=150"></VideoPlayer>

 

### Hand Walking

[Three Totally Creative Uses of Quest Hand-tracking](https://www.roadtovr.com/creative-uses-oculus-quest-hand-tracking-daniel-beauchamp/)

<VideoPlayer videoUrl="https://www.dropbox.com/scl/fi/cfb4yz11ydnt8rv1uzpbn/ShadyBronzeInvisiblerail.mp4?rlkey=zak4bm4wt2rre3z5s40p39g3n&dl=0&raw=1"></VideoPlayer>
