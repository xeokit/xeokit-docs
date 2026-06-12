import clsx from 'clsx';
import Layout from '@theme/Layout';

import type { ReactNode } from 'react';
import styles from './xeo-rvt.module.css';

const FORM_URL = 'https://2fvgt6.share-eu1.hsforms.com/2_jWf18TcTsCOZIUM6e1nmw';
const XEOVISION_URL = 'https://xeo.vision/';

export default function XeoRvt(): ReactNode {
  return (
    <Layout
      title="xeoRVT — xeokit Data Engine for Revit®"
      description="xeoRVT transforms your BIM data from Autodesk Revit (RVT/RFA) into open, web-ready outputs — JSON, GLB and XKT — independently from Autodesk, ready for AI, web apps, automation and digital twins.">

      <div className={styles.page}>

        {/* HERO */}
        <section className={styles.hero}>
          <div className={clsx(styles.wrap, styles.heroInner)}>
            <div className={styles.heroCopy}>
              <span className={styles.badge}><span className={styles.bdot} />xeokit Data Engine</span>
              <h1 style={{ maxWidth: '560px' }}>Turn Revit® data into <span className={styles.accent}>open, web-ready outputs.</span><span className={styles.accentYellow}> Independently</span></h1>
              <p className={styles.heroSub}>xeoRVT transforms your BIM data from <strong>Revit® (RVT/RFA)</strong> into JSON, GLB and XKT — ready for your AI, internal knowledgebase, web apps, automation and other workflows.</p>
              <div className={styles.heroActions}>
                <a href={FORM_URL} target='_blank' rel='noopener noreferrer' className={clsx(styles.btn, styles.btnPrimary)}>Request Evaluation Access <span className={styles.arrow}>→</span></a>
                <a href={XEOVISION_URL} target='_blank' rel='noopener noreferrer' className={clsx(styles.btn, styles.btnGhost, styles.btnOnDark)}>View in xeoVision</a>
              </div>
            </div>

            <figure className={styles.heroFigure}>
              <img src="/img/xeorvt/xeoRVT-diagram-vertical.svg" alt="xeoRVT pipeline — Revit® RVT/RFA extracted by the xeokit Data Engine into JSON, GLB and XKT outputs" />
            </figure>
          </div>
        </section>

        {/* OUTPUTS */}
        <section>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>xeokit Data Engine — for Revit®</h2>
              <p>xeokit Data Engine takes your Revit® file (RVT/RFA) and transforms it into open, web-ready outputs. The current pipeline produces these outputs:</p>
            </div>

            <div className={styles.outputs}>
              <div className={styles.card}>
                <span className={styles.fmtBadge}>.JSON</span>
                <h3>Object properties &amp; metadata</h3>
                <p>Containing object properties and metadata — structured access for integration, search and automation.</p>
              </div>
              <div className={styles.card}>
                <span className={styles.fmtBadge}>.GLB</span>
                <h3>Binary glTF geometry</h3>
                <p>Binary glTF containing geometry — compact and standards-based for the broad 3D tooling ecosystem.</p>
              </div>
              <div className={styles.card}>
                <span className={styles.fmtBadge}>.XKT</span>
                <h3>Optimized for the web</h3>
                <p>Optimized for efficient, high-performance visualization with the xeokit SDK in the browser.</p>
              </div>
            </div>

            <p className={styles.outputsNote}>The data from Revit® is extracted directly and prepared with as little transformation as possible — and without forcing it through an intermediate exchange schema such as IFC.</p>
          </div>
        </section>

        {/* INDEPENDENCE BAND */}
        <section className={styles.band}>
          <div className={clsx(styles.wrap, styles.bandInner)}>
            <div>
              <h2>Runs on its own - independently from Autodesk®</h2>
              <p>xeoRVT processes your data <strong>independently from Autodesk®</strong>. It does not require Autodesk® Platform Services, Revit®, or any Autodesk® software to run — so you control where and how your BIM data is converted.</p>
            </div>
            <div className={styles.independenceVisual}>
              <div className={styles.reqItem}>
                <span className={styles.reqMark}>✕</span>
                <span className={styles.strike}>Autodesk® Platform Services</span>
              </div>
              <div className={styles.reqItem}>
                <span className={styles.reqMark}>✕</span>
                <span className={styles.strike}>Revit® installation</span>
              </div>
              <div className={styles.reqItem}>
                <span className={styles.reqMark}>✕</span>
                <span className={styles.strike}>IFC intermediate schema</span>
              </div>
              <div className={clsx(styles.reqItem, styles.reqYes)}>
                <span className={styles.reqMark}>✓</span>
                <span>xeokit Data Engine — standalone</span>
              </div>
            </div>
          </div>
        </section>

        {/* DEPLOYMENT */}
        <section>
          <div className={styles.wrap}>
            <div className={clsx(styles.sectionHead, styles.center)} style={{ maxWidth: '820px' }}>
              <h2>How can I use xeoRVT?</h2>
              <p>We believe you should have the freedom to decide what happens with your data — and where it is processed. That is why xeokit Data Engine can be used in different deployment models. In principle, it can be:</p>
            </div>

            <div className={styles.models}>
              <div className={styles.model}>
                <span className={styles.mIc}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0780d4" strokeWidth="1.8"><path d="M3 15a4 4 0 0 1 4-4 5 5 0 0 1 9.6-1.6A4 4 0 1 1 18 19H7a4 4 0 0 1-4-4z" /></svg>
                </span>
                <p><strong>Fully managed by Creoox AG</strong> as a web service</p>
              </div>
              <div className={styles.model}>
                <span className={styles.mIc}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#0780d4" strokeWidth="1.8"><path d="M4 20V8l8-5 8 5v12M4 20h16M9 20v-6h6v6" /></svg>
                </span>
                <p><strong>Deployed and operated in your own environment</strong>, including on-premises.</p>
              </div>
            </div>

            <div className={styles.platforms}>
              <span className={styles.platLabel}>Available for</span>
              <span className={styles.chip}>Windows <b>AMD64</b></span>
              <span className={styles.chip}>Linux <b>AMD64</b></span>
              <span className={styles.chip}>Linux <b>ARM64</b></span>
            </div>

            <p className={styles.deployNote}>Whether you prefer a shared service or dedicated server infrastructure, an on-premises deployment, or even a simple standalone binary — we can support the setup that best fits your operational, security, and data-governance requirements.</p>
            <p className={clsx(styles.deployNote, styles.deployNoteSm)}>xeokit Data Engine is currently available for Windows on AMD64, as well as Linux on both AMD64 and ARM64.</p>
            <p className={styles.deployCloser}>The decision remains yours — for maximum flexibility and independence.</p>
          </div>
        </section>

        {/* GET STARTED */}
        <section className={styles.start}>
          <div className={clsx(styles.wrap, styles.startInner)}>
            <div className={clsx(styles.sectionHead, styles.center)} style={{ marginBottom: '44px' }}>
              <h2 style={{ color: '#fff' }}>How to get started?</h2>
            </div>

            <div className={styles.paths}>
              <div className={styles.path}>
                <h3>Use the API</h3>
                <p>The best starting point if you want to use xeokit Data Engine for Revit® programmatically.</p>
                <ul>
                  <li>Instructions in an open-source GitHub repository, plus credentials</li>
                  <li>Examples for different job workflows</li>
                  <li>A direct channel for feedback and roadmap alignment</li>
                </ul>
                <div className={styles.pathCta}>
                  <a href={FORM_URL} target='_blank' rel='noopener noreferrer' className={clsx(styles.btn, styles.btnPrimary)}>Request Evaluation Access <span className={styles.arrow}>→</span></a>
                </div>
              </div>

              <div className={styles.path}>
                <h3>View in xeoVision</h3>
                <p>Drop in your models, extract data and view them directly in the browser.</p>
                <ul>
                  <li>A reliable, easy-to-use 3D and BIM viewer</li>
                  <li>Open outputs generated from your models</li>
                  <li>A seamless workflow powered by xeokit SDK and Data Engine</li>
                </ul>
                <div className={styles.pathCta}>
                  <a href={XEOVISION_URL} target='_blank' rel='noopener noreferrer' className={clsx(styles.btn, styles.btnLight)}>View in xeoVision <span className={styles.arrow}>→</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className={styles.usecases}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>Where teams put xeoRVT to work?</h2>
            </div>
            <div className={styles.ucList}>
              <div className={styles.uc}>
                <span className={styles.ucNum}>01</span>
                <p>Easily share Revit® models with <strong>non-Revit® users</strong>, across teams and tools.</p>
              </div>
              <div className={styles.uc}>
                <span className={styles.ucNum}>02</span>
                <p>Prepare Revit® data for <strong>web applications</strong> and digital twins.</p>
              </div>
              <div className={styles.uc}>
                <span className={styles.ucNum}>03</span>
                <p>Reduce unnecessary conversions and help <strong>avoid data loss</strong>.</p>
              </div>
              <div className={styles.uc}>
                <span className={styles.ucNum}>04</span>
                <p>Power CDEs, construction project management, facility management, IoT and GIS-BIM platforms.</p>
              </div>
              <div className={styles.uc}>
                <span className={styles.ucNum}>05</span>
                <p><strong>Train your AI</strong> on data from your Revit® models — or feed it straight into your AI workflows.</p>
              </div>
              <div className={styles.uc}>
                <span className={styles.ucNum}>06</span>
                <p>Build digital twins with open, web-ready geometry and properties at their core.</p>
              </div>
            </div>
          </div>
        </section>

        {/* WHY */}
        <section className={styles.why}>
          <div className={styles.wrap}>
            <div className={styles.sectionHead}>
              <h2>Why xeokit Data Engine?</h2>
            </div>
            <div className={styles.whyGrid}>
              <div className={styles.whyCell}>
                <span className={styles.num}>01</span>
                <h3>Data sovereignty &amp; control</h3>
                <p>Your Revit® data belongs to you. Use it however and wherever you like — including AI — on your own terms.</p>
              </div>
              <div className={styles.whyCell}>
                <span className={styles.num}>02</span>
                <h3>Accessibility &amp; flexibility</h3>
                <p>Make Revit® data easier to access, share, integrate and customize — even for users and systems that do not use Autodesk® products.</p>
              </div>
              <div className={styles.whyCell}>
                <span className={styles.num}>03</span>
                <h3>Operational independence &amp; security</h3>
                <p>Use xeoRVT as a managed service or run it in your own infrastructure. The decision is always yours.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section>
          <div className={styles.ctaBand}>
            <h2>Get started with xeokit Data Engine</h2>
            <p>Request evaluation access and start transforming your BIM and 3D engineering data into open, web-ready outputs today.</p>
            <a href={FORM_URL} target='_blank' rel='noopener noreferrer' className={clsx(styles.btn, styles.btnPrimary)}>Request Evaluation Access <span className={styles.arrow}>→</span></a>
          </div>
        </section>

        {/* TRADEMARKS */}
        <section className={styles.trademarks}>
          <div className={styles.wrap}>
            <p className={styles.disclaimer}>Revit® and Autodesk® are registered trademarks of Autodesk®, Inc. xeokit and Creoox are not affiliated with Autodesk®.</p>
          </div>
        </section>

      </div>
    </Layout>
  );
}
