import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import XeoIframe from '@site/src/components/XeoIframe';

export default function Hello(): ReactNode {
  return (
    <Layout
      title={`V3 SDK Examples`}
      description="SDK Examples">
      <XeoIframe src="https://xeokit.github.io/sdk/" />
    </Layout>
  );
}
