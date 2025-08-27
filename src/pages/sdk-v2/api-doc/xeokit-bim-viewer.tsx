import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import XeoIframe from '@site/src/components/XeoIframe';

export default function Hello(): ReactNode {
  return (
    <Layout
      title={`Xeokit BIM Viewer`}
      description="BIMViewer is an open source 2D/3D BIM viewer that runs in the browser and loads models from your file system.">
      <XeoIframe src="https://xeokit.github.io/xeokit-bim-viewer/docs/" />
    </Layout>
  );
}
