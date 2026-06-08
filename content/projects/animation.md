+++
title = "Animation"
date = 2019-01-01
description = "C++ and OpenGL animation projects covering keyframe interpolation, path following, inverse kinematics, and cloth-like mechanics."
tags = ["C++", "OpenGL", "Animation"]
showFeaturedImage = false
tech = ["C++", "OpenGL", "Animation", "Simulation"]
+++

## Overview

This page collects several C++ and OpenGL animation projects, including keyframe interpolation, path following, inverse kinematics, and a cloth-like mechanics simulation.

## Keyframe Animation

In this project, I read several animations from animation files and implemented keyframe interpolation to display these animations. I also implemented a quaternion class for the required calculations.

<video controls>
  <source src="/projects/animation/videos/FLJX_Gi4jDg_576.mp4" type="video/mp4">
</video>

## Path Following

In this project, I demonstrated control of a walking animation along a curve. By using a uniform B-spline piecewise cubic polynomial curve to interpolate the control points, I created paths on a ground plane with multiple segments.

<video controls>
  <source src="/projects/animation/videos/4uMZ9YEwfcE_576.mp4" type="video/mp4">
</video>

## Inverse Kinematics Animation Control

In this project, I implemented inverse kinematics animation control using a CCD algorithm. From an animation model, I chose a chain of four bones ending with an end-effector, used a T-pose as the starting point, created a sphere to represent the goal point, and used linear interpolation to show motion from the starting pose to the goal-touching pose.

<video controls>
  <source src="/projects/animation/videos/FjrKLZPjCFi_576.mp4" type="video/mp4">
</video>

## Mechanics

In this project, I implemented a physically based cloth-like simulation: a 2D grid arrangement of points connected by springs. The cloth can fall freely and drape interactively over scene objects.

<video controls>
  <source src="/projects/animation/videos/NRRR9mcEhqd_576.mp4" type="video/mp4">
</video>