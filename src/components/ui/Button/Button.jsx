import styles from './Button.module.css';

/**
 * Button — primary UI component.
 *
 * @param {Object} props
 * @param {'primary'|'secondary'} props.variant - Visual style
 * @param {string} [props.href] - If provided, renders as <a>
 * @param {Function} [props.onClick] - Click handler (when no href)
 * @param {React.ReactNode} [props.icon] - Optional leading icon
 * @param {string} [props.className] - Additional CSS class
 * @param {React.ReactNode} props.children - Button label
 */
export default function Button({
  variant = 'primary',
  href,
  onClick,
  icon,
  className = '',
  children,
  ...rest
}) {
  const classNames = [
    styles.button,
    styles[variant],
    className,
  ].filter(Boolean).join(' ');

  const content = (
    <>
      {icon && <span className={styles.icon}>{icon}</span>}
      {children}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classNames} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classNames} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
