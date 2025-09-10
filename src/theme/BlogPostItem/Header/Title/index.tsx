import React, { type ReactNode } from 'react';
import Title from '@theme-original/BlogPostItem/Header/Title';
import type TitleType from '@theme/BlogPostItem/Header/Title';
import type { WrapperProps } from '@docusaurus/types';
import ShareWidget from '@site/src/components/ShareWidget';
import BrowserOnly from "@docusaurus/BrowserOnly";

type Props = WrapperProps<typeof TitleType>;

export default function TitleWrapper(props: Props): ReactNode {
  const [isInBlogPost, setIsInBlogPost] = React.useState(false);
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    const pathname = window.location.pathname;
    const blogPathPattern = /^\/blog\/(?!page\/\d+$)[^/]+/; // Matches /blog/anything but not just /blog and not /blog/page/{number}
    setIsInBlogPost(blogPathPattern.test(pathname));

    setTimeout(() => {
      setTitle(document.title);
    }, 300);
  }, []);

  return (
    <>
      <Title {...props} />

      <BrowserOnly>
        {() => {
          const fullLink = `${window.location.origin}${window.location.pathname}`;
          return isInBlogPost && <ShareWidget title={title} url={fullLink} />;
        }}
      </BrowserOnly>

    </>
  );
}
