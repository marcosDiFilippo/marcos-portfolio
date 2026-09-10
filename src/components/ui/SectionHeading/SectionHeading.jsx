import styles from './SectionHeading.module.css';

/**
 * SectionHeading — consistent section title across all sections.
 *
 * @param {Object} props
 * @param {string} props.title - Section title (H2)
 * @param {string} [props.subtitle] - Optional subtitle text
 */
export default function SectionHeading({ title, subtitle }) {
  return (
    <div className={styles.heading}>
      <h2 className={styles.title}>{title}</h2>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
}
