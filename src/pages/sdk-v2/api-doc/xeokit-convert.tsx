import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import XeoIframe from '@site/src/components/XeoIframe';

export default function Hello(): ReactNode {
  return (
    <Layout
      title={`Xeokit Convert`}
      description="Xeokit Convert is an open source 3D model conversion tool that runs in the browser.">
      <XeoIframe src="https://xeokit.github.io/xeokit-convert/docs/" />
    </Layout>
  );
}
