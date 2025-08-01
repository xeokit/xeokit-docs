import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  buttonText: string;
  buttonUrl: string;
  isPopular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Open-Source License",
    price: "FREE",
    description: "Under the terms of the AGPL-3.0 license",
    features: [
      "Complete xeokit SDK",
      "All plugins and tools",
      "Community support",
      "Open-source restrictions apply",
    ],
    buttonText: "Get Started",
    buttonUrl: "/sdk-v2/api-doc/xeokit-sdk",
  },
  {
    title: "Custom License",
    price: "Contact Us",
    description: "Offered by Creoox AG",
    features: [
      "Custom and proprietary license",
      "No open-source restrictions",
      "High level support",
      "Flexible terms",
    ],
    buttonText: "Get in Contact",
    buttonUrl: "https://creoox.com/contact_us/",
    isPopular: true,
  },
];

export default function Pricing(): ReactNode {
  return (
    <section id="pricing" className={styles.pricing}>
      <div className="container">
        <div className="text--center">
          <h2 className={styles.title}>Pricing</h2>
          <p className={styles.subtitle}>
            The xeokit SDK is open-source software, licensed under the{' '}
            <a href="https://github.com/xeokit/xeokit-sdk/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">
              Affero GPL version 3
            </a>{' '}
            license.
          </p>
          <p className={styles.subtitle}>
            We also offer custom proprietary licenses for enterprise with full support.
          </p>
        </div>

        <div className={styles.pricingGrid}>
          {pricingPlans.map((plan, idx) => (
            <div key={idx} className={clsx(styles.pricingCard, plan.isPopular && styles.popular)}>

              <div className={styles.cardHeader}>
                <h3 className={styles.planTitle}>{plan.title}</h3>
                <div className={styles.price}>{plan.price}</div>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              <div className={styles.cardBody}>
                <ul className={styles.featureList}>
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className={styles.feature}>
                      <span className={styles.checkmark}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.cardFooter}>
                <a
                  href={plan.buttonUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    'button',
                    'button--lg',
                    plan.isPopular ? 'button--primary' : 'button--outline',
                    styles.ctaButton,
                  )}
                >
                  {plan.buttonText} »
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.agplInfo}>
          <h3 className={styles.agplTitle}>What does AGPL-3.0 mean for my project?</h3>
          <blockquote className={styles.agplQuote}>
            Permissions of this strongest copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved.
          </blockquote>
          <p className={styles.agplSource}>
            According to GitHub's{' '}
            <a href="https://choosealicense.com/licenses/agpl-3.0/" target="_blank" rel="noopener noreferrer">
              choosealicense.com
            </a>
          </p>
        </div>

        <div className={styles.whatsIncluded}>
          <h3 className={styles.includedTitle}>What's included</h3>
          <p className={styles.includedDescription}>
            The licenses give you everything in the{' '}
            <a href="https://github.com/xeokit" target="_blank" rel="noopener noreferrer">
              xeokit repositories
            </a>{' '}
            on GitHub and npm, including:
          </p>

          <div className={styles.includedItems}>
            <div className={styles.includedItem}>
              <h4 className={styles.itemTitle}>
                <a href="https://github.com/xeokit/xeokit-sdk" target="_blank" rel="noopener noreferrer">
                  xeokit-sdk
                </a>
              </h4>
              <p className={styles.itemDescription}>The xeokit SDK and plugins.</p>
            </div>

            <div className={styles.includedItem}>
              <h4 className={styles.itemTitle}>
                <a href="https://xeokit.github.io/xeokit-bim-viewer/" target="_blank" rel="noopener noreferrer">
                  xeokit-bim-viewer
                </a>
              </h4>
              <p className={styles.itemDescription}>
                A customizable IFC viewer built on xeokit, in collaboration with{' '}
                <a href="https://openproject.org" target="_blank" rel="noopener noreferrer">
                  OpenProject
                </a>{' '}
                - try our{' '}
                <a href="/sdk-v2/examples/xeokit-bim-viewer" target="_blank" rel="noopener noreferrer">
                  demos
                </a>!
              </p>
            </div>

            <div className={styles.includedItem}>
              <h4 className={styles.itemTitle}>
                <a href="https://github.com/xeokit/xeokit-convert" target="_blank" rel="noopener noreferrer">
                  xeokit-convert
                </a>
              </h4>
              <p className={styles.itemDescription}>
                CLI tool and JavaScript toolkit to convert various AEC model formats to xeokit's optimized native XKT model format.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.enterpriseTools}>
          <h3 className={styles.enterpriseTitle}>Enterprise tools</h3>
          <p className={styles.enterpriseDescription}>
            We also offer closed-source tools, under a custom license:
          </p>

          <div className={styles.enterpriseItem}>
            <h4 className={styles.itemTitle}>
              <a href="https://github.com/Creoox/creoox-ifc2gltfcxconverter/releases" target="_blank" rel="noopener noreferrer">
                cxConverter
              </a>
            </h4>
            <p className={styles.itemDescription}>
              High-performance CLI tool from{' '}
              <a href="https://creoox.com/contact_us/" target="_blank" rel="noopener noreferrer">
                Creoox AG
              </a>{' '}
              for converting IFC (2x3 and 4.3) into binary glTF (GLB) and metadata files, for convert2xkt to convert into XKT, for fast loading into xeokit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
