import clsx from 'clsx';
import Heading from '@theme/Heading';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type CompanyItem = {
  name: string;
  logo: string;
  alt: string;
  website?: string;
};

const CompanyList: CompanyItem[] = [
  {
    name: 'Thinkproject',
    logo: '/img/userLogos/Thinkproject_Negative.png',
    alt: 'Thinkproject - Powerful solutions for the built asset lifecycle',
  },
  {
    name: 'Fieldwire by Hilti',
    logo: '/img/userLogos/Fieldwire-by-Hilti-Logo.png',
    alt: 'Fieldwire by Hilti - Jobsite Management For Construction Teams',
  },
  {
    name: 'Bexel Manager',
    logo: '/img/userLogos/bexel.jpeg',
    alt: 'Bexel Consulting, Bexel Manager',
  },
  {
    name: 'Libal CDE',
    logo: '/img/userLogos/libal-cde-logo.png',
    alt: 'Libal CDE - Collaborative Data Environment',
  },
  {
    name: 'OpenProject',
    logo: '/img/userLogos/OpenProject-Logo-640x137.png',
    alt: 'OpenProject - Open source project management software',
    //website: 'https://www.openproject.org',
  },
  {
    name: 'SWG Service Works Global: CAFM Software',
    logo: '/img/userLogos/swg-logo.png',
    alt: 'SWG Service Works Global: CAFM Software',
  },
  {
    name: 'Capmo Construction Management Software',
    logo: '/img/userLogos/Capmo_Logo_basic.png',
    alt: 'Capmo Construction Management Software',
  },
  {
    name: 'Madaster: The cadastre for materials and products',
    logo: '/img/userLogos/Madaster-logo.png',
    alt: 'Madaster - The cadastre for materials and products',
  },
  {
    name: 'Deutsche Bahn Engineering and Consulting',
    logo: '/img/userLogos/Logo_DB-EC-Part-of-ECO-Group.png',
    alt: 'Deutsche Bahn Engineering and Consulting',
  },
  {
    name: 'buildagil',
    logo: '/img/userLogos/logo-buildagil-neg.png',
    alt: 'buildagil: Platform and CDE for Construction Management and Collaboration',
  },
  {
    name: 'Plotjet',
    logo: '/img/userLogos/plotjet-logo.png',
    alt: 'Plotjet: design, plot, build',
  },
  {
    name: 'Albert-ing',
    logo: '/img/userLogos/albert.ing_Logo_CMYK.jpg',
    alt: 'Albert-ing: We are your BIM partner',
  },
  {
    name: 'Augmenta',
    logo: '/img/userLogos/augmenta-Logo.png',
    alt: 'Augmenta: automated building design',
  },
  {
    name: 'Versatile.ai',
    logo: '/img/userLogos/versatile-logo.png',
    alt: 'Versatile.ai: non-intrusive solution for collecting valuable jobsite production data',
  },
  {
    name: 'Bimspot',
    logo: '/img/userLogos/bimspot.png',
    alt: 'Bimspot',
  },
  {
    name: 'Singular',
    logo: '/img/userLogos/singular.jpg',
    alt: 'Singular',
  },
  {
    name: 'D-Studio',
    logo: '/img/userLogos/dstudio-logo.png',
    alt: 'D-Studio',
  },
  {
    name: 'Eyeonim',
    logo: '/img/userLogos/eyeonim-logo.png',
    alt: 'Eyeonim',
  },
  {
    name: 'HOK',
    logo: '/img/userLogos/hok-logo.jpg',
    alt: 'HOK (Hellmuth, Obata + Kassabaum)',
  },
  {
    name: 'Unizite',
    logo: '/img/userLogos/unizite-logo.png',
    alt: 'Unizite (Tribia)',
  },
  {
    name: 'Congrid',
    logo: '/img/userLogos/congrid.png',
    alt: 'Congrid',
  },
  {
    name: 'DBI Digital Building Industries',
    logo: '/img/userLogos/dbi.jpg',
    alt: 'DBI Digital Building Industries (TMM Group)',
  },
  {
    name: 'BIM Data',
    logo: '/img/userLogos/bimdata-logo.png',
    alt: 'BIM Data',
  },
  {
    name: 'Fraunhofer Italia',
    logo: '/img/userLogos/italia_190x52.gif',
    alt: ' Fraunhofer Italia',
  },
  {
    name: 'Project Networld',
    logo: '/img/userLogos/projectNetworld-logo.png',
    alt: 'Project Networld: Construction project management software',
  },
  {
    name: 'AltoQi',
    logo: '/img/userLogos/altoqi-logo.png',
    alt: 'AltoQi: BIM software for project and construction management',
  },
  {
    name: 'Gespro France',
    logo: '/img/userLogos/gespro.png',
    alt: 'Gespro France',
  },
  {
    name: 'Umas Boston University',
    logo: '/img/userLogos/umas-logo.png',
    alt: 'Umas Boston University',
  },
  {
    name: 'Fonn',
    logo: '/img/userLogos/fonn.png',
    alt: 'Fonn Construction Project Management Software',
  },
  {
    name: 'Tekhne',
    logo: '/img/userLogos/tekhne.png',
    alt: 'Tekhne',
  },
  {
    name: 'Open Experience GmbH',
    logo: '/img/userLogos/open-experience-gmbh-logo.png',
    alt: 'Open Experience GmbH - Digitalisierung im Bauwesen - Mobile Mängelmanagement - Baudokumentation - 360°-Bildaufnahmen - DIGIBAU 360 - Bau-Checklisten - Bau-Tagesberichte',
  },
  {
    name: 'RWTH Aachen University',
    logo: '/img/userLogos/rwth-aachen-university.png',
    alt: 'RWTH Aachen University',
  },
  {
    name: 'Construmarket Brazil',
    logo: '/img/userLogos/construmarket.png',
    alt: 'Construmarket Brazil',
  },
  {
    name: 'BlindSide',
    logo: '/img/userLogos/blindSide.png',
    alt: 'BlindSide',
  },
  {
    name: 'TMM Group',
    logo: '/img/userLogos/tmm.png',
    alt: 'TMM Group (DBI)',
  },
  {
    name: 'Build 365',
    logo: '/img/userLogos/Build365.png',
    alt: 'Build 365',
  },
  {
    name: 'Cloudbrixx',
    logo: '/img/userLogos/cloudbrixx.png',
    alt: 'Cloudbrixx',
  },
  {
    name: 'Ark BIM',
    logo: '/img/userLogos/ark-bim.png',
    alt: 'Ark BIM',
  },
  {
    name: 'CMDBuild',
    logo: '/img/userLogos/cmd-build.png',
    alt: 'CMDBuild',
  },
  {
    name: 'Tribia',
    logo: '/img/userLogos/tribia.jpg',
    alt: 'Tribia',
  },
  {
    name: 'Technical University Eindhoven',
    logo: '/img/userLogos/eindhoven-logo.png',
    alt: 'Technical University Eindhoven',
  },
  {
    name: 'Cadline Software',
    logo: '/img/userLogos/cadline.png',
    alt: 'Cadlinesw Cadline Software',
  },
  {
    name: 'Pave by PMG',
    logo: '/img/userLogos/pmg.png',
    alt: 'Pave by PMG',
  },
  {
    name: 'Stadt Zürich BIM',
    logo: '/img/userLogos/stadt-zuerich-logo.png',
    alt: 'Stadt Zürich BIM Tiefbauamt: City of Zurich BIM',
  },
  {
    name: 'Vollack Group',
    logo: '/img/userLogos/vollack.jpg',
    alt: 'Vollack Group Karlsruhe: Planning Building',
  },
  {
    name: 'TUM',
    logo: '/img/userLogos/TUM-Munich-logo.png',
    alt: 'TUM: Technical University Munich - Technische Universität München',
  },
  {
    name: 'Bauhub',
    logo: '/img/userLogos/bauhub-logo.png',
    alt: 'Bauhub connects every piece of information on your construction site',
  },
  {
    name: 'B3 Gruppe AG',
    logo: '/img/userLogos/B3-logo.png',
    alt: 'B3 Gruppe AG - Engineering and Management am Bau - in Construction',
  },
  {
    name: 'corner4',
    logo: '/img/userLogos/logo-corner4.png',
    alt: 'corner4 - individual custom software development and cloud services',
  },
  {
    name: 'TragWerk',
    logo: '/img/userLogos/tragwerk-logo.png',
    alt: 'TragWerk: Software von Ingenieuren für Ingenieure - structural engineering software',
  },
  {
    name: '3DS Group',
    logo: '/img/userLogos/3ds-group-logo.png',
    alt: '3DS Group: Specialising in 3D Modelling, Design, and Digital Solutions',
  },
  {
    name: 'BauApp',
    logo: '/img/userLogos/bauapp-logo.png',
    alt: 'BauApp: BauApp\'s new Digital Terrain Logistics Standard apps based on standardized material recognition revolutionizes the industry.',
  },
  {
    name: 'Stadt Hamburg',
    logo: '/img/userLogos/Logo-Stadt-Hamburg.jpg',
    alt: 'Stadt Hamburg',
  },
];

function Company({ name, logo, alt, website }: CompanyItem) {
  const content = (
    <div className={clsx('col col--3', styles.company)}>
      <div className={styles.companyLogo}>
        <img src={logo} alt={alt} />
      </div>
    </div>
  );

  if (website) {
    return (
      <a href={website} target="_blank" rel="noopener noreferrer" className={styles.companyLink}>
        {content}
      </a>
    );
  }

  return content;
}

export default function HomepageUsedBy(): ReactNode {
  return (
    <section className={styles.usedBy}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <div className="text--center margin-bottom--lg">
              <Heading as="h2" className={styles.usedByTitle}>
                Used by Industry Leaders
              </Heading>
              {/* <p className={styles.usedBySubtitle}>
                xeokit powers 3D visualization solutions for leading companies worldwide
              </p> */}
            </div>
          </div>
        </div>
        <div className="row">
          {CompanyList.map((props, idx) => (
            <Company key={idx} {...props} />
          ))}
        </div>

        <div className="row">
          <div className="col col--12 text--center">
            <a
              className="button button--secondary button--lg"
              href="#testimonials">Read user stories »</a>
          </div>
        </div>
      </div>

    </section>
  );
}
