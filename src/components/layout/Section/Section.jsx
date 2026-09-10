import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from '../Container/Container';
import styles from './Section.module.css';

/**
 * Section — semantic section wrapper with fade-in on scroll.
 *
 * @param {Object} props
 * @param {string} props.id - Section ID for navigation
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export default function Section({ id, children, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id={id} className={`${styles.section} ${className}`} ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <Container>{children}</Container>
      </motion.div>
    </section>
  );
}
