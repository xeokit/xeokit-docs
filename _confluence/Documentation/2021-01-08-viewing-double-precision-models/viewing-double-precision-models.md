# ⚗️Viewing Double-Precision Models

This week, [xeolabs](http://xeolabs.com/) released [xeokit-sdk 1.4.8](https://github.com/xeokit/xeokit-sdk) and [xeokit-gltf-to-xkt 0.5.0](https://github.com/xeokit/xeokit-gltf-to-xkt), which allow us to accurately view BIM models at their original IFC global coordinate locations within xeokit's browser-based viewer, without rounding errors. In this post, we'll describe the problem this update solves, and how to upgrade your xeokit application to use this update.

- [Why is my Model Jittering?](#why-is-my-model-jittering)
- [Solution: Double-Precision Emulation](#solution-double-precision-emulation)
- [Using Double-Precision Emulation](#using-double-precision-emulation)
-   [1\. Update xeokit-gltf-to-xkt](#1-update-xeokit-gltf-to-xkt)
-   [2\. Reconfigure IfcConvert](#2-reconfigure-ifcconvert)
-   [3\. Update xeokit-sdk](#3-update-xeokit-sdk)
- [More Resources](#more-resources)

# **Why is my Model Jittering?**

Sometimes, xeokit users would report that certain models would "jitter" as they moved.

The screen capture below shows the problem, using a model of the Marc Antoine Petit apartment complex in Lyon, provided by [BIMData](https://bimdata.io/). The IFC geometry for this model is in IFC global coordinates. Notice the way the model "shivers" as we rotate it.

![image-20240523-143458.png](./attachments/image-20240523-143458.png)

After some investigation, it turned out that:

- **The models had geometry that relied on double-precision values.** This was either because the models were geographically large with fine details, or because their geometries were positioned far from the origin of the IFC global coordinate system (BIMData's model happens to be positioned at `[1842022, 10, -5173301]`, which is somewhere in Lyon, France).
- **WebGL can only support single-precision values to ~7 decimal places of accuracy.** Using graphics APIs such as WebGL, OpenGL and Direct3D, graphics processing units (GPUs) internally operate on single precision 32-bit floating-point numbers. Therefore, the jittering turned out to be rounding error within WebGL shaders, as each vertex position continually snapped to its nearest available single-precision value.

So far, we've managed to avoid rounding jitter by using certain `[IfcConvert` options\]([https://github.com/xeokit/xeokit-sdk/wiki/Creating-Files-for-Offline-BIM#42-ifcconvert-options-to-mitigate-precision-loss](https://github.com/xeokit/xeokit-sdk/wiki/Creating-Files-for-Offline-BIM#42-ifcconvert-options-to-mitigate-precision-loss) ), or `[python scripts on IfcOpenShell](<https://github.com/xeokit/xeokit-sdk/wiki/Creating-Files-for-Offline-BIM#431-a-python-script-using-ifcopenshell>)`, to "center" the geometries within our IFC models (see: [Creating Files for Offline BIM](https://github.com/xeokit/xeokit-sdk/wiki/Creating-Files-for-Offline-BIM#42-ifcconvert-options-to-mitigate-precision-loss)). These workarounds work by transforming the geometries from IFC global coordinates to IFC local coordinates, which are (hopefuwly) small enough to be accurately represented by WebGL.

The problem with these workarounds is that we lose the original global placement of our models. This means that we cannot load multiple models belonging to the same site and have them positioned correctly with respect to each other. Instead, they would all be in their local IFC coordinate system, and once loaded into xeokit, would be positioned right on top of each other.

Furthermore, if the model is geographically huge, with fine details (eg. a 10km long roadworks that relies on 1cm accuracy), then centering doesn't help anyway, because the geometry will still have huge coordinate values.

# **Solution: Double-Precision Emulation**

The solution was to extend `[xeokit-sdk](<https://github.com/xeokit/xeokit-sdk>)` and `[xeokit-gltf-to-xkt](<https://github.com/xeokit/xeokit-gltf-to-xkt>)` with the ability to emulate double-precision geometry rendering on WebGL, as a robust way to eliminate rounding jitter with IFC models that contain large geometry coordinates.

The screen capture below shows how this solution completely eliminates rounding jitter with BIMData's model, without needing to convert it to IFC local coordinates. Within xeokit's viewer, the model actually retains its full IFC global coordinate precision, and is still centered at `[1842022, 10, -5173301]` (somewhere in Lyon, France).

![image-20240523-143743.png](./attachments/image-20240523-143743.png)

We can even load a second model, with IFC global coordinates centered at, say. `[-104567655, 10, 231000000]`, and xeokit would happily have both of these models in the viewer, situated `259038312.73` units away from each other.

Our jitter elimination uses a technique known as **relative-to-center (RTC) geometry coordinates**, which is used in flight simulators and geospatial visualization applications to accurately render very large models on single-precision GPUs. We won't describe the RTC technique here, but you can read all about it in the book [3D Engine Design for Virtual Globes](https://www.amazon.com/3D-Engine-Design-Virtual-Globes/dp/1568817118), which was a valuable resource during the development of this release.

# **Using Double-Precision Emulation**

We'll now describe how to upgrade your xeokit application to work with full-precision models. You can also find more information in the GitHub [pull request](https://github.com/xeokit/xeokit-sdk/pull/456) for this update.

## **1\. Update xeokit-gltf-to-xkt**

First, update your version of `[xeokit-gltf-to-xkt](<https://github.com/xeokit/xeokit-gltf-to-xkt>)` to `0.5.0` or later, assuming that you're using that within your model conversion pipeline to convert glTF models to xeokit's optimized `.XKT` native geometry format.

optimized `.XKT` native geometry format.

## **2\. Reconfigure IfcConvert**

If you're using `IfcConvert` with option `--center-model`, `--site-local-placement` or `--building-local-placement` to center your models to avoid rounding jitter, then you can now remove that option.

Likewise, if you're using `IfcOpenShell` scripts to center your models to avoid jitter, you can now remove those script invocations from your conversion pipeline.

## **3\. Update xeokit-sdk**

Lastly, update your version of `[xeokit-sdk](<https://github.com/xeokit/xeokit-sdk>)` to `1.4.8` or later. This version is a backwardly-compatible drop-in replacement for 1.4.7, which does not emulate full-precision.

Now you can convert full-precision IFC models to `.xkt 6+` and load them into your xeokit application, to accurately view them in the browser.

# **More Resources**

As mentioned, [**pull request #456**](https://github.com/xeokit/xeokit-sdk/pull/456) has info on what code has been updated in [xeokit-sdk 1.4.8](https://github.com/xeokit/xeokit-sdk). For improved maintenance and QA, the converter logic in `[xeokit-gltf-to-xkt](<https://github.com/xeokit/xeokit-gltf-to-xkt>)`, used for generating `.XKT 6` format, has been factored out into its own library, `[xeokit-xkt-utils](<https://github.com/xeokit/xeokit-xkt-utils>)`. This allows us to more easily document and unit test the converter logic, and to more clearly use it as a reference implementation for developers wanting to build their own tools to generate `.XKT 6` format. Take a look at that library's repository for more insight into `.XKT 6` and RTC.
