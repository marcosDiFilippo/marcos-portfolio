import { useState, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './ImageModal.module.css';

/**
 * ImageModal — lightbox with carousel for project images.
 *
 * @param {Object} props
 * @param {boolean} props.isOpen
 * @param {Function} props.onClose
 * @param {string[]} props.images - Array of image URLs
 * @param {number} props.startIndex - Initial image index
 * @param {string} props.projectTitle - For alt text
 */
export default function ImageModal({
  isOpen,
  onClose,
  images = [],
  startIndex = 0,
  projectTitle = '',
}) {
  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setCurrentIndex(startIndex);
    }
  }, [isOpen, startIndex]);

  const goTo = useCallback(
    (newIndex, dir) => {
      setDirection(dir);
      setCurrentIndex(newIndex);
    },
    []
  );

  const goPrev = useCallback(() => {
    if (currentIndex > 0) goTo(currentIndex - 1, -1);
  }, [currentIndex, goTo]);

  const goNext = useCallback(() => {
    if (currentIndex < images.length - 1) goTo(currentIndex + 1, 1);
  }, [currentIndex, images.length, goTo]);

  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    },
    [onClose, goPrev, goNext]
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

  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < images.length - 1;

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -80 : 80,
      opacity: 0,
    }),
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className={styles.overlay}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-label={`Galería de imágenes: ${projectTitle}`}
        >
          {/* Close button */}
          <button
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Cerrar galería"
          >
            <X size={24} />
          </button>

          {/* Image container */}
          <div
            className={styles.imageContainer}
            onClick={(e) => e.stopPropagation()}
          >
            <AnimatePresence mode="wait" custom={direction}>
              <motion.img
                key={currentIndex}
                src={images[currentIndex]}
                alt={`${projectTitle} - Imagen ${currentIndex + 1}`}
                className={styles.image}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                style={{ willChange: 'transform, opacity' }}
              />
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {images.length > 1 && (
            <>
              <button
                className={`${styles.navButton} ${styles.prevButton}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                disabled={!hasPrev}
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                className={`${styles.navButton} ${styles.nextButton}`}
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                disabled={!hasNext}
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={24} />
              </button>

              {/* Indicator dots */}
              <div className={styles.indicators} aria-hidden="true">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    className={`${styles.dot} ${
                      idx === currentIndex ? styles.dotActive : ''
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      goTo(idx, idx > currentIndex ? 1 : -1);
                    }}
                    aria-label={`Ir a imagen ${idx + 1}`}
                  />
                ))}
              </div>
            </>
          )}

          {/* Counter */}
          {images.length > 1 && (
            <div className={styles.counter} aria-live="polite">
              {currentIndex + 1} / {images.length}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
