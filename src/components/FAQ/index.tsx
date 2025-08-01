import React, { useState } from 'react';
import clsx from 'clsx';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface FAQItem {
  question: string;
  answer: ReactNode;
}

const faqItems: FAQItem[] = [
  {
    question: "What makes xeokit special?",
    answer: (
      <div>
        <p>When it comes to high-performance BIM/AEC visualization, xeokit has several capabilities that set it apart from standard Web graphics libraries:</p>
        <ul>
          <li><strong>Fast loading</strong> - ultra-compact native file geometry format loads hundreds of thousands of objects over the Web in seconds.</li>
          <li><strong>Fast rendering</strong> - purpose-built to fluidly visualize hundreds of thousands of objects in the browser.</li>
          <li><strong>Double-precision rendering</strong> - accurately view building model geometry in global coordinates, enabling GIS applications.</li>
          <li><strong>BIM/AEC-friendly programming API</strong> - a complete JavaScript graphics programming toolkit, with an API designed specially for BIM/AEC applications.</li>
          <li><strong>Plugins</strong> - a library of plugins to accelerate BIM/AEC application development.</li>
          <li><strong>Freedom</strong> - host viewer, models and conversion tools on your own servers - no issues with data sovereignty, no reliance on 3rd-party cloud services.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Who is using xeokit?",
    answer: (
      <div>
        <p>A growing, international community of industry leaders, researchers and hackers.</p>
        <p>
          <a href="https://www.notion.so/xeokit/Who-is-using-xeokit-4066f45365ee4959bc850896fc53a801" target="_blank" rel="noopener noreferrer">
            Read more
          </a> about what users have built with xeokit so far.
        </p>
      </div>
    ),
  },
  {
    question: "Who are the people behind xeokit?",
    answer: (
      <div>
        <p>The xeokit SDK is a partnership between:</p>
        <ul>
          <li><a href="https://xeolabs.com" target="_blank" rel="noopener noreferrer">xeolabs</a> - created xeokit in 2019, based on 10+ years experience visualizing 3D BIM and STEM in the browser.</li>
          <li><a href="/blog/creoox-becomes-xeokit-sales-partner" target="_blank" rel="noopener noreferrer">Creoox AG</a> - xeokit's official and exclusive business partner, supporting with development, handling sales, marketing, CRM and business development.</li>
        </ul>
      </div>
    ),
  },
  {
    question: "Which WebGL library does xeokit use?",
    answer: (
      <div>
        <p>The xeokit SDK has its own WebGL engine, which is specially designed to visualize complex, full-precision BIM and engineering models.</p>
        <p>The engine uses our own special blend of techniques to interactively render models containing hundreds of thousands of individual parts, in all major browsers, including mobile.</p>
        <p>
          The engine also distinguishes itself by supporting double-precision rendering on WebGL, which only supports single-precision natively. This means that we can render buildings in their original, global coordinate system, without rounding errors and fitting perfectly with GIS data.
          [<a href="https://xeokit.github.io/xeokit-sdk/examples/#BIMOffline_XKT_DoublePrecision_MAP" target="_blank" rel="noopener noreferrer">Try a demo</a>]
        </p>
      </div>
    ),
  },
  {
    question: "What file formats does xeokit load?",
    answer: (
      <div>
        <p>The xeokit SDK loads (at least) IFC (2x3 & 4.3), CityJSON, glTF, OBJ, 3DXML, LAS, LAZ and XKT.</p>
        <p>XKT is xeokit's highly-optimized native geometry format, which allows xeokit to load hundreds of thousands of full-precision objects in seconds. XKT files are converted from various source formats using open-source CLI tools.</p>
        <p>Learn more:</p>
        <ul>
          <li><a href="https://www.notion.so/xeokit/Viewing-an-IFC-Model-with-xeokit-c373e48bc4094ff5b6e5c5700ff580ee" target="_blank" rel="noopener noreferrer">Viewing an IFC Model with xeokit</a></li>
          <li><a href="https://www.notion.so/xeokit/Viewing-a-Point-Cloud-with-xeokit-c45cdaae64514170be91c37d6827c9ca" target="_blank" rel="noopener noreferrer">Viewing a Point Cloud with xeokit</a></li>
          <li><a href="https://www.notion.so/xeokit/Viewing-Multiple-Models-with-xeokit-71b73627d97840f7887275ea6ac4ed4a" target="_blank" rel="noopener noreferrer">Viewing Multiple Models with xeokit</a></li>
        </ul>
      </div>
    ),
  },
  {
    question: "How do I view my IFC file with xeokit?",
    answer: (
      <div>
        <p>Use open-source CLI tools to convert IFC (2x3 and 4.3) files into xeokit's compressed native model format, XKT, which xeokit can then load super quickly into its browser-based viewer.</p>
        <p>The XKT format contains all the model's geometry and elements, along with some basic metadata to help navigate the IFC types. The format format greatly reduces the model size. As an example, the 49M IFC file for the Schependomlaan sample model converted into an 1.5M XKT file, which xeokit loads in around ~2-3 seconds over a good Internet connection.</p>
        <p>Learn more:</p>
        <ul>
          <li><a href="https://www.notion.so/xeokit/Viewing-an-IFC-Model-with-xeokit-c373e48bc4094ff5b6e5c5700ff580ee" target="_blank" rel="noopener noreferrer">Viewing an IFC Model with xeokit</a></li>
          <li><a href="https://xeokit.github.io/xeokit-sdk/examples/#BIMOffline_XKT_Schependomlaan" target="_blank" rel="noopener noreferrer">View the Schependomlaan Model</a></li>
        </ul>
      </div>
    ),
  },
  {
    question: "Can I edit and save IFC files with xeokit?",
    answer: (
      <div>
        <p>No - authoring of IFC is outside the scope of xeokit, which is intended to be used as a front-end visualization tool.</p>
        <p>In order to modify and save IFC files, xeokit would need to load, persist, modify and validate (potentially huge) IFC documents models in browser memory, which would not be practical.</p>
        <p>Rather, xeokit's focus is efficient interaction with large models, which we pre-convert from IFC to a compact and fast-loading format that permits large models to fit in browser memory.</p>
        <p>Learn more:</p>
        <ul>
          <li><a href="https://www.notion.so/xeokit/Viewing-an-IFC-Model-with-xeokit-c373e48bc4094ff5b6e5c5700ff580ee" target="_blank" rel="noopener noreferrer">Viewing an IFC Model with xeokit</a></li>
        </ul>
      </div>
    ),
  },
];

export default function FAQ(): ReactNode {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set());

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section id="faq" className={styles.faq}>
      <div className="container">
        <div className="text--center">
          <h2 className={styles.title}>FAQ</h2>
        </div>
        <div className={styles.faqContainer}>
          {faqItems.map((item, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={clsx(styles.faqQuestion, openItems.has(index) && styles.open)}
                onClick={() => toggleItem(index)}
                aria-expanded={openItems.has(index)}
              >
                <span className={styles.questionText}>Q: {item.question}</span>
                <span className={styles.toggleIcon}>
                  {openItems.has(index) ? '−' : '+'}
                </span>
              </button>
              <div className={clsx(styles.faqAnswer, openItems.has(index) && styles.open)}>
                <div className={styles.answerContent}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
