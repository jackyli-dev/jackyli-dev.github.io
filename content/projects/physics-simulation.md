+++
title = "Physics Simulation"
date = 2019-01-01
description = "Physics simulation experiments covering rigid body collision detection and a chaotic double pendulum."
tags = ["C++", "Python", "Physics"]
showFeaturedImage = false
tech = ["C++", "Python", "Physics Simulation", "Collision Detection"]
+++

## Overview

This page collects physics simulation projects, including a rigid body collision simulation framework and a double pendulum system.

## Rigid Body Collision Simulation With ISA-GJK And SAT

I used a Dynamic AABB Tree in broad phase collision detection, eliminating unnecessary contact checks on the fly. Then I applied Incremental Separating-Axis GJK, the Gilbert-Johnson-Keerthi distance algorithm, as the narrow phase collision detection method for shallow penetration cases, and SAT, the Separating Axis Theorem, for deep penetration cases to query exact contact information and results.

Lastly, I used Sequential Impulse as the collision solver to calculate efficient and accurate enough contact results. Semi-implicit Euler integration is used in the simulation framework because of stability, performance, and implementation flexibility.

<video controls>
  <source src="/projects/physics-simulation/videos/TSoV_MFWvib_576.mp4" type="video/mp4">
</video>

## Double Pendulum

In the area of dynamical systems, a double pendulum is a pendulum with another pendulum attached to its end. It is a simple physical system that exhibits rich dynamic behavior with strong sensitivity to initial conditions. The motion of a double pendulum is governed by a set of coupled ordinary differential equations and is chaotic.

<video controls>
  <source src="/projects/physics-simulation/videos/8hBIEo7oZFh_360.mp4" type="video/mp4">
</video>

## Image gallery

<div class="portfolio-gallery">
  <figure>
    <img src="/projects/physics-simulation/images/bfe49d8a-a85b-4807-b29a-0b84ce9c3ee1_rw_1920.png" alt="Double Pendulum screenshot">
  </figure>
</div>