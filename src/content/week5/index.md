---
title: Week 5
date: 2024-05-01
description: ''
image: /img/week1/temp-clouds.jpg
---

<script>
import VideoEmbed from '$lib/VideoEmbed.svelte';
import VideoPlayer from '$lib/VideoPlayer.svelte';
</script>

The learning goals for Week 5 are

- Learn world building tools for prototyping
- Learn canvas and interaction UIs
- Learn hand and avatar animation
- Make an escape room experience

&nbsp;

### 3D User Interfaces

With the continuing development of affordable immersive virtual reality (VR) systems, there is now a growing market for consumer content. The current form of consumer systems is not dissimilar to the lab-based VR systems of the past 30 years: the primary input mechanism is a head-tracked display and one or two tracked hands with buttons and joysticks on hand-held controllers. Over those 30 years, a very diverse academic literature has emerged that covers design and ergonomics of 3D user interfaces (3DUIs). However, the growing consumer market has engaged a very broad range of creatives that have built a very diverse set of designs. Sometimes these designs adopt findings from the academic literature, but other times they experiment with completely novel or counter-intuitive mechanisms. Find further details in [Directions for 3D User Interface Research from Consumer VR Games](https://ieeexplore.ieee.org/document/9523846).

&nbsp;

## Hand Tracking

The latest VR devices such as the Oculus Quest offer hand tracking functionalities allowing user to interact without the use of controllers. The following video gives an overview on the design considerations on this input modality.

<VideoEmbed youtube="or5M01Pcy5U"></VideoEmbed>

Similar to other hand-based input mechanism, make sure that your experience avoid common design mistakes:

- Reducing gorilla arm
- Avoid repetitive strain
- Consider ergonomic cost

For this week’s assignment, we do not use the hand tracking as the development difficulty is considerably higher.

&nbsp;

### Examples

Hand Space UI

[Tilt Brush](https://www.oculus.com/experiences/quest/2322529091093901/)

<VideoPlayer videoUrl="https://www.dropbox.com/scl/fi/86mlh567h7ehnp5yphnkn/com.google.tiltbrush-20201124-095135.mp4?rlkey=6z8kptxlwta5j5cgm86uilt8o&dl=0&e=0&raw=1#t=60"></VideoPlayer>

&nbsp;

**Hand Tracking UI**

Oculus Quest Menu

<VideoPlayer videoUrl="https://www.dropbox.com/s/td8jkfo2e7bq1xu/com.oculus.vrshell-20201124-090311.mp4?dl=0&raw=1"></VideoPlayer>

&nbsp;

**Proprioception**

[Beat Saber](https://www.oculus.com/experiences/quest/1758986534231171/)

<VideoPlayer videoUrl="https://www.dropbox.com/scl/fi/v9t1u3n7ig600lz342qn4/com.beatgames.beatsaber-20201124-092629.mp4?rlkey=xrebfu9kljuno3fwe2we1fcvm&dl=0&e=0&raw=1"></VideoPlayer>

&nbsp;

**Diegetic UI**

[Job Simulator](https://www.oculus.com/experiences/quest/3235570703151406/)

<VideoPlayer videoUrl="https://www.dropbox.com/s/3lvacm1761wlulc/com.owlchemylabs.jobsimulator-20201124-092149.mp4?dl=0&e=0&raw=1"></VideoPlayer>

&nbsp;

**Throwing Hand**

[Three Totally Creative Uses of Quest Hand-tracking](https://www.roadtovr.com/creative-uses-oculus-quest-hand-tracking-daniel-beauchamp/)

<VideoPlayer videoUrl="https://www.dropbox.com/scl/fi/jrat1p2v84hkblm50zbw1/WellgroomedCloseDoe.mp4?rlkey=icdmx9vbdfkrjzmc41nyx35kf&e=0&dl=0&raw=1"></VideoPlayer>

&nbsp;

**Gaze-based UI**

[SightLine: The Chair](https://store.steampowered.com/app/412360/SightLineVR/)

<VideoEmbed youtube="OWl0x4ZCn5I"></VideoEmbed>
