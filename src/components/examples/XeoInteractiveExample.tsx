import ReactNode from 'react';

interface XeoInteractiveExampleProps {
  filePath: string;
}

export default function XeoInteractiveExample({ filePath }:XeoInteractiveExampleProps ): ReactNode {
  return (
    <div>
      <div style={{ position: 'relative', height: '500px' }}>
        <iframe
          src={filePath}
          style={{
            width: '100%',
            height: '100%',
          }}
          title="Xeokit 3D Viewer"
          allow="webgl"
        />
      </div>
      <style>{`
        /* When hovering the iframe, set pointer-events to none on the body/html */

        iframe:hover + body,
        iframe:hover + html,
        body:hover:has(iframe:hover),
        html:hover:has(iframe:hover) {
          overflow: hidden;
          pointer-events: none;
          scrollbarGutter: stable
        }

        /* Ensure the iframe itself remains interactive */ 
        iframe { 
          pointer-events: auto; 
        }
      `}</style>
    </div>
  );
};