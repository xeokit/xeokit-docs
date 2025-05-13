import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Power',
    Svg: require('@site/static/img//features/xeokit_viewer.svg').default,
    description: (
      <>
        Visualize complex, federated AEC models at full-precision, in all major browsers, including mobile.
      </>
    ),
  },
  {
    title: 'Flexibility',
    Svg: require('@site/static/img/features/computer-sourcecode.svg').default,
    description: (
      <>
        A complete JavaScript graphics toolkit for building BIM and AEC viewing applications.
      </>
    ),
  },
  {
    title: 'Freedom',
    Svg: require('@site/static/img/features/computer-gear.svg').default,
    description: (
      <>
        Open-source components to build your own product, your way. Keep everything on your own servers.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
