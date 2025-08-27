import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import XeoIframe from '@site/src/components/XeoIframe';

export default function Hello(): ReactNode {
  return (
    <Layout
      title={`SDK API Docs`}
      description="API Documentation for the xeokit SDK">
      <XeoIframe src="https://xeokit.github.io/xeokit-sdk/docs/" />
    </Layout>
  );
}
