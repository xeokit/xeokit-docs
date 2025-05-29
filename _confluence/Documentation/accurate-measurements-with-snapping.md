# Accurate Measurements with Snapping

In xeokit v2.4, we have introduced a new feature that allows users to measure distances and angles more accurately in their models. When using the xeokit SDK's `DistanceMeasurementsPlugin` or `AngleMeasurementsPlugin`, or the measurement tools in xeokit’s bundled `BIMViewer`, the mouse pointer now automatically snaps to the nearest vertex or edge. This makes it easier to position the pointer accurately and obtain precise measurements.

This innovative technique was developed by one of our core xeokit SDK developers, [Toni Marti](https://github.com/tmarti). It relies almost entirely on the GPU to find the nearest vertex or edge. Compared to traditional nearest-neighbor spatial search techniques used in other graphics libraries, this technique performs much faster. Additionally, its performance scales smoothly to work with the largest models that we can view with xeokit.

You can read more about Toni's technique and its implementation on his [graphics research blog](https://github.com/tmarti/graphics-research/blob/main/articles/webgl2-gpu-based-snapping.md).

- [BIMViewer Measurements with Snapping](#bimviewer-measurements-with-snapping)
-   [How to Use the BIMViewer Distance Measurement Tool](#how-to-use-the-bimviewer-distance-measurement-tool)
  
  -   [Activate Tool](#activate-tool)
  
  -   [Create Measurement](#create-measurement)
  
  -   [Delete or Customize a Measurement](#delete-or-customize-a-measurement)
-   [How to Use the BIMViewer Angle Measurement Tool](#how-to-use-the-bimviewer-angle-measurement-tool)
  
  -   [Activate Tool](#activate-tool)
  
  -   [Create Measurement](#create-measurement)
  
  -   [Delete or Customize Measurement](#delete-or-customize-measurement)
- [SDK Distance Measurement with Snapping](#sdk-distance-measurement-with-snapping)
- [SDK Angle Measurement with Snapping](#sdk-angle-measurement-with-snapping)
- [Smooth Performance with Large Models](#smooth-performance-with-large-models)

# BIMViewer Measurements with Snapping

In addition to the SDK, xeokit's bundled `BIMViewer` application includes distance and angle measurement tools, complete with snapping functionality. To activate these tools, simply click on the corresponding buttons in the toolbar. You can then create measurements using mouse input. Support for touch input will be added in a future release. The various context menus provide options to delete measurements, enable or disable snapping, show or hide labels and axis wires, and more. We’ll find a better icon for the angle measurements tool soon - a simple “right angle” icon will suffice for this release.

> [!NOTE]
> [Run this example](https://xeokit.io/demo.html?projectId=MAP)

![Screencast from 19.10.2023 03_53_56.webm](./attachments/Screencast%20from%2019.10.2023%2003_53_56.webm)

## How to Use the BIMViewer Distance Measurement Tool

### Activate Tool

To activate the distance measurements tool in the `BIMViewer`, click on the ruler icon in the toolbar.

![image-20240605-181018.png](./attachments/image-20240605-181018.png)

### Create Measurement

Make a measurement by clicking on the start and end points. The pointer will automatically snap to the nearest vertex or edge.

![image-20240605-181056.png](./attachments/image-20240605-181056.png)

### Delete or Customize a Measurement

To delete or customize a measurement, simply right-click or long-tap on it to bring up a context menu.

![image-20240605-181134.png](./attachments/image-20240605-181134.png)

## How to Use the BIMViewer Angle Measurement Tool

### Activate Tool

To activate the angle measurements tool in the `BIMViewer`, click on the angle icon in the toolbar.

![image-20240605-181233.png](./attachments/image-20240605-181233.png)

### Create Measurement

To create an angle measurement, click on three positions on the model’s objects. The pointer will automatically snap to the nearest vertex or edge for each position.

![image-20240605-181252.png](./attachments/image-20240605-181252.png)

### Delete or Customize Measurement

To delete or customize an angle measurement, right-click or long-tap on the measurement.

![image-20240605-181312.png](./attachments/image-20240605-181312.png)

# SDK Distance Measurement with Snapping

In the example below, we use the mouse to create point-to-point distance measurements on our IFC4 Duplex test model. Notice how the cursor snaps to the nearest vertex or edge as we set the endpoints of each measurement.

In this example, we create a `DistanceMeasurementsPlugin`, which does the actual measurement creation and storage. We then create a `DistanceMeasurementsMouseControl`, which controls the plugin using our mouse input. We configure that with a \[`PointerLens](<https://xeokit.github.io/xeokit-sdk/docs/class/src/extras/PointerLens/PointerLens.js~PointerLens.html>),` which shows a magnified view of the region around our mouse cursor, to help us better position the measurement endpoints with the mouse. Notice of the `PointerLens` shifts to the opposite corner whenever the mouse pointer hovers over it, to stay out of the way of the pointer.

In v2.4, we have refactored the measurement tools to allow users to implement their own custom controller classes for controlling the measurement plugins. Currently, touch controllers for measurements are being developed.

```
import {
  Viewer,
  XKTLoaderPlugin,
  DistanceMeasurementsPlugin,
  DistanceMeasurementsMouseControl,
  PointerLens,
} from "xeokit-sdk.es.js";

constviewer = new Viewer({
  canvasId: "myCanvas"
});

viewer.camera.eye = [-3.93, 2.85, 27.01];
viewer.camera.look = [4.4, 3.72, 8.89];
viewer.camera.up = [-0.01, 0.99, 0.039];

constxktLoader = new XKTLoaderPlugin(viewer);

constsceneModel = xktLoader.load({
  id: "myModel",
  src: "Duplex.xkt",
  edges: true,
});

constdistanceMeasurements = new DistanceMeasurementsPlugin(viewer);

constdistanceMeasurementsMouseControl = new DistanceMeasurementsMouseControl(
  distanceMeasurements, {
    pointerLens: new PointerLens(viewer),
  }
);

distanceMeasurementsMouseControl.snapping = true;

distanceMeasurementsMouseControl.activate();
```

> [!NOTE]
> [Run this example](https://xeokit.github.io/xeokit-sdk/examples/measurement/#distance_createWithMouse_snapping)

![Screencast from 22.09.2023 12_50_46.webm](./attachments/Screencast%20from%2022.09.2023%2012_50_46.webm)

# SDK Angle Measurement with Snapping

In the next video, we will use the mouse to create angle measurements on our Duplex model using vertex and edge snapping. You will notice how the pointer snaps to the nearest vertex. With our measurements, we will discover to our relief that the angle between two walls is indeed perfectly 90 degrees.

In this example, we create an `AngleMeasurementsPlugin`, which does the actual measurement creation and storage. We then create an `AngleMeasurementsMouseControl`, which controls the plugin using our mouse input. We configure that with a `PointerLens`, which shows a magnified view of the region around our mouse cursor, to help us better position the measurement endpoints with the mouse. That `PointerLens` can be shared with the \[D`istancemeasurementsMouseControl](<https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/DistanceMeasurementsPlugin/DistanceMeasurementsMouseControl.js~DistanceMeasurementsMouseControl.html>)` from our previous example.

```
import {
  Viewer,
  XKTLoaderPlugin,
  AngleMeasurementsPlugin,
  AngleMeasurementsMouseControl,
  PointerLens,
} from "xeokit-sdk.es.js";

constviewer = new Viewer({
  canvasId: "myCanvas"
});

viewer.camera.eye = [-3.93, 2.85, 27.01];
viewer.camera.look = [4.4, 3.72, 8.89];
viewer.camera.up = [-0.01, 0.99, 0.039];

constxktLoader = new XKTLoaderPlugin(viewer);

constsceneModel = xktLoader.load({
  id: "myModel",
  src: "Duplex.xkt",
  edges: true,
});

constangleMeasurements = new AngleMeasurementsPlugin(viewer);

constangleMeasurementsMouseControl = new AngleMeasurementsMouseControl(
  angleMeasurements, {
    pointerLens: new PointerLens(viewer),
  }
);

angleMeasurementsMouseControl.snapping = true;

angleMeasurementsMouseControl.activate();
```

> [!NOTE]
> [Run this example](https://xeokit.github.io/xeokit-sdk/examples/measurement/#angle_createWithMouse_snapping)

![Screencast from 03.09.2023 18_17_24.webm](./attachments/Screencast%20from%2003.09.2023%2018_17_24.webm)

# Smooth Performance with Large Models

To demonstrate how well snapping performance scales up with model size, we created point-to-point distance measurements in our Lyon city model. This model, which contains 73,203 objects, was imported from a LOD-3 CityGML model. If we were using the standard nearest-neighbor search technique instead of our GPU-based approach, the performance would be too slow.

> [!NOTE]
> [Run this example](https://xeokit.github.io/xeokit-sdk/examples/measurement/#distance_createWithMouse_snapping_Lyon)

![Screencast from 27.08.2023 00_57_09.webm](./attachments/Screencast%20from%2027.08.2023%2000_57_09.webm)