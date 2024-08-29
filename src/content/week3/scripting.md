---
title: Scripting
date: 2024-03-03
description: ''
image: /img/week1/temp-clouds.jpg
---

<script>import VideoEmbed from '$lib/VideoEmbed.svelte'</script>

# Scripting

## Script

Scripting in Unity is a powerful method to implement complex behaviour in your experience. In the following, we will introduce a first set of useful techniques to add new functionalities. Here is an overview.


### Scripted Movement

<VideoEmbed youtube="q5KGmm_4oy4"></VideoEmbed>

### Scripted Instantiation

<VideoEmbed youtube="H44iqbOZblg"></VideoEmbed>

https://docs.unity3d.com/Manual/InstantiatingPrefabs.html

### Repeating Invokes

<VideoEmbed youtube="tdzXXvjz2As"></VideoEmbed>

https://docs.unity3d.com/ScriptReference/MonoBehaviour.InvokeRepeating.html

### Scripted Random

<VideoEmbed youtube="yDTXPWOOWJs"></VideoEmbed>

https://docs.unity3d.com/ScriptReference/Random.Range.html

### Scripted Set Material

<VideoEmbed youtube="aCyy1gIKfe0"></VideoEmbed>

https://docs.unity3d.com/ScriptReference/Renderer-material.html

### Trigger and Destroy

<VideoEmbed youtube="GmxdZIlofrM"></VideoEmbed>

https://docs.unity3d.com/ScriptReference/Collider.OnTriggerEnter.html https://docs.unity3d.com/ScriptReference/Object.Destroy.html

### Tags

<VideoEmbed youtube="Ygbqu1UPSA8"></VideoEmbed>

https://docs.unity3d.com/Manual/Tags.html

### Trigger vs Collider

<VideoEmbed youtube="m0fjrQkaES4"></VideoEmbed>

### On Collisions and Triggers

Collisions and triggers are two native mechanics in Unity to handle interactions between objects in Unity. Both events require specific components such as colliders and rigidbodies to activate correctly. Please refer to the manual for an overview of combinations: https://docs.unity3d.com/Manual/CollidersOverview.html.

## Checklist

Here is a list of important classes in Unity.

Are you familiar with those terms?

- Vector3 and Rotate
- Transform
- GameObject
- Rigidbody
- GetComponent
- Instantiate
- InvokeRepeating

And here are important functions in the MonoBehavior

- Start
- Update
- OnTriggerEnter
- OnCollisionEnter
- Destroy

