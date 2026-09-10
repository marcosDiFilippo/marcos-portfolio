import { useEffect, useState, useMemo } from 'react';

/**
 * useScrollSpy — detects which section is currently in view.
 *
 * @param {string[]} sectionIds - Array of section IDs to observe
 * @param {number} [offset=100] - Offset from top of viewport
 * @returns {string} Active section ID
 */
export default function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState(sectionIds[0] || '');

  const ids = useMemo(() => sectionIds, [sectionIds.join(',')]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: `-${offset}px 0px -40% 0px`,
        threshold: 0,
      }
    );

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, [ids, offset]);

  return activeId;
}
