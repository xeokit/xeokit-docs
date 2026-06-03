import { useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import Layout from '@theme/Layout';
import XeoIframe from '@site/src/components/XeoIframe';

interface XeoSectionProps {
  section: string;
}

export default function XeoSection({ section }: XeoSectionProps): ReactNode {
  const [src, setSrc] = useState<string | null>(null);

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    setSrc(`/examples/${section}/${hash ? '#' + hash : ''}`);
  }, [section]);

  return (
    <Layout
      title={`xeokit ${section} Examples`}
      description={`Interactive xeokit SDK examples — ${section}.`}>
      {src && <XeoIframe src={src} syncUrl="path" />}
    </Layout>
  );
}
