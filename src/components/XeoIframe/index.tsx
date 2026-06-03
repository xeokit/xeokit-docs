import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

interface XeoIframeProps {
  src: string;
  syncUrl?: 'path' | 'hash' | false;
}

function toDocusaurusUrl(raw: string): string {
  const m = raw.match(/^\/examples\/([^/]+)\/(?:index\.html\/)?([^/]+)\.html$/);
  return m ? `/sdk-v2/examples/${m[1]}#${m[2]}` : raw;
}

export default function XeoIframe({ src, syncUrl = false }: XeoIframeProps): ReactNode {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!syncUrl) return;

    const id = setInterval(() => {
      try {
        const outerWin = iframeRef.current?.contentWindow;
        if (!outerWin) return;

        if (syncUrl === 'path') {
          const viewer = outerWin.document.getElementById('viewer') as HTMLIFrameElement | null;
          if (viewer) {
            const raw = viewer.contentWindow?.location?.pathname;
            if (raw && !raw.endsWith('default.html')) {
              const next = toDocusaurusUrl(raw);
              if (next !== window.location.pathname + window.location.hash) {
                history.replaceState(null, '', next);
              }
            }
          }
        } else {
          const path = outerWin.location.pathname;
          const filename = path.split('/').pop()?.replace('.html', '');
          if (filename) {
            const next = window.location.pathname + '#' + filename;
            if (next !== window.location.pathname + window.location.hash) {
              history.replaceState(null, '', next);
            }
          }
        }
      } catch {
        // cross-origin guard
      }
    }, 300);

    return () => clearInterval(id);
  }, [syncUrl]);

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
          ref={iframeRef}
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
