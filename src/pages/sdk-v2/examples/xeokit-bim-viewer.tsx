import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import XeoIframe from '@site/src/components/XeoIframe';

export default function Hello(): ReactNode {
  const { siteConfig } = useDocusaurusContext();

  return (
    <Layout
      title={`xeokit-sdk - ${siteConfig.title}`}
      description="BIM Viewer Examples">
      <XeoIframe src="https://xeokit.github.io/xeokit-sdk/examples/bimviewer.html" />
    </Layout>
  );
}
