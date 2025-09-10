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
    logo: '/img/userLogosNew/thinkproject_transparent.png',
    alt: 'Thinkproject - Powerful solutions for the built asset lifecycle',
  },
  {
    name: 'Fieldwire by Hilti',
    logo: '/img/userLogosNew/fieldwire_hilti_transparent.png',
    alt: 'Fieldwire by Hilti - Jobsite Management For Construction Teams',
  },
  {
    name: 'Bexel Manager',
    logo: '/img/userLogosNew/bexel_transparent.png',
    alt: 'Bexel Consulting, Bexel Manager',
  },
  {
    name: 'Libal CDE',
    logo: '/img/userLogosNew/libal-cde-logo.png',
    alt: 'Libal CDE - Collaborative Data Environment',
  },
  {
    name: 'OpenProject',
    logo: '/img/userLogosNew/OpenProject-Logo-640x137.png',
    alt: 'OpenProject - Open source project management software',
    //website: 'https://www.openproject.org',
  },
  {
    name: 'SWG Service Works Global: CAFM Software',
    logo: '/img/userLogosNew/swg_transparent.png',
    alt: 'SWG Service Works Global: CAFM Software',
  },
  {
    name: 'Capmo Construction Management Software',
    logo: '/img/userLogosNew/capmo_transparent.png',
    alt: 'Capmo Construction Management Software',
  },
  {
    name: 'Madaster: The cadastre for materials and products',
    logo: '/img/userLogosNew/madaster_transparent.png',
    alt: 'Madaster - The cadastre for materials and products',
  },
  {
    name: 'Deutsche Bahn Engineering and Consulting',
    logo: '/img/userLogosNew/db_transparent.png',
    alt: 'Deutsche Bahn Engineering and Consulting',
  },
  {
    name: 'buildagil',
    logo: '/img/userLogosNew/buildagil.png',
    alt: 'buildagil: Platform and CDE for Construction Management and Collaboration',
  },
  {
    name: 'Plotjet',
    logo: '/img/userLogosNew/plotjet-logo.png',
    alt: 'Plotjet: design, plot, build',
  },
  {
    name: 'Albert-ing',
    logo: '/img/userLogosNew/albert-ing.png',
    alt: 'Albert-ing: We are your BIM partner',
  },
  {
    name: 'Augmenta',
    logo: '/img/userLogosNew/augmenta-Logo.png',
    alt: 'Augmenta: automated building design',
  },
  {
    name: 'Versatile.ai',
    logo: '/img/userLogosNew/versatile_transparent.png',
    alt: 'Versatile.ai: non-intrusive solution for collecting valuable jobsite production data',
  },
  {
    name: 'Bimspot',
    logo: '/img/userLogosNew/bimspot_transparent.png',
    alt: 'Bimspot',
  },
  {
    name: 'D-Studio',
    logo: '/img/userLogosNew/d-studio_transparent.png',
    alt: 'D-Studio',
  },
  {
    name: 'Eyeonim',
    logo: '/img/userLogosNew/eyeonim_transparent.png',
    alt: 'Eyeonim',
  },
  {
    name: 'HOK',
    logo: '/img/userLogosNew/hok.png',
    alt: 'HOK (Hellmuth, Obata + Kassabaum)',
  },
  {
    name: 'Unizite',
    logo: '/img/userLogosNew/unizite_transparent.png',
    alt: 'Unizite (Tribia)',
  },
  {
    name: 'Congrid',
    logo: '/img/userLogosNew/congrid_transparent.png',
    alt: 'Congrid',
  },
  {
    name: 'DBI Digital Building Industries',
    logo: '/img/userLogosNew/dbi_transparent.png',
    alt: 'DBI Digital Building Industries (TMM Group)',
  },
  {
    name: 'BIM Data',
    logo: '/img/userLogosNew/bimdata_transparent.png',
    alt: 'BIM Data',
  },
  {
    name: 'Fraunhofer Italia',
    logo: '/img/userLogosNew/fraunhofer_transparent.png',
    alt: ' Fraunhofer Italia',
  },
  {
    name: 'Project Networld',
    logo: '/img/userLogosNew/projectnetworld_transparent.png',
    alt: 'Project Networld: Construction project management software',
  },
  {
    name: 'AltoQi',
    logo: '/img/userLogosNew/altoqi-transparent.png',
    alt: 'AltoQi: BIM software for project and construction management',
  },
  {
    name: 'Gespro France',
    logo: '/img/userLogosNew/gespro.png',
    alt: 'Gespro France',
  },
  {
    name: 'Umas Boston University',
    logo: '/img/userLogosNew/boston_transparent.png',
    alt: 'Umas Boston University',
  },
  {
    name: 'Fonn',
    logo: '/img/userLogosNew/fonn.png',
    alt: 'Fonn Construction Project Management Software',
  },
  {
    name: 'Tekhne',
    logo: '/img/userLogosNew/tekhne_black_transparent.png',
    alt: 'Tekhne',
  },
  {
    name: 'Open Experience GmbH',
    logo: '/img/userLogosNew/open_experience_transparent.png',
    alt: 'Open Experience GmbH - Digitalisierung im Bauwesen - Mobile Mängelmanagement - Baudokumentation - 360°-Bildaufnahmen - DIGIBAU 360 - Bau-Checklisten - Bau-Tagesberichte',
  },
  {
    name: 'RWTH Aachen University',
    logo: '/img/userLogosNew/rwth_transparent.png',
    alt: 'RWTH Aachen University',
  },
  {
    name: 'Construmarket Brazil',
    logo: '/img/userLogosNew/construmarket_transparent.png',
    alt: 'Construmarket Brazil',
  },
  {
    name: 'BlindSide',
    logo: '/img/userLogosNew/blindside_transparent.png',
    alt: 'BlindSide',
  },
  {
    name: 'TMM Group',
    logo: '/img/userLogosNew/tmm.png',
    alt: 'TMM Group (DBI)',
  },
  {
    name: 'Build 365',
    logo: '/img/userLogosNew/build_365_transparent.png',
    alt: 'Build 365',
  },
  {
    name: 'Cloudbrixx',
    logo: '/img/userLogosNew/cloudbrix_transparent.png',
    alt: 'Cloudbrixx',
  },
  {
    name: 'Ark BIM',
    logo: '/img/userLogosNew/arkbim_black_transparent.png',
    alt: 'Ark BIM',
  },
  {
    name: 'CMDBuild',
    logo: '/img/userLogosNew/cmd-build.png',
    alt: 'CMDBuild',
  },
  {
    name: 'Tribia SA',
    logo: '/img/userLogosNew/tribia_transparent.png',
    alt: 'Tribia SA',
  },
  {
    name: 'Technical University Eindhoven',
    logo: '/img/userLogosNew/eindhofen_transparent.png',
    alt: 'Technical University Eindhoven',
  },
  {
    name: 'Cadline Software',
    logo: '/img/userLogosNew/cadline_transparent.png',
    alt: 'Cadlinesw Cadline Software',
  },
  {
    name: 'Pave by PMG',
    logo: '/img/userLogosNew/pmg_transparent.png',
    alt: 'Pave by PMG',
  },
  {
    name: 'Stadt Zürich BIM',
    logo: '/img/userLogosNew/stadt_zurich_transparent.png',
    alt: 'Stadt Zürich BIM Tiefbauamt: City of Zurich BIM',
  },
  {
    name: 'Vollack Group',
    logo: '/img/userLogosNew/vollack_transparent.png',
    alt: 'Vollack Group Karlsruhe: Planning Building',
  },
  {
    name: 'TUM',
    logo: '/img/userLogosNew/tum.png',
    alt: 'TUM: Technical University Munich - Technische Universität München',
  },
  {
    name: 'Bauhub',
    logo: '/img/userLogosNew/bauhub_transparent.png',
    alt: 'Bauhub connects every piece of information on your construction site',
  },
  {
    name: 'B3 Gruppe AG',
    logo: '/img/userLogosNew/B3-logo.png',
    alt: 'B3 Gruppe AG - Engineering and Management am Bau - in Construction',
  },
  {
    name: 'corner4',
    logo: '/img/userLogosNew/corner4_transparent.png',
    alt: 'corner4 - individual custom software development and cloud services',
  },
  {
    name: 'TragWerk',
    logo: '/img/userLogosNew/trag_werk_transparent.png',
    alt: 'TragWerk: Software von Ingenieuren für Ingenieure - structural engineering software',
  },
  {
    name: '3DS Group',
    logo: '/img/userLogosNew/3ds-group-logo.png',
    alt: '3DS Group: Specialising in 3D Modelling, Design, and Digital Solutions',
  },
  {
    name: 'BauApp',
    logo: '/img/userLogosNew/bauapp_logo.png',
    alt: 'BauApp: BauApp\'s new Digital Terrain Logistics Standard apps based on standardized material recognition revolutionizes the industry.',
  },
  {
    name: 'Stadt Hamburg',
    logo: '/img/userLogosNew/hamburg_transparent.png',
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
              <Heading as="h2" className={styles.usedByTitle} id="used-by">
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
