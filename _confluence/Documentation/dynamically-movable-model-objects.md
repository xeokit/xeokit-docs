# Dynamically Movable Model Objects

- [Introduction](#introduction)
- [New SDK Components](#new-sdk-components)
-   [SceneModelMesh](#scenemodelmesh)
-   [SceneModelTransform](#scenemodeltransform)
- [Considerations](#considerations)
-   [Creating transforms for moving objects](#creating-transforms-for-moving-objects)
-   [Precision limits](#precision-limits)
- [Usage](#usage)

# Introduction

This new feature enhances xeokit's high-performance `SceneModel` model representation by introducing dynamic transform hierarchies.

# New SDK Components

## SceneModelMesh

- Binds a geometry and transform to a single `SceneModelEntity`.
- A `SceneModelEntity` can have multiple `SceneModelMeshes`.
- Created using `SceneModel#createMesh`.
- Stored in `SceneModel#meshes`.
- Referenced by `SceneModelEntity#meshes`.

## SceneModelTransform

- Dynamic transform that can be animated.
- Can be connected into hierarchies.
- Created using `SceneModel#createTransform`.
- Stored in `SceneModel#transforms`.
- Referenced by `SceneModelMesh#transform`.

# Considerations

## Creating transforms for moving objects

xeokit prioritizes high performance for large models, which involves maximizing the number of objects that can fit into memory. Transforms are components that allow objects to be dynamically movable. However, xeokit does not automatically create dynamic transforms unless explicitly specified to avoid unnecessary memory usage.

To make objects dynamically movable, you need to manually create Transforms for the objects you want to move.

Currently, xeokit does not automatically create Transforms for objects loaded from model files. However, this feature will be added in future releases.

## Precision limits

When a `SceneModelMesh` has an `origin`, the `position` of its `SceneModelTransform` will be relative to that `origin`. To ensure coordinate accuracy, the translation distance of the `position` must be within the maximum magnitude that can be expressed by a single-precision floating-point number. If the translation is too large, rounding jitter may occur during rendering.

If you need to move a `SceneModel` over long distances within xeokit's World coordinate system, use the `SceneModel.position` property. This property can handle double-precision magnitudes.

# Usage

The following example demonstrates how to create a `SceneModel` that enables dynamic animation of object position, size, and orientation.

Rather than defining translation, scale, and rotation for each mesh individually, we can define these properties using `SceneModelTransform` components, which are then connected to the meshes. Additionally, we can organize our `SceneModelTransforms` into a hierarchy.

Once we’ve built and finalized our `SceneModel`, we can then get the `SceneModelTransforms` from the `SceneModel` using their IDs, and then animate them.

```
import {Viewer, SceneModel} from "../../dist/xeokit-sdk.es.js";

//------------------------------------------------------------------------------------------------------------------
// Create a Viewer and arrange the camera
//------------------------------------------------------------------------------------------------------------------

const viewer = new Viewer({
    canvasId: "myCanvas",
    transparent: true
});

viewer.scene.camera.eye = [-21.80, 4.01, 6.56];
viewer.scene.camera.look = [0, -5.75, 0];
viewer.scene.camera.up = [0.37, 0.91, -0.11];

//--------------------------------------------------------
// Build a SceneModel representing a table with four legs,
// using geometry instancing and transforms
//--------------------------------------------------------

const sceneModel = new SceneModel(viewer.scene, {
  id: "table",
  position: [0, 0, 0],
  scale: [1, 1, 1],
  rotation: [0, 0, 0]
});

//--------------------------------------------------------
// Create a reusable geometry within the SceneModel
// We'll instance this geometry by five meshes
//--------------------------------------------------------

sceneModel.createGeometry({
  id: "boxGeometry",

  // The primitive type - allowed values are "points", "lines" and "triangles".
  // See the OpenGL/WebGL specification docs for how the coordinate 
  // arrays are supposed to be laid out.
  primitive: "triangles",

  // The vertices - eight for our cube, each
  // one spanning three array elements for X,Y and Z
  positions: [
    1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, // v0-v1-v2-v3 front
    1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, // v0-v3-v4-v1 right
    1, 1, 1, 1, 1, -1, -1, 1, -1, -1, 1, 1, // v0-v1-v6-v1 top
    -1, 1, 1, -1, 1, -1, -1, -1, -1, -1, -1, 1, // v1-v6-v7-v2 left
    -1, -1, -1, 1, -1, -1, 1, -1, 1, -1, -1, 1,// v7-v4-v3-v2 bottom
    1, -1, -1, -1, -1, -1, -1, 1, -1, 1, 1, -1 // v4-v7-v6-v1 back
  ],

  // Indices - these organise the positions and and normals
  // into geometric primitives in accordance with the "primitive" parameter,
  // in this case a set of three indices for each triangle.
  //
  // Note that each triangle is specified in counter-clockwise winding order.
  //
  indices: [
     0, 1, 2, 0, 2, 3,            // front
     4, 5, 6, 4, 6, 7,            // right
     8, 9, 10, 8, 10, 11,         // top
     12, 13, 14, 12, 14, 15,      // left
     16, 17, 18, 16, 18, 19,      // bottom
     20, 21, 22, 20, 22, 23
  ],
});

//--------------------------------------------------------
// Transform that scales, moves, orients the entire table
//--------------------------------------------------------

sceneModel.createTransform({
  id: "tableTransform",
  position: [-100, 0, 100],
  scale: [1, 1, 1],
  rotation: [0, 45, 0],
});

//--------------------------------------------------------
// Red table leg object
//--------------------------------------------------------

sceneModel.createTransform({
  id: "redLegTransform",
  parentTransformId: "tableTransform",
  position: [-4, -6, -4],
  scale: [1, 3, 1],
  rotation: [0, 0, 0],
});

sceneModel.createMesh({
  id: "redLegMesh",
  geometryId: "boxGeometry",
  transformId: "redLegTransform",
  color: [1, 0.3, 0.3],
});

sceneModel.createEntity({
  id: "redLeg",
  meshIds: ["redLegMesh"],
  isObject: true, // <--- Registers Entity by ID on viewer.scene.objects
});

//--------------------------------------------------------
// Green table leg object
//--------------------------------------------------------

sceneModel.createTransform({
  id: "greenLegTransform",
  parentTransformId: "tableTransform",
  position: [4, -6, -4],
  scale: [1, 3, 1],
  rotation: [0, 0, 0],
});

sceneModel.createMesh({
  id: "greenLegMesh",
  parentTransformId: "tableTransform",
  geometryId: "boxGeometry",
  transformId: "greenLegTransform",
  color: [0.3, 1.0, 0.3],
});

sceneModel.createEntity({
  id: "greenLeg",
  meshIds: ["greenLegMesh"],
  isObject: true, // <------ Registers Entity by ID on viewer.scene.objects
});

//--------------------------------------------------------
// Blue table leg
//--------------------------------------------------------

sceneModel.createTransform({
  id: "blueLegTransform",
  parentTransformId: "tableTransform",
  position: [4, -6, 4],
  scale: [1, 3, 1],
  rotation: [0, 0, 0],
});

sceneModel.createMesh({
  id: "blueLegMesh",
  geometryId: "boxGeometry",
  transformId: "blueLegTransform",
  color: [0.3, 0.3, 1.0],
});

sceneModel.createEntity({
  id: "blueLeg",
  meshIds: ["blueLegMesh"],
  isObject: true, // <------ Registers Entity by ID on viewer.scene.objects
});

//--------------------------------------------------------
// Yellow table leg
//--------------------------------------------------------

sceneModel.createTransform({
  id: "yellowLegTransform",
  parentTransformId: "tableTransform",
  position: [-4, -6, 4],
  scale: [1, 3, 1],
  rotation: [0, 0, 0],
});

sceneModel.createMesh({
  id: "yellowLegMesh",
  geometryId: "boxGeometry",
  transformId: "yellowLegTransform",
  color: [1.0, 1.0, 0.0],
});

sceneModel.createEntity({
  id: "yellowLeg",
  parentTransformId: "tableTransform",
  meshIds: ["yellowLegMesh"],
  isObject: true, // <------ Registers Entity by ID on viewer.scene.objects
});

//--------------------------------------------------------
// Purple table top
//--------------------------------------------------------

sceneModel.createTransform({
  id: "tableTopTransform",
  parentTransformId: "tableTransform",
  position: [0, -3, 0],
  scale: [6, 0.5, 6],
  rotation: [0, 0, 0],
});

sceneModel.createMesh({
  id: "purpleTableTopMesh",
  geometryId: "boxGeometry",
  transformId: "tableTopTransform",
  color: [1.0, 0.3, 1.0],
});

sceneModel.createEntity({
  id: "purpleTableTop",
  meshIds: ["purpleTableTopMesh"],
  isObject: true, // <----- Registers Entity by ID on viewer.scene.objects
});

//--------------------------------------------------------
// Finalize this SceneModel.
//--------------------------------------------------------

sceneModel.finalize();

//--------------------------------------------------------------------------
// Find scene graph nodes by their model and object IDs
//--------------------------------------------------------------------------

// Get some leg objects
const table = viewer.scene.objects["table"];
const redLeg = viewer.scene.objects["redLeg"];
const greenLeg = viewer.scene.objects["greenLeg"];
const blueLeg = viewer.scene.objects["blueLeg"];

//-------------------------------------------------------------------------
// Animate some transforms
//--------------------------------------------------------------------------

viewer.scene.on("tick",  () => {

  // Rotate legs
  sceneModel.transforms["yellowLegTransform"].rotateY(0.5);
  sceneModel.transforms["redLegTransform"].rotateY(1.55);
  sceneModel.transforms["blueLegTransform"].rotateY(2.25);

  sceneModel.transforms["greenLegTransform"].rotateY(1);

  sceneModel.transforms["greenLegTransform"].translateX(0.05);
  sceneModel.transforms["redLegTransform"].translateX(-0.05);
  sceneModel.transforms["blueLegTransform"].translateZ(0.05);
  sceneModel.transforms["yellowLegTransform"].translateZ(0.05);
});
```