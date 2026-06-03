import Layout from '@theme/Layout';
import type { ReactNode } from 'react';
import XeoIframe from '@site/src/components/XeoIframe';

function toDocusaurusUrl(rawPath: string): string {
  const m = rawPath.match(/^\/examples\/([^/]+)\/(?:index\.html\/)?([^/]+)\.html$/);
  return m ? `/sdk-v2/examples/${m[1]}#${m[2]}` : rawPath;
}

export default function Examples(): ReactNode {
  return (
    <Layout
      title="xeokit SDK Examples"
      description="Interactive examples for the xeokit SDK — buildings, cities, CAD, annotations, and more.">
      <XeoIframe src="/examples/index.html" syncUrl="path" syncUrlTransform={toDocusaurusUrl} />
    </Layout>
  );
}
