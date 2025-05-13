import type {ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import XeoIframe from '@site/src/components/XeoIframe';
import Layout from '@theme/Layout';

export default function Hello(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`Example typedoc - ${siteConfig.title}`}
      description="Example typedoc">
      <XeoIframe src="https://typedoc.org/example" />
    </Layout>
  );
}