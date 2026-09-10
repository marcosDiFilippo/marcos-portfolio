import Section from '../../layout/Section/Section';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import { siteConfig } from '../../../data/siteConfig';
import profilePhoto from '../../../assets/profile-photo.webp';
import styles from './About.module.css';

/**
 * About — personal section with text + photo placeholder.
 * Two columns on desktop, stacked on mobile.
 */
export default function About() {
  return (
    <Section id="sobre-mi">
      <SectionHeading title="Sobre Mí" />

      <div className={styles.grid}>
        {/* Text — left side */}
        <div className={styles.text}>
          {siteConfig.about.map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>

        {/* Photo — right side */}
        <div className={styles.photoWrapper}>
          <div className={styles.photoFrame}>
            <img
              src={profilePhoto}
              alt={siteConfig.name}
              className={styles.photo}
              loading="lazy"
            />
          </div>
          <span className={styles.photoCaption}>
            {siteConfig.name} — {siteConfig.role}
          </span>
        </div>
      </div>
    </Section>
  );
}
