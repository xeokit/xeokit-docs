import ReactNode from 'react';

interface XeoSourceDownloadButtonProps {
  filePath: string;
}

export default function XeoSourceDownloadButton({ filePath }: XeoSourceDownloadButtonProps): ReactNode {
  return (
    <a
      href={filePath}
      download="xeokit-example.html"
      className="button button--primary"
    >
      <span>Download HTML Source</span>
    </a>
  );
};