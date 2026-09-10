import { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteConfig } from '../../../data/siteConfig';
import { X } from 'lucide-react';
import styles from './MobileMenu.module.css';

/**
 * MobileMenu — fullscreen overlay navigation for mobile.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.onClose
 * @param {string} props.activeId
 */
export default function MobileMenu({ isOpen, onClose, activeId }) {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.classList.add('modal-open');
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, handleKeyDown]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar menú"
          >
            <X size={24} />
          </button>

          <nav className={styles.nav} aria-label="Navegación móvil">
            {siteConfig.navigation.map((item) => {
              const id = item.href.replace('#', '');
              return (
                <a
                  key={id}
                  href={item.href}
                  className={`${styles.navLink} ${
                    activeId === id ? styles.active : ''
                  }`}
                  onClick={onClose}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
