import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import XeoIframe from '@site/src/components/XeoIframe';
import Layout from '@theme/Layout';

export default function Hello(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Xeokit Viewer - ${siteConfig.title}`}
      description="Embedded xeokit SDK viewer">
      <XeoIframe src="https://xeokit.github.io/xeokit-sdk/docs/" />
    </Layout>
  );
}