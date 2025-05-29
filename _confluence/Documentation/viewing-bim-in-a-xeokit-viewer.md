# Viewing .BIM in a xeokit Viewer

Released in: [https://github.com/xeokit/xeokit-sdk/releases/tag/v2.6.13](https://github.com/xeokit/xeokit-sdk/releases/tag/v2.6.13)

# Summary

The `DotBIMLoaderPlugin` class enables us to to load `.bim` models into a xeokit `Viewer`.

When loading a `.bim` model, the `DotBIMLoader` does the following:

- Creates an `Entity` representing each `.bim` model it loads, which will have `Entity#isModel` set `true`  
and will be registered by `Entity#id` in `Scene#models`.
- Creates an `Entity` for each object within the `.bim` model. Those `Entities` will have `Entity#isObject`  
set `true` and will be registered by `Entity#id` in `Scene#objects`.
- When loading, can set the World-space position, scale and rotation of each model within World space,  
along with initial viewer state for all the model's `Entity`s.
- Allows to mask which IFC types we want to load.
- Allows to configure initial viewer state for specified IFC types (color, visibility, selection, highlighted, X-rayed, pickable, etc).
- Supports viewing of geographically large or distant models using xeokit's double-precision coordinate system

# Usage

In the example below we'll load a house model from a .bim file.

This will create a bunch of `Entity`s that represents the model and its objects, along with  
a `MetaModel` and `MetaObject`s that hold their metadata.

- [Run this example](https://xeokit.github.io/xeokit-sdk/examples/buildings/#dotbim_House)

![Screenshot from 2024-05-28 22-32-05](https://github.com/xeokit/xeokit-sdk/assets/83100/dc19b7cc-84fb-4789-ac24-55d6d0840a32)

```
import {Viewer, DotBIMLoaderPlugin} from "xeokit-sdk.es.js";

//------------------------------------------------------------------------------------------------------------------
// 1. Create a Viewer,
// 2. Arrange the camera,
// 3. Tweak the selection material (tone it down a bit)
//------------------------------------------------------------------------------------------------------------------

// 1
const viewer = new Viewer({
     canvasId: "myCanvas",
     transparent: true
});

// 2
viewer.camera.orbitPitch(20);
viewer.camera.orbitYaw(-45);

// 3
viewer.scene.selectedMaterial.fillAlpha = 0.1;

//------------------------------------------------------------------------------------------------------------------
// 1. Create a .bim loader plugin,
// 2. Load a .bim building model, emphasizing the edges to make it look nicer
//------------------------------------------------------------------------------------------------------------------

// 1
const dotBIMLoader = new DotBIMLoaderPlugin(viewer);

// 2
var model = dotBIMLoader.load({                                    // Returns an Entity that represents the model
     id: "myModel",
     src: "../../assets/models/dotbim/House.bim",
     edges: true
});

// Find the model Entity by ID
model = viewer.scene.models["myModel"];

// Destroy the model
model.destroy();
```

## Transforming the Model

We have the option to rotate, scale and translate each `.bim` model as we load it.

This lets us load multiple models, or even multiple copies of the same model, and position them apart from each other.

In the example below, we'll rotate our model 90 degrees about its local X-axis, then  
translate it 100 units along its X axis.

```
const model = dotBIMLoader.load({
     src: "../../assets/models/dotbim/House.bim",
     rotation: [90,0,0],
     position: [100, 0, 0]
});
```

## Including and excluding IFC types

We can also load only those objects that have the specified IFC types. In the example below, we'll load only the  
objects that represent walls.

```
const model = dotBIMLoader.load({
    id: "myModel",
     src: "../../assets/models/dotbim/House.bim",
     includeTypes: ["IfcWallStandardCase"]
});
```

We can also load only those objects that **don't** have the specified IFC types. In the example below, we'll load only the  
objects that do not represent empty space.

```
const model = dotBIMLoader.load({
    id: "myModel",
     src: "../../assets/models/dotbim/House.bim",
     excludeTypes: ["IfcSpace"]
});
```

## Configuring initial IFC object appearances

We can specify the custom initial appearance of loaded objects according to their IFC types.

This is useful for things like:

- setting the colors to our objects according to their IFC types,
- automatically hiding `IfcSpace` objects, and
- ensuring that `IfcWindow` objects are always transparent.  
<br>  
In the example below, we'll load a model, while configuring `IfcSpace` elements to be always initially invisible,  
and `IfcWindow` types to be always translucent blue.

```
const myObjectDefaults = {

     IfcSpace: {
         visible: false
     },
     IfcWindow: {
         colorize: [0.337255, 0.303922, 0.870588], // Blue
         opacity: 0.3
     },

     //...

     DEFAULT: {
         colorize: [0.5, 0.5, 0.5]
     }
};

const model4 = dotBIMLoader.load({
     id: "myModel4",
     src: "House.bim",
     objectDefaults: myObjectDefaults // Use our custom initial default states for object Entities
});
```

When we don't customize the appearance of IFC types, as just above, then IfcSpace elements tend to obscure other  
elements, which can be confusing.

It's often helpful to make IfcSpaces transparent and unpickable, like this:

```
const dotBIMLoader = new DotBIMLoaderPlugin(viewer, {
   objectDefaults: {
       IfcSpace: {
           pickable: false,
           opacity: 0.2
       }
   }
});
```

Alternatively, we could just make IfcSpaces invisible, which also makes them unpickable:

```
const dotBIMLoader = new DotBIMLoaderPlugin(viewer, {
   objectDefaults: {
       IfcSpace: {
           visible: false
       }
   }
});
```

## Configuring a custom data source

By default, DotBIMLoaderPlugin will load `.bim` files and metadata JSON over HTTP.

In the example below, we'll customize the way DotBIMLoaderPlugin loads the files by configuring it with our own data source  
object. For simplicity, our custom data source example also uses HTTP, using a couple of xeokit utility functions.

```
import {utils} from "xeokit-sdk.es.js";

class MyDataSource {

     constructor() {
     }

     // Gets the contents of the given .bim file in a JSON object
     getDotBIM(src, ok, error) {
         utils.loadJSON(dotBIMSrc,
            (json) => {
                ok(json);
            },
            function (errMsg) {
                error(errMsg);
            });
     }
}

const dotBIMLoader2 = new DotBIMLoaderPlugin(viewer, {
      dataSource: new MyDataSource()
});

const model5 = dotBIMLoader2.load({
     id: "myModel5",
     src: "House.bim"
});
```