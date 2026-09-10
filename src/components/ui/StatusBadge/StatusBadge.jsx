import styles from './StatusBadge.module.css';

/**
 * StatusBadge — availability indicator with animated dot.
 *
 * @param {Object} props
 * @param {string} props.text - Badge text
 */
export default function StatusBadge({ text }) {
  return (
    <div className={styles.badge} aria-label={text}>
      <span className={styles.dot} aria-hidden="true" />
      <span className={styles.text}>{text}</span>
    </div>
  );
}
