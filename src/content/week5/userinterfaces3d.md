---
title: 3D User Interfaces
date: 2024-05-03
description: ''
image: /img/week1/temp-clouds.jpg
---

<script>import VideoEmbed from '$lib/VideoEmbed.svelte'</script>

## User Interfaces in Unity

&nbsp;

## Canvas Interactions

<VideoEmbed youtube="W6HbK0urkKc"></VideoEmbed>

&nbsp;

## Diegetic Interactions

_**Diegetic = something that exists in the narrative world of the game**_

From greek *"diegesis"*. Think *"In-world user interface"*.

*Diegetic vs Non-diegetic* gets very much into semantics in some cases, especially in VR, so overall dont worry too much about it.

&nbsp;

Good test questions are:

"Can the Player Character see the UI and do the action?"

”Can a Non-Player Character (NPC) see the UI and do the action?”

&nbsp;

Specific examples:

**3D drawer that needs to be dragged open**

--> *diegetic* because lets say the player controls a robot character (Player Character) then that robot will be grabbing the handle and moving the drawer

**In-game pause menu (VR & 2D)** "resume, settings, exit" etc

--> *non-diegetic* flat UI that has nothing to with the story

**In-game HUD in 2D games** (health, minimap, mana, mini inventory, spells etc)

--> *non-diegetic*

**floating in-game HUD in VR games** (health, minimap, mana, mini inventory, spells etc)

--> *non-diegetic* if it's "just there" for the user without any reason why & how the player character would see it

**watch on Player Characters wrist** tells armor status, health etc

--> *diegetic* usually

**glowing in-world path/trail that helps wayfinding**

--> *diegetic* if there's a story explanation (a kind wizard created it to guide the hero)

--> *non-diegetic* if "it's just there" (game developer just put it there without a story reason backing it)

&nbsp;

Couple links:

- [https://tvtropes.org/pmwiki/pmwiki.php/Main/DiegeticInterface](https://tvtropes.org/pmwiki/pmwiki.php/Main/DiegeticInterface)
- [https://ux.stackexchange.com/questions/77126/differences-between-non-diegetic-spatial-meta-and-diegetic-user-interfaces](https://ux.stackexchange.com/questions/77126/differences-between-non-diegetic-spatial-meta-and-diegetic-user-interfaces)

&nbsp;

See the video below for one example of how to implement diegetic door, lever and drawer using Joints. Drawer part starts around 8:30 but recommend at least skimming most of the video for context.

<VideoEmbed youtube="bYS35_hC6B0"></VideoEmbed>

&nbsp;

&nbsp;

Below a couple more videos of another approach how to implement diegetic UI. These videos miss some scripts and context from before so might be tricky to implement based on these.

&nbsp;

### Example Drawer Movement

&nbsp;

<VideoEmbed youtube="lYNV9up-ZJA"></VideoEmbed>

&nbsp;

### Example Door Movement

<VideoEmbed youtube="VgS8fg_cNcs"></VideoEmbed>

&nbsp;

### Example Button Switch

<VideoEmbed youtube="bW8HO7Rdf2s"></VideoEmbed>

&nbsp;

## Extra Material

- [Why you should use code to animate your UI in Unity](https://www.youtube.com/watch?v=Ll3yujn9GVQ)
