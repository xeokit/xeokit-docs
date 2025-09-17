import Heading from '@theme/Heading';
import React from 'react';
import type { ReactNode } from 'react';
import styles from './styles.module.css';

interface Testimonial {
  name: string;
  link: string;
  title: string;
  company: string;
  image: string;
  quote: string;
  companyLogo: string;
  companyUrl: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Toni Marti",
    link: "https://www.linkedin.com/in/toni-mart%C3%AD-392604103/",
    title: "Software Artist",
    company: "Tribia SA",
    image: "/img/toni-marti.jpg",
    quote: "xeokit is a success enabler for our customers. Incredibly fast load times and super high-performance rendering, even on mobile browsers. Built in a modular way that allowed us to easily customize its behaviour, while allowing us to create a differentiated navigation experience.\n\nClean code, with the ability to inspect its internals, was key to our development experience. Teams focused on simple things can start using it with less than ten lines of JavaScript, while more advanced users will find that xeokit can be adapted to meet their advanced use cases.",
    companyLogo: "/img/userLogos/tribia-web.jpg",
    companyUrl: "https://www.tribia.com",
  },
  {
    name: "Chloe Sun",
    link: "https://www.linkedin.com/in/chloe-c-s-955a22114/",
    title: "Design Technology Specialist",
    company: "HOK Architects",
    image: "/img/chloe-sun.jpg",
    quote: "xeokit's rich features and detailed documentation allow us to create interactive and customizable web visualization experiences for large-scale BIM models. It also provides us with the possibilities to retrieve data from BIM model for further experiments and insights.",
    companyLogo: "/img/userLogos/hok-logo.jpg",
    companyUrl: "https://www.hok.com",
  },
  {
    name: "Hugo Duroux",
    link: "https://www.linkedin.com/in/hugo-duroux-46262166/",
    title: "Technical Director",
    company: "BIMData.io",
    image: "/img/hugo-duroux.jpg",
    quote: "xeokit's unmatched loading and rendering speed enables us to create interactive and customizable Web visualization experiences for large BIM models, even when loading many large models simultaneously. The code is clear and properly documented, the examples are sufficient to understand how everything works, and the API is explicit and complete. These qualities, in combination with xeokit's experienced and skilled community, make xeokit a viable alternative to larger engines such as AutoDesk Forge and Unity.",
    companyLogo: "/img/userLogos/bimdata-logo.png",
    companyUrl: "https://bimdata.io",
  },
  {
    name: "Christoph Degendorfer",
    link: "https://www.linkedin.com/in/christoph-degendorfer-712287b5/",
    title: "Co-Founder & CEO",
    company: "bimspot.io",
    image: "/img/christoph-degendorfer.jpg",
    quote: "We have been very impressed with the xeokit SDK's features. Of particular note is xeokit's highly efficient binary .XKT model format, which makes loading and rendering large models faster than ever before. With the wide-ranging feature set offered by the SDK, we have been able to meet most of our product goals so far.\n\nOur developers have also spoken about their positive experience. They noted the active development of the project and the quick and helpful responses whenever they had any issues.",
    companyLogo: "/img/userLogos/bimspot.png",
    companyUrl: "https://bimspot.io",
  },
];

export default function UsersSay(): ReactNode {
  return (
    <section className={styles.testimonials}>
      <div className="container">
        <div className="text--center">
          <Heading as="h2" className={styles.title} id="testimonials">
            What xeokit's users say
          </Heading>
        </div>
        <div className={styles.testimonialsGrid}>
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className={styles.testimonial}>
              <div className={styles.testimonialContent}>
                <blockquote className={styles.quote}>
                  {testimonial.quote.split('\n\n').map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </blockquote>
                <div className={styles.author}>
                  <div className={styles.authorInfo}>
                    <div className={styles.authorName}>
                      <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
                        {testimonial.name}
                      </a>
                    </div>
                    <div className={styles.authorTitle}>
                      {testimonial.title} at{' '}
                      <a href={testimonial.companyUrl} target="_blank" rel="noopener noreferrer">
                        {testimonial.company}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.companyLogo}>
                <a href={testimonial.companyUrl} target="_blank" rel="noopener noreferrer">
                  <img src={testimonial.companyLogo} alt={`${testimonial.company} testimonial about xeokit`} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
