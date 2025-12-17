'use client';

import { useEffect, useState } from "react";
import * as CookieConsent from "./cookieconsent.esm.js";
import Clarity from './clarity';

const GOOGLE_ANALYTICS_ID = 'G-9VRQEEM351';
const CLARITY_PROJECT_ID = 'nml0pjdlbw';

declare const window: Window & { dataLayer: Record<string, unknown>[]; };

const updateCookieConsent = () => {
  CookieConsent.showPreferences();
};

const resetCookieConsent = () => {
  CookieConsent.reset(true);
};

const listenForConsent = (state: any) => {
  if ((window as any)._ccRun) return;

  window.dataLayer = window.dataLayer || [];
  function gtag(arg0: string, arg1: string | Date, arg2?: { [x: string]: string; }) {
    (window as any).dataLayer.push(arg0, arg1, arg2);
  }

  gtag('consent', 'default', {
    'ad_storage': 'denied',
    'ad_user_data': 'denied',
    'ad_personalization': 'denied',
    'analytics_storage': 'denied',
    'functionality_storage': 'denied',
    'personalization_storage': 'denied',
    'security_storage': 'granted',
  });

  state.setLoadScript(true);

  gtag('js', new Date());
  gtag('config', GOOGLE_ANALYTICS_ID);

  const updateGtagConsent = () => {
    console.log('CookieConsent.acceptedCategory("advertisement")', CookieConsent.acceptedCategory('advertisement'));
    console.log('CookieConsent.acceptedCategory("analytics")', CookieConsent.acceptedCategory('analytics'));
    console.log('CookieConsent.acceptedCategory("functional")', CookieConsent.acceptedCategory('functional'));
    gtag('consent', 'update', {
      'ad_storage': CookieConsent.acceptedCategory('advertisement') ? 'granted' : 'denied',
      'ad_user_data': CookieConsent.acceptedCategory('advertisement') ? 'granted' : 'denied',
      'ad_personalization': CookieConsent.acceptedCategory('advertisement') ? 'granted' : 'denied',
      'analytics_storage': CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
      'functionality_storage': CookieConsent.acceptedCategory('functional') ? 'granted' : 'denied',
      'personalization_storage': CookieConsent.acceptedCategory('functional') ? 'granted' : 'denied',
      'security_storage': 'granted', //necessary
    });
  };

  const updateClarityConsent = () => {
    console.log('CookieConsent.acceptedCategory("advertisement")', CookieConsent.acceptedCategory('advertisement'));
    console.log('CookieConsent.acceptedCategory("analytics")', CookieConsent.acceptedCategory('analytics'));
    Clarity.consentV2({
      ad_Storage: CookieConsent.acceptedCategory('advertisement') ? 'granted' : 'denied',
      analytics_Storage: CookieConsent.acceptedCategory('analytics') ? 'granted' : 'denied',
    });
  };

  Clarity.init(CLARITY_PROJECT_ID);

  window.addEventListener('cc:onConsent', () => {
    updateGtagConsent();
    updateClarityConsent();
  });

  window.addEventListener('cc:onChange', () => {
    updateGtagConsent();
    updateClarityConsent();
  });
};

const CookieConsentComponent = () => {
  const [loadScript, setLoadScript] = useState(false);

  useEffect(() => {
    listenForConsent({ setLoadScript });

    CookieConsent.run({
      mode: 'opt-out',
      autoShow: false,
      guiOptions: {
        consentModal: {
          layout: 'cloud inline',
          position: 'bottom center',
          equalWeightButtons: true,
          flipButtons: false,
        },
      },
      categories: {
        necessary: {
          enabled: true,
          readOnly: true,
        },
        functional: {},
        analytics: {
          autoClear: {
            cookies: [{ name: /^(_ga|_gid)/ },
            ],
          },
        },
        advertisement: {},
      },
      language: {
        default: 'en',
        translations: {
          en: {
            consentModal: {
              title: 'Help Us Improve xeokit.io',
              description: `We use a few analytics cookies to make the site better. No ads, no tracking across websites.`,
              acceptAllBtn: 'Accept',
              acceptNecessaryBtn: 'Reject',
              showPreferencesBtn: 'Manage Preferences',
            },
            preferencesModal: {
              title: 'Manage preferences',
              acceptAllBtn: 'Accept',
              acceptNecessaryBtn: 'Reject',
              savePreferencesBtn: 'Save Preferences',
              closeIconLabel: 'Close modal',
              serviceCounterLabel: 'Service|Services',
              sections: [
                {
                  title: 'Your Privacy Choices',
                  description: `We use a few analytics cookies to make the site better. No ads, no tracking across websites.`,
                },
                {
                  title: 'Necessary',
                  description: 'Necessary cookies are required to enable the basic features of this site, such as color theme selection or adjusting your consent preferences. These cookies do not store any personally identifiable data.',
                  linkedCategory: 'necessary',
                },
                {
                  title: 'Analytical',
                  description: 'Analytics cookies help us understand how the site is used by enabling aggregated and anonymized measurement of usage and performance statistics (e.g. MS Clarity, GA4).',
                  linkedCategory: 'analytics',
                },
                {
                  title: 'More information',
                  description: 'For more information, please refer to our <a href="/docs/privacy-policy">Privacy Policy</a>.',
                },
              ],
            },
          },
        },
      },
    });

    function getCookie(cname: string): string {
      const name = cname + "=";
      const decodedCookie = decodeURIComponent(document.cookie);
      const ca = decodedCookie.split(';');
      for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }

    const cookieConsent = getCookie('cc_cookie');

    if (!cookieConsent) {
      setTimeout(() => {
        CookieConsent.show(true);

        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
          const ccMain = document.getElementById('cc-main');
          if (ccMain) {
            ccMain.classList.add('cc--darkmode');
          }
        }
      }, 1000);
    }
  }, []);

  return (
    <>
      {loadScript && (<script async src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}></script>)}
    </>
  );
};

export { updateCookieConsent, resetCookieConsent, CookieConsentComponent }