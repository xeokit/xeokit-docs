import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import XeoIframe from '@site/src/components/XeoIframe';

export default function Hello(): ReactNode {
  return (
    <Layout
      title={`SDK Examples`}
      description="SDK Examples for the xeokit SDK">
      <XeoIframe src="https://xeokit.github.io/xeokit-sdk/examples/index.html" />
    </Layout>
  );
}
