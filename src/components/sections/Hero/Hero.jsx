import { motion } from 'framer-motion';
import Container from '../../layout/Container/Container';
import StatusBadge from '../../ui/StatusBadge/StatusBadge';
import Button from '../../ui/Button/Button';
import { siteConfig } from '../../../data/siteConfig';
import { ArrowDown, Mail } from 'lucide-react';
import styles from './Hero.module.css';

/**
 * Hero — landing section with name, role, description, and CTAs.
 */
export default function Hero() {
  return (
    <section id="inicio" className={styles.hero}>
      <Container>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <StatusBadge text={siteConfig.availability} />

          <h1 className={styles.name}>{siteConfig.name}</h1>

          <p className={styles.role}>{siteConfig.role}</p>

          <p className={styles.description}>{siteConfig.description}</p>

          <div className={styles.actions}>
            <Button variant="primary" href="#proyectos" icon={<ArrowDown size={16} />}>
              Ver proyectos
            </Button>
            <Button variant="secondary" href="#contacto" icon={<Mail size={16} />}>
              Contactarme
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
