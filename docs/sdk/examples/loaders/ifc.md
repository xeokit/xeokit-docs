---
sidebar_position: 1
tags:
  - ifc
  - loaders
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import XeoHtmlFileViewer from '@site/src/components/examples/XeoHtmlFileViewer';
import XeoInteractiveExample from '@site/src/components/examples/XeoInteractiveExample';
import XeoSourceDownloadButton from '@site/src/components/examples/XeoSourceDownloadButton'
import XeoOpenInNewTabButton from '@site/src/components/examples/XeoOpenInNewTabButton'
import { CodePen, Gist } from 'mdx-embed';

# .ifc loader

## Intro

This TypeScript file demonstrates how to load and interact with an IFC (Industry Foundation Classes) model using the XeoKit SDK. The example includes:

1. Setting up the core XeoKit components:
   - Scene container for geometry and materials
   - Data store for semantic BIM information
   - WebGL renderer for 3D visualization
   - Viewer with camera configuration and controls

2. Loading an IFC model (IfcOpenHouse4) using:
   - IFCLoader to parse the industry-standard IFC format
   - SceneModel for managing 3D geometry
   - DataModel for handling the semantic data layer

3. Demonstrating advanced data querying capabilities:
   - Using `searchObjects` to query specific IFC elements (IfcMember)
   - Filtering by BIM relationships (IfcRelAggregates)
   - Working with the entity-relationship graph structure

4. Visual interaction with the model:
   - Setting up camera position for optimal viewing
   - Implementing interactive camera controls
   - Programmatically selecting elements based on query results

This example showcases XeoKit's ability to handle both the geometric and semantic aspects of BIM models in a web environment.


## Interactive Demo


<CodePen codePenId="KwwwrRN" />

<XeoOpenInNewTabButton filePath="/home/dabomian/Dev/creoox/xeokit-docs/content-generators/sdk/inputs/loaders/ifc/main.ts" />

<BrowserOnly>
{() => (
 <XeoInteractiveExample filePath="/home/dabomian/Dev/creoox/xeokit-docs/content-generators/sdk/inputs/loaders/ifc/main.ts" />
)}
</BrowserOnly>

<XeoSourceDownloadButton filePath="/home/dabomian/Dev/creoox/xeokit-docs/content-generators/sdk/inputs/loaders/ifc/main.ts" />

```ts
import * as xeokit from "@xeokit/sdk"

const model = "https://sos-ch-gva-2.exo.io/creoox-public/xeokit-sdk/models/IfcOpenHouse4/ifc/model.ifc"

// Create an IFCLoader to load IFC files

const ifcLoader = new xeokit.ifc.IFCLoader();

// Create a Scene to hold geometry and materials

const scene = new xeokit.scene.Scene();

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

// Arrange the View's Camera

view.camera.eye = [-6.01, 4.85, 9.11];
view.camera.look = [3.93, -2.65, -12.51];
view.camera.up = [0.12, 0.95, -0.27];

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





fetch(model)
  .then(response => {
    response
      .arrayBuffer()
      .then(fileData => {

        ifcLoader.load({
          fileData,
          sceneModel,
          dataModel

        }).then(() => { // IFC file loaded

          // Build the SceneModel.
          // The IFC model now appears in our Viewer.

          sceneModel.build();

          // Build the DataModel.
          // The DataModel and the Data will then contain DataObject,
          // Relationship and PropertySet components that represent the IFC data as an
          // entity-relationship graph.

          dataModel.build();

          // Using the searchObjects function, query the Data for all the
          // IfcMember elements within a given IfcBuildingStorey.

          const resultObjectIds: string[] = [];

          const result = xeokit.data.searchObjects(data, {
            startObjectId: "38aOKO8_DDkBd1FHm_lVXz",
            includeObjects: [xeokit.ifctypes.IfcMember],
            includeRelated: [xeokit.ifctypes.IfcRelAggregates],
            resultObjectIds
          });

          // Check if the query was valid.

          if (result instanceof xeokit.core.SDKError) {
            throw new Error(`Error searching Data: ${result.message}`);
          }

          // If the query succeeded, go ahead and mark whatever
          // objects we found as selected. In this case, it will set the window
          // frames as selected in the View.

          view.setObjectsSelected(resultObjectIds, true);

        }).catch(e => {
          console.error(e);
        });
      });
  });



```


## Other

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis tellus eu urna fringilla, nec aliquam urna mollis. Nunc orci diam, viverra et ante in, volutpat aliquet sapien. Suspendisse ullamcorper sit amet urna ac vulputate. Cras eu magna rutrum, lobortis urna eget, ultrices arcu. Donec sagittis, massa eu vestibulum faucibus, eros metus tempor nulla, eget viverra mauris velit eu orci. Cras eu mi eu tellus tempus fringilla a nec nunc. Fusce blandit consectetur leo, ut eleifend elit. Proin nec congue lectus, eget efficitur neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum a mi in nulla pellentesque interdum. Vivamus imperdiet pharetra nisl a laoreet.
