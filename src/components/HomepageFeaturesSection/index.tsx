import Heading from '@theme/Heading';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

export default function HomepageFeaturesSection(): ReactNode {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="text--center margin-bottom--xl">

          <Heading as="h2" className={styles.featuresSectionTitle}>
            Features
          </Heading>
        </div>

        {/* Video Section */}
        <div className="row margin-bottom--xl">
          <div className="col col--12 text--center">
            <div className={styles.videoContainer}>
              <iframe width="560" height="315" src="https://www.youtube.com/embed/Q9pukZc-6eA?si=o74tCeGI9B0mncb7&amp;rel=0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
          </div>
        </div>

        {/* Features Content - Two Column Layout */}
        <div className="row margin-bottom--xl">
          {/* Left Column - All Lists */}
          <div className="col col--6">
            {/* Display your Models in the Browser */}
            <div className="margin-bottom--xl">
              <Heading as="h3">Display your Models in the Browser</Heading>
              <p>Get your models on the Web using a toolkit of production-proven components that save you costly research, development and maintenance.</p>
              <ul>
                <li><strong>Load models from your own server</strong>.<br />
                  Keep data, viewer and conversion tools on your own servers. No overloaded cloud services, or unpredictable costs. No hassles with data protection laws.</li>
                <li><strong>Works in all major browsers</strong>.<br />
                  Including mobile, without plugins.</li>
                <li><strong>Completely open-source SDK</strong>.<br />
                  You get the <a href="https://github.com/xeokit/xeokit-sdk">source code</a>. Customize and extend it however you want.</li>
                <li><strong>Open community of experts</strong>.<br />
                  Join our community of 3D Web programming experts and industry leaders. Share our tools and get support.</li>
                <li><strong>Training resources</strong>.<br />
                  Including <a href="https://xeokit.github.io/xeokit-sdk/examples/">examples</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/">API docs</a> and <a href="https://www.notion.so/xeokit/xeokit-Documentation-4598591fcedb4889bf8896750651f74e">tutorials</a>.</li>
                <li><strong>Tap into xeolabs' ongoing research and development</strong>.<br />
                  Get started quickly and lower your costs. Benefit from new features as xeokit continues to develop.</li>
              </ul>
            </div>

            {/* JavaScript Programming Toolkit */}
            <div className="margin-bottom--xl">
              <Heading as="h3">JavaScript Programming Toolkit</Heading>
              <p>A toolkit of reusable solutions based on <a href="https://xeolabs.com/work.html">10+ years experience</a> visualizing large engineering and medical models in the browser.</p>
              <ul>
                <li><strong>Fast loading of huge models</strong>.<br />
                  One of the most compact geometry formats on the Web. Loads hundreds of megabytes in seconds.</li>
                <li><strong>Fast rendering of many objects</strong>.<br />
                  A hardware-accelerated renderer, purpose-built for viewing highly-detailed, real-world engineering models.</li>
                <li><strong>Double-precision geometry</strong>.<br />
                  Load models with double-precision coordinates. Render them accurately in the browser, without loss of precision, enabling GIS applications.</li>
                <li><strong>Loads a variety of model formats</strong>.<br />
                  Load many models into the same scene, including IFC (2x3 and 4.3), glTF, OBJ, STL, 3DXML, LAZ/LAS, CityJSON, XKT and more.</li>
                <li><strong>Save and load BCF viewpoints</strong>.<br />
                  Build interoperable BIM apps. Connect your application with the BIM ecosystem.</li>
                <li><strong>A complete 3D toolkit</strong>.<br />
                  Dynamic scenes, transforms, animations, physically-based materials, dynamic light sources, ambient shadows, interactive section planes, annotations, X-ray, highlight, selection, colorize objects and more.</li>
              </ul>
            </div>

            {/* Plugins and Tools Library */}
            <div className="margin-bottom--xl">
              <Heading as="h3">Plugins and Tools Library</Heading>
              <p>A growing library of plugins and pipeline tools to accelerate the development of your application, including:</p>
              <ul>
                <li><strong>Navigation</strong><br />
                  <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/StoreyViewsPlugin/StoreyViewsPlugin.js~StoreyViewsPlugin.html">Plan Views</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/SectionPlanesPlugin/SectionPlanesPlugin.js~SectionPlanesPlugin.html">Section Planes</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/TreeViewPlugin/TreeViewPlugin.js~TreeViewPlugin.html">Tree Views</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/extras/ContextMenu/ContextMenu.js~ContextMenu.html">Context Menus</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/NavCubePlugin/NavCubePlugin.js~NavCubePlugin.html">NavCube</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/AxisGizmoPlugin/AxisGizmoPlugin.js~AxisGizmoPlugin.html">Gnomon</a></li>
                <li><strong>Measurement</strong><br />
                  <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/DistanceMeasurementsPlugin/DistanceMeasurementsPlugin.js~DistanceMeasurementsPlugin.html">Distance Measurement</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/AngleMeasurementsPlugin/AngleMeasurementsPlugin.js~AngleMeasurementsPlugin.html">Angle Measurement</a></li>
                <li><strong>Collaboration</strong><br />
                  <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/AnnotationsPlugin/AnnotationsPlugin.js~AnnotationsPlugin.html">3D Annotations</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/BCFViewpointsPlugin/BCFViewpointsPlugin.js~BCFViewpointsPlugin.html">BCF Viewpoints</a></li>
                <li><strong>Loaders</strong><br />
                  <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/WebIFCLoaderPlugin/WebIFCLoaderPlugin.js~WebIFCLoaderPlugin.html">IFC</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/GLTFLoaderPlugin/GLTFLoaderPlugin.js~GLTFLoaderPlugin.html">glTF</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/CityJSONLoaderPlugin/CityJSONLoaderPlugin.js~CityJSONLoaderPlugin.html">CityJSON</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/OBJLoaderPlugin/OBJLoaderPlugin.js~OBJLoaderPlugin.html">OBJ</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/STLLoaderPlugin/STLLoaderPlugin.js~STLLoaderPlugin.html">STL</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/XKTLoaderPlugin/XKTLoaderPlugin.js~XKTLoaderPlugin.html">XKT</a>, <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/XML3DLoaderPlugin/XML3DLoaderPlugin.js~XML3DLoaderPlugin.html">3DXML</a>, ...</li>
              </ul>
            </div>

            {/* Open Community */}
            <div className="margin-bottom--xl">
              <Heading as="h3">Open Community</Heading>
              <p>Join an open community of 3D Web programming experts. Share our tools and get support.</p>
              <ul>
                <li><a href="https://github.com/xeokit/xeokit-sdk">Source Code</a></li>
                <li><a href="https://xeokit.github.io/xeokit-sdk/examples/#BIMOffline_XKT_OTCConferenceCenter">Live Examples</a></li>
                <li><a href="/sdk-v2/api-doc/xeokit-sdk">Documentation</a></li>
              </ul>
            </div>
          </div>

          {/* Right Column - All Images */}
          <div className="col col--6">
            <div className="margin-bottom--xl">
              <a href="/sdk-v2/examples/xeokit-bim-viewer?projectId=OTCConferenceCenter&tab=storeys">
                <img src="/img/features/xeokit-viewer.png" alt="A 3D IFC model viewer built on the xeokit SDK" className={styles.featureImage} />
              </a>

              <p className="margin-top--md">
                A bundled BIM viewer to get you started in minutes - <a href="/sdk-v2/examples/xeokit-bim-viewer?projectId=OTCConferenceCenter&tab=storeys">try it out!</a>
              </p>
            </div>

            <div className="margin-bottom--xl">
              <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/viewer/Plugin.js~Plugin.html">
                <img src="/img/features/computer-planview.png" alt="Fully flexible and well documented JavaScript framework on top of WebGL" className={styles.featureImage} />
              </a>

              <p className="margin-top--md">
                Plugins for real-world BIM and CAD use cases - <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/viewer/Plugin.js~Plugin.html">browse the API docs</a>
              </p>
            </div>

            <div className="margin-bottom--xl">
              <a href="https://xeokit.github.io/xeokit-sdk/examples/#loading_3DXML_TreeView">
                <img src="/img/features/computer-gear.png" alt="Importing 3DXML from SolidWorks" className={styles.featureImage} />
              </a>
              <p className="margin-top--md">
                Load CAD models from SolidWorks - <a href="https://xeokit.github.io/xeokit-sdk/examples/#loading_3DXML_TreeView">try a demo</a>
              </p>
            </div>

            <div className="margin-bottom--xl">
              <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/LASLoaderPlugin/LASLoaderPlugin.js~LASLoaderPlugin.html">
                <img src="/img/features/computer-laz.png" alt="Importing 3DXML from SolidWorks" className={styles.featureImage} />
              </a>
              <p className="margin-top--md">
                Load point clouds from LAS/LAZ - <a href="https://xeokit.github.io/xeokit-sdk/docs/class/src/plugins/LASLoaderPlugin/LASLoaderPlugin.js~LASLoaderPlugin.html">check it out in the docs</a>
              </p>
            </div>

            <div className="margin-bottom--xl">
              <a href="/sdk-v2/api-doc/xeokit-sdk">
                <img src="/img/features/computer-sourcecode.png" alt="Importing 3DXML from SolidWorks" className={styles.featureImage} />
              </a>
              <p className="margin-top--md">
                A rich programming toolkit - <a href="/sdk-v2/api-doc/xeokit-sdk">browse the API docs</a>
              </p>
            </div>
          </div>
        </div>

        <figure className="figure">
          <a href="https://xeo.vision/" target="_blank"><img className="img-fluid" src="/img/banner-xeoVision.jpg" alt="xeoVision - Your IFC BIM Engineering 3D Viewer" /></a>
          <figcaption className="figure-caption  text-center">Experience xeokit in action and make it your own - <a href="https://xeo.vision/" target="_blank">with xeoVision</a>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
