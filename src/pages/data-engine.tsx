import clsx from 'clsx';
import Layout from '@theme/Layout';

import type { ReactNode } from 'react';
import styles from './data-engine.module.css';

const FORM_URL = 'https://2fvgt6.share-eu1.hsforms.com/2qu5BGEmwQbSspcfttVbjvw';
const XEOVISION_URL = 'https://xeo.vision/';

export default function DataEngine(): ReactNode {
  return (
    <Layout
      title="xeokit Data Engine — Convert BIM & 3D Data to Open, Web-Ready Outputs"
      description="xeokit Data Engine transforms BIM and 3D engineering data (IFC, Revit, STEP and more) into open, web-ready outputs. Scalable pipelines, full data sovereignty, deploy as a managed service or in your own environment.">

      <div className={styles.page}>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={styles.wrap}>
            <div>
              <span className={styles.eyebrow}>xeokit Data Engine</span>
              <h1>Turn BIM &amp; 3D engineering data into <em>open, web-ready outputs</em></h1>
              <p className={styles.lead}>Enterprise-grade data processing for transforming BIM and 3D engineering data into open data formats — ready for your AI, automation, web applications, and many other use cases.</p>
              <div className={styles.actions}>
                <a className={clsx(styles.btn, styles.btnPrimary)} href={FORM_URL} target='_blank' rel='noopener noreferrer'>Request Evaluation Access</a>
                <a className={clsx(styles.btn, styles.btnGhost, styles.btnOnDark)} href={XEOVISION_URL} target='_blank' rel='noopener noreferrer'>View in xeoVision</a>
              </div>
            </div>
            <figure className={styles.heroFigure}>
              <img src="/img/data-engine/data-layers.svg" alt="xeokit Data Engine data layers: geometry (meshes), properties (attributes) and relationships (spatial tree) on the left, produced as open outputs XKT, glTF/GLB and JSON on the right." />
            </figure>
          </div>
        </section>

        {/* WHAT */}
        <section>
          <div className={styles.wrap}>
            <div className={styles.what}>
              <h2>What is xeokit Data Engine?</h2>
              <p>xeokit Data Engine is the data processing layer of xeokit. It runs consistent, scalable pipelines that extract, prepare, and produce <strong>open outputs</strong> from BIM and 3D engineering data — designed for flexibility, performance, scalability, and operational <strong>independence</strong>.</p>
            </div>
            <figure className={styles.diagramFig}>
              <img src="/img/data-engine/data-engine-diagram.svg" alt="xeokit Data Engine pipeline: BIM and 3D inputs (IFC, RVT/RFA, STEP, NWD, iModel, RVM) are parsed, normalized and optimized by the engine, producing open outputs (JSON, GLB, XKT) that can be deployed as a managed web service, dedicated server, or in your own environment." />
            </figure>
          </div>
        </section>

        {/* SUPPORTED FORMATS */}
        <section className={styles.alt}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>Supported source formats</h2>
              <p>xeokit Data Engine is built to support an expanding range of relevant formats in the AECO industry. As of today, it supports:</p>
            </div>
            <div className={styles.supportedFormats}>
              <a className={styles.mod} href="#">
                <span className={clsx(styles.badge, styles.badgeLive)}>Available</span>
                <div className={styles.modCode}>xeoIFC</div>
                <div className={styles.modFmt}>IFC (IFC 2x3, 4, 4.3)</div>
                <span className={styles.arrow}>Learn more →</span>
              </a>
              <a className={styles.mod} href="/xeorvt">
                <span className={clsx(styles.badge, styles.badgeLive)}>Available</span>
                <div className={styles.modCode}>xeoRVT</div>
                <div className={styles.modFmt}>Autodesk® Revit® (RVT / RFA)</div>
                <span className={styles.arrow}>Learn more →</span>
              </a>
              <a className={styles.mod} href="#">
                <span className={clsx(styles.badge, styles.badgeLive)}>Available</span>
                <div className={styles.modCode}>xeoSTEP</div>
                <div className={styles.modFmt}>STEP / STP</div>
                <span className={styles.arrow}>Learn more →</span>
              </a>
              <div className={styles.mod}>
                <span className={clsx(styles.badge, styles.badgeSoon)}>Coming soon</span>
                <div className={styles.modCode}>xeoNWD</div>
                <div className={styles.modFmt}>Autodesk® Navisworks®</div>
              </div>
              <div className={styles.mod}>
                <span className={clsx(styles.badge, styles.badgeSoon)}>Coming soon</span>
                <div className={styles.modCode}>xeoIMODEL</div>
                <div className={styles.modFmt}>Bentley® iTwin® iModel® (.BIM)</div>
              </div>
              <div className={styles.mod}>
                <span className={clsx(styles.badge, styles.badgeSoon)}>Coming soon</span>
                <div className={styles.modCode}>xeoRVM</div>
                <div className={styles.modFmt}>Aveva® E3D™ / PDMS™ (RVM)</div>
              </div>
            </div>
            <p className={styles.formatsNote}>
              Many additional formats — including <strong>LAS/LAZ, OBJ, CityJSON, 3DXML, glTF/GLB</strong> and others — are natively supported by the xeokit SDK.{' '}
              <a href="mailto:contact@creoox.com">Get in touch</a> if you don&apos;t see the source format you&apos;re looking for.
            </p>
          </div>
        </section>

        {/* DEPLOYMENT */}
        <section>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>How can I use xeokit Data Engine?</h2>
              <p>We believe you should have the freedom to decide what happens to your data — and where it is processed.</p>
            </div>
            <div className={styles.deployCopy}>
              <p>That is why xeokit Data Engine can be used in different deployment models. In principle, it can be:</p>
              <ul>
                <li><strong>fully managed</strong> by <a href="https://creoox.com/contact_us/" target='_blank' rel='noopener noreferrer'>Creoox AG</a> as a web service, or</li>
                <li>deployed and operated in <strong>your own environment</strong>, including on-premises.</li>
              </ul>
              <p>Whether you prefer a shared service or dedicated server infrastructure, an on-premises deployment, or even a simple standalone binary — we can support the setup that best fits your operational, security, and data-governance requirements.</p>
              <p>xeokit Data Engine is currently available for <strong>Windows</strong> on <strong>AMD64</strong>, as well as <strong>Linux</strong> on both <strong>AMD64 and ARM64</strong>.</p>
            </div>
            <figure className={styles.deployFig}>
              <img src="/img/data-engine/deployment-options.svg" alt="Run the xeokit Data Engine your way: deploy in your own environment (on-premises), as a shared or dedicated managed cloud service by Creoox, or as a standalone CLI binary. Available on Windows (AMD64) and Linux (AMD64 / ARM64) for IFC, RVT/RFA, STEP, NWD, iModel and RVM." />
            </figure>
            <p className={styles.deployCloser}>The decision remains yours — for maximum flexibility and independence.</p>
          </div>
        </section>

        {/* WHY */}
        <section className={styles.alt}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>Why xeokit Data Engine?</h2>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3>Data sovereignty &amp; control</h3>
                <p>Your data belongs to you. Use it however and wherever you like — including AI — on your terms.</p>
              </div>
              <div className={styles.card}>
                <h3>Accessibility &amp; flexibility</h3>
                <p>Make engineering data easier to access, share, integrate and customize — even for systems that don&apos;t use the original authoring software.</p>
              </div>
              <div className={styles.card}>
                <h3>Operational independence</h3>
                <p>Use it as a managed service or run it in your own infrastructure — it&apos;s your decision.</p>
              </div>
            </div>
          </div>
        </section>

        {/* GET STARTED */}
        <section className={styles.getStarted}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>How to get started?</h2>
            </div>
            <div className={styles.cards}>
              <div className={styles.card}>
                <h3>Use the API</h3>
                <p>The best starting point if you want to integrate xeokit Data Engine into your own workflows.</p>
                <ul>
                  <li>Instructions in an open-source GitHub repository, plus credentials</li>
                  <li>Examples for different job workflows</li>
                  <li>A direct channel for feedback and roadmap alignment</li>
                </ul>
                <a className={clsx(styles.btn, styles.btnPrimary)} href={FORM_URL} target='_blank' rel='noopener noreferrer'>Request Evaluation Access</a>
              </div>
              <div className={styles.card}>
                <h3>View in xeoVision</h3>
                <p>Drag &amp; drop your models, extract the data, and view them directly in the browser.</p>
                <ul>
                  <li>A reliable, easy-to-use 3D and BIM viewer</li>
                  <li>Open outputs generated from your models</li>
                  <li>A seamless workflow powered by xeokit SDK and Data Engine</li>
                </ul>
                <a className={clsx(styles.btn, styles.btnGhost)} href={XEOVISION_URL} target='_blank' rel='noopener noreferrer'>View in xeoVision</a>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className={styles.alt}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>Typical use cases</h2>
            </div>
            <ul className={styles.uses}>
              <li>Automate and <strong>unify data pipelines</strong> across projects.</li>
              <li>Reduce unnecessary conversions and help <strong>avoid data loss</strong>.</li>
              <li>Deliver BIM and engineering data to <strong>web applications</strong>, digital twins, GIS, IoT and other downstream systems.</li>
              <li>Power Common Data Environments (CDE), construction project management, facility management and GIS-BIM platforms.</li>
              <li>Prepare model data for <strong>AI training and workflows</strong>, including data extracted from closed formats such as Revit®.</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className={styles.ctaBand}>
            <h2>Get started with xeokit Data Engine</h2>
            <p>Request evaluation access and start transforming your BIM and 3D engineering data into open, web-ready outputs today.</p>
            <a className={clsx(styles.btn, styles.btnPrimary)} href={FORM_URL} target='_blank' rel='noopener noreferrer'>Request Evaluation Access</a>
          </div>
        </section>

        {/* TRADEMARKS */}
        <section className={styles.trademarks}>
          <div className={styles.wrap}>
            <p>Autodesk®, Revit® and Navisworks® are registered trademarks of Autodesk®, Inc. AVEVA® E3D™ and PDMS™ are registered trademarks of AVEVA Plc. Bentley®, iTwin® and iModel® are registered trademarks of Bentley Systems, Inc. xeokit and Creoox are not affiliated with Autodesk®, AVEVA® or Bentley® Systems.</p>
          </div>
        </section>

      </div>
    </Layout>
  );
}
