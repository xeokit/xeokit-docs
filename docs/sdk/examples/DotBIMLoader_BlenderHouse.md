---
sidebar_position: 1
tags:
  - .bim
  - loaders
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import XeoHtmlFileViewer from '@site/src/components/examples/XeoHtmlFileViewer';
import XeoInteractiveExample from '@site/src/components/examples/XeoInteractiveExample';
import XeoSourceDownloadButton from '@site/src/components/examples/XeoSourceDownloadButton'
import XeoOpenInNewTabButton from '@site/src/components/examples/XeoOpenInNewTabButton'
import { CodePen, Gist } from 'mdx-embed';

# .bim loader

## Intro

This TypeScript file demonstrates how to load and display a 3D BIM (Building Information Modeling) model using the XeoKit SDK. The example specifically shows:


1. Setting up a complete XeoKit viewer with necessary components:

- Scene for managing geometry and materials
- Data store for semantic information
- WebGL renderer for graphics processing
- Camera configuration with proper orientation (Z-axis up)

2. Loading a .BIM format model (BlenderHouse) from a remote URL using:

- DotBIMLoader to parse the BIM file format
- SceneModel to hold the 3D geometry
- DataModel to store associated metadata

3. Implementation of camera controls for interactive navigation

This example demonstrates XeoKit's component-based architecture and the separation of concerns between geometry rendering and semantic data management, which is essential for working with BIM models.

## Interactive Demo


<CodePen codePenId="KwwwrRN" />

<XeoOpenInNewTabButton filePath="/home/dabomian/Dev/creoox/xeokit-docs/content-generators/sdk/inputs/DotBIMLoader_BlenderHouse/main.ts" />

<BrowserOnly>
{() => (
 <XeoInteractiveExample filePath="/home/dabomian/Dev/creoox/xeokit-docs/content-generators/sdk/inputs/DotBIMLoader_BlenderHouse/main.ts" />
)}
</BrowserOnly>

<XeoSourceDownloadButton filePath="/home/dabomian/Dev/creoox/xeokit-docs/content-generators/sdk/inputs/DotBIMLoader_BlenderHouse/main.ts" />

```ts

import * as xeokit from "@xeokit/sdk"

const model = "https://sos-ch-gva-2.exo.io/creoox-public/xeokit-sdk/models/BlenderHouse/dotbim/model.bim"

// Create a DotBIMLoader to load .BIM files
const dotBIMLoader = new xeokit.dotbim.DotBIMLoader();

// Create a Scene to hold geometry and materials
const scene: xeokit.scene.Scene = new xeokit.scene.Scene();

// Create a Data to hold semantic data
const data = new xeokit.data.Data();

// Create a WebGLRenderer to use the browser's WebGL graphics API for rendering
const renderer = new xeokit.webglrenderer.WebGLRenderer({});

// Create a Viewer that will use the WebGLRenderer to draw the Scene
const viewer = new xeokit.viewer.Viewer({
  id: "demoViewer",
  scene,

  renderer
});

// Give the Viewer a single View to render the Scene in our HTML canvas element
const view = viewer.createView({
  id: "demoView",
  elementId: "demoCanvas"
});

if (view instanceof xeokit.core.SDKError) {
  throw new Error(`Error creating View: ${view.message}`);
}

// Configure the View's World-space coordinate axis to make the +Z axis "up"
view.camera.worldAxis = [
  1, 0, 0, // Right +X
  0, 0, 1, // Up +Z
  0, -1, 0 // Forward -Y
];

// Arrange the View's Camera within our +Z "up" coordinate system
view.camera.eye = [11.276311451067942, 16.914467176601914, 7.399026975905038];
view.camera.look = [0, 0, 0];
view.camera.up = [-0.18971864040782152, -0.28457796061173224, 0.9396926209223285];


// Add a CameraControl to interactively control the View's Camera with keyboard,
// mouse and touch input
new xeokit.cameracontrol.CameraControl(view, {});

// Create a SceneModel to hold our model's geometry and materials
const sceneModel = scene.createModel({
  id: "demoModel"
});

if (sceneModel instanceof xeokit.core.SDKError) {
  throw new Error(`Error creating SceneModel: ${sceneModel.message}`);
}


// Create a DataModel to hold semantic data for our model
const dataModel = data.createModel({
  id: "demoModel"
});

if (dataModel instanceof xeokit.core.SDKError) {
  throw new Error(`Error creating DataModel: ${dataModel.message}`);
}

fetch(model).then(response => {
  response
    .json()
    .then(fileData => {
      dotBIMLoader.load({
        fileData,
        sceneModel,
        dataModel
      }).then(() => {
        console.log("DotBIMLoader loaded .BIM file");
        dataModel.build();
        sceneModel.build();
      }).catch(message => {
        console.log(`Error loading .BIM: ${message}`);
        console.error(`Error loading .BIM: ${message}`);
      });
    });
});


```


## Other

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis tellus eu urna fringilla, nec aliquam urna mollis. Nunc orci diam, viverra et ante in, volutpat aliquet sapien. Suspendisse ullamcorper sit amet urna ac vulputate. Cras eu magna rutrum, lobortis urna eget, ultrices arcu. Donec sagittis, massa eu vestibulum faucibus, eros metus tempor nulla, eget viverra mauris velit eu orci. Cras eu mi eu tellus tempus fringilla a nec nunc. Fusce blandit consectetur leo, ut eleifend elit. Proin nec congue lectus, eget efficitur neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum a mi in nulla pellentesque interdum. Vivamus imperdiet pharetra nisl a laoreet.
