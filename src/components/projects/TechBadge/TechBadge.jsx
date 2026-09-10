import TechIcon from '../../../assets/icons/TechIcon';
import styles from './TechBadge.module.css';

/**
 * TechBadge — small pill with technology logo.
 *
 * @param {Object} props
 * @param {string} props.name - Technology key (maps to icon)
 * @param {string} [props.label] - Display name for tooltip
 */
export default function TechBadge({ name, label }) {
  return (
    <span
      className={styles.badge}
      title={label || name}
      aria-label={label || name}
    >
      <TechIcon name={name} size={25} />
    </span>
  );
}
