import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import { useBlogPost } from '@docusaurus/plugin-content-blog/client';
import type { Props } from '@theme/BlogPostItem/Header/Title';

import styles from './styles.module.css';
import ShareWidget from '@site/src/components/ShareWidget';

import BrowserOnly from "@docusaurus/BrowserOnly";

export default function BlogPostItemHeaderTitle({ className }: Props): ReactNode {
  const { metadata, isBlogPostPage } = useBlogPost();
  const { permalink, title } = metadata;
  const TitleHeading = isBlogPostPage ? 'h1' : 'h2';

  return (
    <>
      <TitleHeading className={clsx(styles.title, className)}>
        {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
      </TitleHeading>

      <BrowserOnly>
        {() => {
          const fullLink = `${window.location.origin}${permalink}`;
          return <ShareWidget title={title} url={fullLink} />;
        }}
      </BrowserOnly>
    </>
  );
}
