import { useState, useEffect, useCallback } from 'react';
import Container from '../Container/Container';
import MobileMenu from '../MobileMenu/MobileMenu';
import { siteConfig } from '../../../data/siteConfig';
import useScrollSpy from '../../../hooks/useScrollSpy';
import { Menu } from 'lucide-react';
import styles from './Navbar.module.css';

const sectionIds = siteConfig.navigation.map((item) =>
  item.href.replace('#', '')
);

/**
 * Navbar — sticky navigation with scroll spy and mobile menu.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header
        className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
        role="banner"
      >
        <Container className={styles.inner}>
          <a href="#inicio" className={styles.logo} aria-label="Inicio">
            {siteConfig.name.split(' ')[0].toLowerCase()}
            <span className={styles.logoDot}>.</span>
          </a>

          <nav className={styles.nav} aria-label="Navegación principal">
            {siteConfig.navigation.map((item) => {
              const id = item.href.replace('#', '');
              return (
                <a
                  key={id}
                  href={item.href}
                  className={`${styles.navLink} ${
                    activeId === id ? styles.active : ''
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>
        </Container>
      </header>

      <MobileMenu
        isOpen={menuOpen}
        onClose={closeMenu}
        activeId={activeId}
      />
    </>
  );
}
