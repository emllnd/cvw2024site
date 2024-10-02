---
date: '2024-05-06T00:00:00.000Z'
description: ''
image: /img/week1/temp-clouds.jpg
title: Avatar & Mirror
week: 5
orderInWeek: 4
---

<script>import VideoEmbed from '$lib/VideoEmbed.svelte'</script>

## Simple avatar and mirror

To achieve a greater sense of presence, a simple but quite powerful technique is having the player see their avatar representation in a virtual mirror.

![mirrorrr](/img/week5/mirror-example.png)

*May not look like much in a still image, but feels great in motion in VR.*

 

### Add Avatar (Head + Controller models)

Add a simple head model under Main Camera within the XR Rig hierarchy. You can use this [Robot Kyle head .obj geometry](https://www.dropbox.com/scl/fi/c3pua0bp1gj67taexrigk/RobotKyleHead.obj?rlkey=rq9ex9nzmb99yuk0ijnp4iahn\&dl=1) or create or find your own. Rigid model is fine, no animation or bones or blendshapes needed. Keep it simple.

The provided asset is from the [Robot Kyle demo asset by Unity](https://assetstore.unity.com/packages/3d/characters/robots/robot-kyle-urp-4696) and subject to the Unity Asset Store agreements.

Make sure you have some form of representation for where the hands are as well. Provided controller models from e.g. XR Interaction Setup are fine but you are free to make your own. These should be under LeftController and RightController.

 

### Add Mirror

NOTE: in 2024 we are not using the full Robot Kyle IK rig seen on the video below. When watching, concentrate on the setup of the Camera, Render Texture and Material necessary to do a simple virtual "mirror". Your scenes do not need to have a robot torso or arms, it is enough to just do a floating head + floating controller models.

<VideoEmbed youtube="wnQ8khj_fVA"></VideoEmbed>

 

Another tutorial that illustrates the same setup. Far from a "TRUE MIRROR" though :)

<VideoEmbed youtube="U9yTnRuU--A"></VideoEmbed>

 
