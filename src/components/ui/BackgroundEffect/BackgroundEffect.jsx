import styles from './BackgroundEffect.module.css';

/**
 * BackgroundEffect — subtle decorative layer.
 * Almost imperceptible: grid + soft radial gradient.
 * Fixed position behind all content.
 */
export default function BackgroundEffect() {
  return (
    <div className={styles.background} aria-hidden="true">
      <div className={styles.grid} />
      <div className={styles.glow} />
      <div className={styles.glowSecondary} />
    </div>
  );
}
