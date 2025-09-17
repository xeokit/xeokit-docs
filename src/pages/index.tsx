import clsx from 'clsx';
import FAQ from '@site/src/components/FAQ';
import Heading from '@theme/Heading';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeaturesSection from '@site/src/components/HomepageFeaturesSection';
import HomepageUsedBy from '@site/src/components/HomepageUsedBy';
import Layout from '@theme/Layout';
import Pricing from '@site/src/components/Pricing';
import type { ReactNode } from 'react';
import styles from './index.module.css';
import UsersSay from '@site/src/components/UsersSay';


function HomepageHeader() {
  return (
    <header className={clsx('', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="" style={{ fontSize: '3rem' }}>
          Build 3D BIM & AEC Web Apps with xeokit SDK
        </Heading>

        <p className="" style={{ fontSize: '1.5rem', maxWidth: '800px', textAlign: 'center', margin: '1rem auto 0 auto' }}>
          Open-source WebGL toolkit for BIM and AEC. Trusted by industry leaders to visualize IFC, BCF, point clouds with speed and precision.
        </p>

        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg margin-right--md"
            href="/sdk-v2/examples/xeokit-bim-viewer">Run a Demo »</a>

          <a
            className="button button--secondary button--lg"
            href="https://xeo.vision/">View Your Models with xeoVision »</a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title={`Build Faster 3D Web Apps for BIM`}
      description="Build high-performance 3D BIM IFC web apps with open-source xeokit SDK. WebGL-based, fully customizable with double precision global coordinates for GIS.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageUsedBy />
        <HomepageFeaturesSection />
        <UsersSay />
        <Pricing />
        <FAQ />
      </main>
    </Layout>
  );
}
