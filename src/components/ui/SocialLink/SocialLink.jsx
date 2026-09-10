import styles from './SocialLink.module.css';

/**
 * SocialLink — icon link for social profiles.
 *
 * @param {Object} props
 * @param {string} props.href - URL
 * @param {React.ReactNode} props.icon - Lucide icon
 * @param {string} props.label - Accessible label
 */
export default function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      className={styles.link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      {icon}
    </a>
  );
}
