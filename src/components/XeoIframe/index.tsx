import type { ReactNode } from 'react';

interface XeoIframeProps {
  src: string;
}

export default function XeoIframe({ src }: XeoIframeProps): ReactNode {
  return (
    <div>

      <div style={{
        width: '100%',
        height: 'calc(100vh - var(--ifm-navbar-height))',
        overflow: 'hidden',
        margin: 0,
        padding: '5px',
      }}>
        <iframe
          src={src}
          style={{
            width: '100%',
            height: '100%',
            border: 'none',
          }}
          allowFullScreen
        />
      </div>
      <style>{`
        .footer {
          display: none;
        }
      `}</style>
    </div>

  );
}