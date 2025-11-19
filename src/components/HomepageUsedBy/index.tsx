import clsx from 'clsx';
import Heading from '@theme/Heading';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

type CompanyItem = {
  name: string;
  logo: string;
  alt: string;
  link?: string;
};

const CompanyList: CompanyItem[] = [
  {
    name: 'Thinkproject',
    logo: '/img/user-logos/thinkproject_transparent.png',
    alt: 'Thinkproject - Powerful solutions for the built asset lifecycle',
  },
  {
    name: 'Fieldwire by Hilti',
    logo: '/img/user-logos/fieldwire_hilti_transparent.png',
    alt: 'Fieldwire by Hilti - Jobsite Management For Construction Teams',
  },
  {
    name: 'Bexel Manager',
    logo: '/img/user-logos/bexel_transparent.png',
    alt: 'Bexel Consulting, Bexel Manager',
    link: '/success-stories/revolutionizing-bim-visualization-through-high-performance-xeokit-sdk-implementation-in-bexel-manager',
  },
  {
    name: 'Libal CDE',
    logo: '/img/user-logos/libal-cde.png',
    alt: 'Libal CDE - Collaborative Data Environment',
  },
  {
    name: 'OpenProject',
    logo: '/img/user-logos/open_project_transparent.png',
    alt: 'OpenProject - Open source project management software',
  },
  {
    name: 'SWG Service Works Global: CAFM Software',
    logo: '/img/user-logos/swg_transparent.png',
    alt: 'SWG Service Works Global: CAFM Software',
  },
  {
    name: 'Capmo Construction Management Software',
    logo: '/img/user-logos/capmo_transparent.png',
    alt: 'Capmo Construction Management Software',
  },
  {
    name: 'Madaster: The cadastre for materials and products',
    logo: '/img/user-logos/madaster_transparent.png',
    alt: 'Madaster - The cadastre for materials and products',
  },
  {
    name: 'Deutsche Bahn Engineering and Consulting',
    logo: '/img/user-logos/db_transparent.png',
    alt: 'Deutsche Bahn Engineering and Consulting',
  },
  {
    name: 'buildagil',
    logo: '/img/user-logos/buildagil.png',
    alt: 'buildagil: Platform and CDE for Construction Management and Collaboration',
  },
  {
    name: 'Plotjet',
    logo: '/img/user-logos/plotjet-logo.png',
    alt: 'Plotjet: design, plot, build',
  },
  {
    name: 'Albert-ing',
    logo: '/img/user-logos/albert-ing.png',
    alt: 'Albert-ing: We are your BIM partner',
  },
  {
    name: 'Augmenta',
    logo: '/img/user-logos/augmenta.png',
    alt: 'Augmenta: automated building design',
  },
  {
    name: 'Versatile.ai',
    logo: '/img/user-logos/versatile_transparent.png',
    alt: 'Versatile.ai: non-intrusive solution for collecting valuable jobsite production data',
  },
  {
    name: 'Bimspot',
    logo: '/img/user-logos/bimspot_transparent.png',
    alt: 'Bimspot',
  },
  {
    name: 'D-Studio',
    logo: '/img/user-logos/d-studio_transparent.png',
    alt: 'D-Studio',
  },
  {
    name: 'Eyeonim',
    logo: '/img/user-logos/eyeonim_transparent.png',
    alt: 'Eyeonim',
  },
  {
    name: 'HOK',
    logo: '/img/user-logos/hok.png',
    alt: 'HOK (Hellmuth, Obata + Kassabaum)',
  },
  {
    name: 'Interaxo',
    logo: '/img/user-logos/interaxo_transparent.png',
    alt: 'Interaxo',
  },
  {
    name: 'Congrid',
    logo: '/img/user-logos/congrid_transparent.png',
    alt: 'Congrid',
  },
  {
    name: 'DBI Digital Building Industries',
    logo: '/img/user-logos/dbi_transparent.png',
    alt: 'DBI Digital Building Industries (TMM Group)',
  },
  {
    name: 'BIM Data',
    logo: '/img/user-logos/bimdata_transparent.png',
    alt: 'BIM Data',
  },
  {
    name: 'Fraunhofer Italia',
    logo: '/img/user-logos/fraunhofer_transparent.png',
    alt: ' Fraunhofer Italia',
  },
  {
    name: 'Project Networld',
    logo: '/img/user-logos/projectnetworld_transparent.png',
    alt: 'Project Networld: Construction project management software',
  },
  {
    name: 'AltoQi',
    logo: '/img/user-logos/altoqi-transparent.png',
    alt: 'AltoQi: BIM software for project and construction management',
  },
  {
    name: 'Gespro France',
    logo: '/img/user-logos/gespro.png',
    alt: 'Gespro France',
  },
  {
    name: 'Umas Boston University',
    logo: '/img/user-logos/boston_transparent.png',
    alt: 'Umas Boston University',
  },
  {
    name: 'Fonn',
    logo: '/img/user-logos/fonn_transparent.png',
    alt: 'Fonn Construction Project Management Software',
  },
  {
    name: 'Netprojet',
    logo: '/img/user-logos/netproject-transparent.png',
    alt: 'Netprojet',
  },
  {
    name: 'Open Experience GmbH',
    logo: '/img/user-logos/open_experience_transparent.png',
    alt: 'Open Experience GmbH - Digitalisierung im Bauwesen - Mobile Mängelmanagement - Baudokumentation - 360°-Bildaufnahmen - DIGIBAU 360 - Bau-Checklisten - Bau-Tagesberichte',
  },
  {
    name: 'RWTH Aachen University',
    logo: '/img/user-logos/rwth_transparent.png',
    alt: 'RWTH Aachen University',
  },
  {
    name: 'Construmarket Brazil',
    logo: '/img/user-logos/construmarket_transparent.png',
    alt: 'Construmarket Brazil',
  },
  {
    name: 'Dr Heinekamp',
    logo: '/img/user-logos/heinekamp_transparent.png',
    alt: 'Dr Heinekamp',
  },
  {
    name: 'TMM Group',
    logo: '/img/user-logos/tmm.png',
    alt: 'TMM Group (DBI)',
  },
  {
    name: 'Build 365',
    logo: '/img/user-logos/build_365_transparent.png',
    alt: 'Build 365',
  },
  {
    name: 'Cloudbrixx',
    logo: '/img/user-logos/cloudbrix_transparent.png',
    alt: 'Cloudbrixx',
  },
  {
    name: 'Ark BIM',
    logo: '/img/user-logos/arkbim_black_transparent.png',
    alt: 'Ark BIM',
  },
  {
    name: 'CMDBuild',
    logo: '/img/user-logos/cmd-build.png',
    alt: 'CMDBuild',
  },
  {
    name: 'Tribia SA',
    logo: '/img/user-logos/tribia_transparent.png',
    alt: 'Tribia SA',
  },
  {
    name: 'Technical University Eindhoven',
    logo: '/img/user-logos/eindhofen_transparent.png',
    alt: 'Technical University Eindhoven',
  },
  {
    name: 'Cadline Software',
    logo: '/img/user-logos/cadline_transparent.png',
    alt: 'Cadlinesw Cadline Software',
  },
  {
    name: 'Pave by PMG',
    logo: '/img/user-logos/pmg_transparent.png',
    alt: 'Pave by PMG',
  },
  {
    name: 'Stadt Zürich BIM',
    logo: '/img/user-logos/stadt_zurich_transparent.png',
    alt: 'Stadt Zürich BIM Tiefbauamt: City of Zurich BIM',
    link: '/success-stories/how-zurich-enables-digital-civic-participation-through-a-3d-bim-viewer',
  },
  {
    name: 'Vollack Group',
    logo: '/img/user-logos/vollack_transparent.png',
    alt: 'Vollack Group Karlsruhe: Planning Building',
  },
  {
    name: 'TUM',
    logo: '/img/user-logos/tum.png',
    alt: 'TUM: Technical University Munich - Technische Universität München',
  },
  {
    name: 'Bauhub',
    logo: '/img/user-logos/bauhub_transparent.png',
    alt: 'Bauhub connects every piece of information on your construction site',
  },
  {
    name: 'B3 Gruppe AG',
    logo: '/img/user-logos/b3.png',
    alt: 'B3 Gruppe AG - Engineering and Management am Bau - in Construction',
  },
  {
    name: 'corner4',
    logo: '/img/user-logos/corner4_transparent.png',
    alt: 'corner4 - individual custom software development and cloud services',
  },
  {
    name: 'TragWerk',
    logo: '/img/user-logos/trag_werk_transparent.png',
    alt: 'TragWerk: Software von Ingenieuren für Ingenieure - structural engineering software',
  },
  {
    name: '3DS Group',
    logo: '/img/user-logos/3ds-group-logo.png',
    alt: '3DS Group: Specialising in 3D Modelling, Design, and Digital Solutions',
  },
  {
    name: 'BauApp',
    logo: '/img/user-logos/bauapp_logo.png',
    alt: 'BauApp: BauApp\'s new Digital Terrain Logistics Standard apps based on standardized material recognition revolutionizes the industry.',
  },
  {
    name: 'Stadt Hamburg',
    logo: '/img/user-logos/hamburg_transparent.png',
    alt: 'Stadt Hamburg',
  },
];

function Company({ name, logo, alt, link }: CompanyItem) {
  const content = (
    <div className={clsx('col col--3', styles.company)}>
      <div className={styles.companyLogo}>
        {link ? <a href={link}><img src={logo} alt={alt} /></a> : <img src={logo} alt={alt} /> }
      </div>
    </div>
  );

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
              href="/success-stories">Read success stories »</a>
          </div>
        </div>
      </div>

    </section>
  );
}
