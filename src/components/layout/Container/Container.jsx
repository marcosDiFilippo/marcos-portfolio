import styles from './Container.module.css';

/**
 * Container — centered max-width wrapper.
 *
 * @param {Object} props
 * @param {React.ReactNode} props.children
 * @param {string} [props.className]
 */
export default function Container({ children, className = '' }) {
  return (
    <div className={`${styles.container} ${className}`}>
      {children}
    </div>
  );
}
