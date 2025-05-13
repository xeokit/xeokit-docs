---
sidebar_position: 2
tags:
  - Releases
  - docusaurus
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import XeoHtmlFileViewer from '@site/src/components/examples/XeoHtmlFileViewer';
import XeoInteractiveExample from '@site/src/components/examples/XeoInteractiveExample';
import XeoSourceDownloadButton from '@site/src/components/examples/XeoSourceDownloadButton'
import XeoOpenInNewTabButton from '@site/src/components/examples/XeoOpenInNewTabButton'
import { CodePen, Gist } from 'mdx-embed';

# Load xkt file 1

How to load file xkt with xeokit-sdk

## Interactive Demo


<CodePen codePenId="KwwwrRN" />

<XeoOpenInNewTabButton filePath="/xeokit/examples/load-xkt-file.html" />

<BrowserOnly>
{() => (
 <XeoInteractiveExample filePath="/xeokit/examples/load-xkt-file.html" />
)}
</BrowserOnly>

<XeoSourceDownloadButton filePath="/xeokit/examples/load-xkt-file.html" />

```html
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Load xkt file</title>
    <style>
        body {
            margin: 0;
            width: 100%;
            height: 100%;
            user-select: none;
        }

        #xeokit_canvas {
            width: 100%;
            height: 100%;
            position: absolute;
            background: lightblue;
            background-image: linear-gradient(lightblue, white);
        }
    </style>
</head>
<body>
<canvas id="xeokit_canvas"></canvas>
</body>
<script id="source" type="module">

    const xeokitSdkPath = "https://cdn.jsdelivr.net/npm/@xeokit/xeokit-sdk/dist/xeokit-sdk.es.min.js";
    const xktModelAssetPath = "https://sos-ch-gva-2.exo.io/creoox-public/Duplex.xkt";


    const {XKTLoaderPlugin, Viewer} = await import(xeokitSdkPath);


    const viewer = new Viewer({
        canvasId: "xeokit_canvas",
        transparent: true,
        dtxEnabled: true
    });

    viewer.camera.eye = [-3.933, 2.855, 27.018];
    viewer.camera.look = [4.400, 3.724, 8.899];
    viewer.camera.up = [-0.018, 0.999, 0.039];

    const xktLoader = new XKTLoaderPlugin(viewer);

    const sceneModel = xktLoader.load({
        id: "myModel",
        src: xktModelAssetPath,
        saoEnabled: true,
        edges: true,
        dtxEnabled: true
    });

</script>
</html>

```


## Other

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque iaculis tellus eu urna fringilla, nec aliquam urna mollis. Nunc orci diam, viverra et ante in, volutpat aliquet sapien. Suspendisse ullamcorper sit amet urna ac vulputate. Cras eu magna rutrum, lobortis urna eget, ultrices arcu. Donec sagittis, massa eu vestibulum faucibus, eros metus tempor nulla, eget viverra mauris velit eu orci. Cras eu mi eu tellus tempus fringilla a nec nunc. Fusce blandit consectetur leo, ut eleifend elit. Proin nec congue lectus, eget efficitur neque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum a mi in nulla pellentesque interdum. Vivamus imperdiet pharetra nisl a laoreet.
