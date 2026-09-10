import styles from './Divider.module.css';

/**
 * Divider — horizontal separator between sections/items.
 */
export default function Divider() {
  return <hr className={styles.divider} aria-hidden="true" />;
}
