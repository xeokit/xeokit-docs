import React, { type ReactNode } from 'react';
import Layout from '@theme/Layout';
import NotFoundContent from '@theme/NotFound/Content';
// import { translate } from '@docusaurus/Translate';

export default function Index(): ReactNode {
  // const title = translate({
  //   id: 'theme.NotFound.title',
  //   message: 'Page Not Found',
  // });
  return (
    <>
      <Layout>
        <NotFoundContent />
      </Layout>
    </>
  );
}
