import Container from '../Container/Container';
import SocialLink from '../../ui/SocialLink/SocialLink';
import { siteConfig } from '../../../data/siteConfig';
import { GithubIcon, LinkedinIcon } from '../../../assets/icons/BrandIcons';
import { Mail } from 'lucide-react';
import styles from './Footer.module.css';

/**
 * Footer — minimal footer with name, role, and social links.
 */
export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <Container className={styles.inner}>
        <div className={styles.info}>
          <span className={styles.name}>{siteConfig.name}</span>
          <span className={styles.separator}>·</span>
          <span className={styles.role}>{siteConfig.role}</span>
        </div>

        <div className={styles.social}>
          <SocialLink
            href={siteConfig.social.github}
            icon={<GithubIcon />}
            label="GitHub"
          />
          <SocialLink
            href={siteConfig.social.linkedin}
            icon={<LinkedinIcon />}
            label="LinkedIn"
          />
          <SocialLink
            href={`mailto:${siteConfig.email}`}
            icon={<Mail />}
            label="Email"
          />
        </div>
      </Container>
    </footer>
  );
}
