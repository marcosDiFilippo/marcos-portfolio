import Section from '../../layout/Section/Section';
import Button from '../../ui/Button/Button';
import { siteConfig } from '../../../data/siteConfig';
import { Mail, Phone, ArrowUpRight } from 'lucide-react';
import styles from './Contact.module.css';

/**
 * Contact — clean contact section with email, phone, and CTA.
 */
export default function Contact() {
  return (
    <Section id="contacto">
      <div className={styles.content}>
        <div className={styles.header}>
          <h2 className={styles.title}>Trabajemos juntos</h2>
          <p className={styles.subtitle}>
            ¿Tenés un proyecto en mente? Me encantaría escuchar tu idea y
            explorar cómo puedo ayudarte.
          </p>
        </div>

        <div className={styles.contactMethods}>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${siteConfig.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactItem}
          >
            <div className={styles.contactIcon}>
              <Mail size={20} />
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>Email</span>
              <span className={styles.contactValue}>{siteConfig.email}</span>
            </div>
            <ArrowUpRight size={16} className={styles.contactArrow} />
          </a>

          <a
            href={`https://wa.me/${siteConfig.phone.replace(/\s/g, '')}`}
            className={styles.contactItem}
          >
            <div className={styles.contactIcon}>
              <Phone size={20} />
            </div>
            <div className={styles.contactInfo}>
              <span className={styles.contactLabel}>Teléfono</span>
              <span className={styles.contactValue}>{siteConfig.phone}</span>
            </div>
            <ArrowUpRight size={16} className={styles.contactArrow} />
          </a>
        </div>

        <div className={styles.cta}>
          <Button
            variant="primary"
            href={`mailto:${siteConfig.email}`}
            icon={<Mail size={16} />}
          >
            Escribirme
          </Button>
        </div>
      </div>
    </Section>
  );
}
