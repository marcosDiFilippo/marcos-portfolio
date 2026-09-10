import { useState } from 'react';
import TechBadge from '../TechBadge/TechBadge';
import ImageModal from '../ImageModal/ImageModal';
import { GithubIcon } from '../../../assets/icons/BrandIcons';
import { ExternalLink, ZoomIn } from 'lucide-react';
import styles from './ProjectItem.module.css';

/**
 * ProjectItem — individual project card.
 * Renders project info (left) + image (right) in desktop.
 * Data-driven: receives a project object.
 *
 * @param {Object} props
 * @param {Object} props.project - Project data from projects.js
 */
export default function ProjectItem({ project }) {
  const [modalOpen, setModalOpen] = useState(false);

  const hasLinks = project.github || project.live;
  const hasImages = project.images && project.images.length > 0;
  const previewImage = hasImages ? project.images[0] : null;

  return (
    <>
      <article className={styles.item}>
        {/* Info — left side */}
        <div className={styles.info}>
          <h3 className={styles.title}>{project.title}</h3>

          {project.subtitle && (
            <p className={styles.subtitle}>{project.subtitle}</p>
          )}

          {project.problem && (
            <div className={styles.problemBlock}>
              <span className={styles.problemLabel}>Problema</span>
              <p className={styles.problemText}>{project.problem}</p>
            </div>
          )}

          <p className={styles.description}>{project.description}</p>

          {/* Technologies */}
          <div className={styles.technologies}>
            {project.technologies.map((tech) => (
              <TechBadge key={tech} name={tech} />
            ))}
          </div>

          {/* Links */}
          {hasLinks && (
            <div className={styles.links}>
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label={`Ver código en GitHub: ${project.title}`}
                >
                  <GithubIcon size={16} />
                  <span>Código</span>
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                  aria-label={`Ver demo: ${project.title}`}
                >
                  <ExternalLink size={16} />
                  <span>Demo</span>
                </a>
              )}
            </div>
          )}
        </div>

        {/* Image — right side */}
        {previewImage && (
          <div className={styles.imageWrapper}>
            <button
              className={styles.imageButton}
              onClick={() => setModalOpen(true)}
              aria-label={`Ver galería de imágenes: ${project.title}`}
            >
              <img
                src={previewImage}
                alt={`Screenshot de ${project.title}`}
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.imageOverlay}>
                <ZoomIn size={24} />
              </div>
            </button>
          </div>
        )}
      </article>

      {/* Modal with carousel */}
      {hasImages && (
        <ImageModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          images={project.images}
          startIndex={0}
          projectTitle={project.title}
        />
      )}
    </>
  );
}
