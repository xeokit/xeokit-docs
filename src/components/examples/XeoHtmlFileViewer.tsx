import {ReactNode, useState, useEffect } from 'react';

interface XeoHtmlFileViewerProps {
  filePath: string;
}

export default function XeoHtmlFileViewer({ filePath }:XeoHtmlFileViewerProps ): ReactNode {
  const [htmlContent, setHtmlContent] = useState('Loading...');

  useEffect(() => {
    fetch(filePath)
      .then(response => {
        if (!response.ok) throw new Error('Failed to load file');
        return response.text();
      })
      .then(data => setHtmlContent(data))
      .catch(err => setHtmlContent(`Error: ${err.message}`));
  }, [filePath]);

  return (
    <div style={{ margin: '1rem 0' }}>
      <pre>
        <code>
          {htmlContent}
        </code>
      </pre>
    </div>
  );
}