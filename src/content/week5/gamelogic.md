---
title: Game Logic
date: 2024-05-04
description: ''
image: /img/week1/temp-clouds.jpg
---

<script>import VideoEmbed from '$lib/VideoEmbed.svelte'</script>

## Game Logic Architecture

Implementing game logics is can involve highly complex decisions and depends on many circumstances such as scalability and portability. Monolithic game managers which handle all game logic internally might be easy to start but can become quickly intractable. It is important to allow flexible structures, where components can be easily connected and maintain transparency at the same time.

## Unity Events

Unity Events are one great mechanic to handle actions and perpetuate the effects through out the game. Here a quick overview on [events in Unity](https://www.youtube.com/watch?v=AGGmnVIhHvc&t=27s).

## Scriptable Objects

Read the introduction to [Three ways to architect your game with ScriptableObjects](https://unity.com/how-to/architect-game-code-scriptable-objects).

Unfortunately the code examples embedded to the above article are nowadays broken. You can download the article as PDF with included .cs code samples working in [this ZIP package](https://www.dropbox.com/scl/fi/4h1ohjr45wtln759hx7hb/w5-gamelogic-scriptableobjects.zip?rlkey=8chtah20nol70x1h0bxlnjwsy&dl=1).

Copy those scripts from the ZIP into your project:

```
FloatVariable.cs
GameEvent.cs
GameEventListener.cs
```

&nbsp;

## Example Game Logic

### Basic Unity Event

<VideoEmbed youtube="2f0takU8FEg"></VideoEmbed>

### Scriptable Object Float

<VideoEmbed youtube="dnXb-G6_PJ4"></VideoEmbed>

### Game Event

<VideoEmbed youtube="Fy3L81C86cs"></VideoEmbed>

### Chaining Events

<VideoEmbed youtube="GJ0SX9RiHbk"></VideoEmbed>

### Trigger Volume

<VideoEmbed youtube="8rS0i4037bg"></VideoEmbed>
