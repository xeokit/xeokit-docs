import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  XIcon,
  RedditIcon,
  TwitterShareButton,
  RedditShareButton,
} from "react-share";
import React from "react";

interface ShareWidgetProps {
  url: string;
  title: string;
}

const ShareWidget: React.FC<ShareWidgetProps> = ({ url, title }) => {
  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
      <LinkedinShareButton url={url} title={title} summary={title} source={url}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>

      <TwitterShareButton url={url} title={title}>
        <XIcon size={32} round />
      </TwitterShareButton>

      <FacebookShareButton url={url}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>

      <RedditShareButton url={url} title={title}>
        <RedditIcon size={32} round />
      </RedditShareButton>
    </div>
  );
};

export default ShareWidget;
