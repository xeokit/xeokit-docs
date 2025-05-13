import ReactNode from 'react';

interface XeoOpenInNewTabButtonProps {
  filePath: string;
}

export default function XeoOpenInNewTabButton({ filePath }: XeoOpenInNewTabButtonProps): ReactNode {
  return (
    <a
      target="_blank"
      href="/xeokit/examples/load-xkt-file.html"
      rel="noopener noreferrer"
      className="button button--secondary"
    >
      <span>Open in New Tab</span>
    </a>
  );
};