import clsx from 'clsx';
import Heading from '@theme/Heading';
import type { ReactNode } from 'react';
import styles from './styles.module.css';


type FeatureItem = {
  title: string;
  img: string;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Power',
    img: '/img/features/xeokit-viewer.png',
    description: (
      <>
        Visualize complex, federated AEC models at full-precision, in all major browsers, including mobile.
      </>
    ),
  },
  {
    title: 'Flexibility',
    img: '/img/features/computer-sourcecode.png',
    description: (
      <>
        A complete JavaScript graphics toolkit for building BIM and AEC viewing applications.
      </>
    ),
  },
  {
    title: 'Freedom',
    img: '/img/features/computer-gear.png',
    description: (
      <>
        Open-source components to build your own product, your way. Keep everything on your own servers.
      </>
    ),
  },
];

function Feature({ title, img, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="content-center">
        <img className={styles.featureImg} src={img} alt={title} />
      </div>
      <div className="content-center mx-2 font-black text--center">
        <Heading as="h3" className='text--center'>{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
