import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import XeoIframe from '@site/src/components/XeoIframe';

export default function Hello(): ReactNode {
  return (
    <Layout
      title={`Development Status`}
      description="Dev Status">
      <XeoIframe src="https://xeokit.github.io/sdk/userguide/dev-status/" />
    </Layout>
  );
}
