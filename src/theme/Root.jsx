import React from 'react';
import { CookieConsentComponent } from '@site/src/components/CookieConsent';

function Root({ children }) {
  return (
    <>
      {children}
      <CookieConsentComponent />
    </>
  );
}

export default Root;
