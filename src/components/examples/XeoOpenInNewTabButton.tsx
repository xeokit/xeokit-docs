import ReactNode from 'react';

interface XeoOpenInNewTabButtonProps {
  filePath: string;
}

export default function XeoOpenInNewTabButton({ filePath }: XeoOpenInNewTabButtonProps): ReactNode {
  return (
    <a
      target="_blank"
      href={filePath}
      rel="noopener noreferrer"
      className="button button--secondary margin-vert--sm"
    >
      <span>Open in New Tab</span>
    </a>
  );
};
