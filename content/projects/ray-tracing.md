+++
title = "Ray Tracing"
date = 2019-01-01
description = "C++ ray tracing projects covering ray casting, path tracing, BRDF reflection, transmission, image-based lighting, and depth of field."
tags = ["C++", "Rendering", "Ray Tracing"]
showFeaturedImage = false
tech = ["C++", "Ray Tracing", "Path Tracing", "Rendering"]
+++

## Overview

This page collects several C++ rendering projects that build from ray casting toward a fuller ray tracer, including path tracing, reflection BRDFs, transmission, image-based lighting, and depth of field.

## Ray Casting

I implemented ray casting and a spatial data structure as a first step toward a full featured ray tracer.

<div class="portfolio-gallery">
  <div class="portfolio-media-placeholder">Add image: /projects/ray-tracing/images/ray-casting-01.png</div>
  <div class="portfolio-media-placeholder">Add image: /projects/ray-tracing/images/ray-casting-02.png</div>
  <div class="portfolio-media-placeholder">Add image: /projects/ray-tracing/images/ray-casting-03.png</div>
</div>

## Path Tracing

Path tracing simulates how light interacts with objects in a virtual world. The path of light is traced by emitting rays into the scene and tracking them as they bounce between objects. As a ray of light hits a surface, it bounces and creates new rays of light. Therefore, a path can consist of a number of rays. By collecting all rays along a path, the contributions of a light source and the surfaces along the path can be calculated to produce the final image.

For implicit light connection, I extended the ray path until I found a light and returned an accumulated color record.

For explicit light connection, I randomly chose a light and checked whether that light could hit the surface.

<div class="portfolio-gallery">
  <div class="portfolio-media-placeholder">Add image: /projects/ray-tracing/images/path-tracing-implicit.png</div>
  <div class="portfolio-media-placeholder">Add image: /projects/ray-tracing/images/path-tracing-explicit.png</div>
  <div class="portfolio-media-placeholder">Add image: /projects/ray-tracing/images/path-tracing-mis.png</div>
</div>

## Reflection BRDF

To allow surfaces over a vast range of roughness and shininess to reflect their environment, I improved the basic diffuse-only BRDF from a previous project to include the full microfacet BRDF.

<div class="portfolio-gallery">
  <div class="portfolio-media-placeholder">Add image: /projects/ray-tracing/images/reflection-brdf.png</div>
</div>

## Transmission

To allow light to pass through objects, I improved the reflective microfacet BRDF from the previous project to include transmission across the microfacet surface and through the objects.

<div class="portfolio-gallery">
  <div class="portfolio-media-placeholder">Add image: /projects/ray-tracing/images/transmission.png</div>
</div>

## Image Based Lighting And Depth Of Field

In this project, I improved the BRDF sampling from the previous project by introducing an image-based environment for direct illumination integration. I also added more parameters to the camera object for depth of field.

<div class="portfolio-gallery">
  <div class="portfolio-media-placeholder">Add image: /projects/ray-tracing/images/image-based-lighting.png</div>
  <div class="portfolio-media-placeholder">Add image: /projects/ray-tracing/images/depth-of-field.png</div>
</div>
