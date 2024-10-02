---
date: '2024-02-03T00:00:00.000Z'
description: ''
image: /img/week1/temp-clouds.jpg
title: MQDH Install Apps
week: 2
orderInWeek: 2
---

Using the Meta Quest Developer Hub (MQDH) to install .apk app packages to the Quest headset.

## Prerequisites

Make sure you have [MQDH installed and the Quest connection ready](/week2/gettingstarted-quest-developer/)

## Install apps from .apk

When you have MQDH running and the Quest connected with a cable and USB setup recognized OK, you can start the installation by just dragging and dropping the .apk file from Finder(mac)/Explorer(windows) to the Apps section of the Device Manager with MQDH.

![](/img/additional/mqdh-install-apk1.png)

![](/img/additional/mqdh-install-apk2.png)

Apps packaged as .apk can also be installed via the `adb` Terminal utility (see [here for more info](https://developer.oculus.com/documentation/native/android/ts-adb/)) or SideQuest (see [here for more info](https://www.uploadvr.com/sideloading-quest-how-to/)) and you are free to do that.

 

## For testing manual .apk install

* Download the [Beat Saber assignment reference](https://dl.dropboxusercontent.com/s/gfe7v0vynfopti6/CVW_BeatSaber_20210904.apk?dl=0)
* Connect Quest to PC.
* Open MQDH and install .apk to Quest.
* Enter Quest; open program under Apps->Unknown Sources-> CodingVirtualWorlds\_BeatSaber
* Play away!
