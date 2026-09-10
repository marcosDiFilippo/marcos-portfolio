import Section from '../../layout/Section/Section';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import TechIcon from '../../../assets/icons/TechIcon';
import { skillCategories } from '../../../data/skills';
import styles from './Skills.module.css';

/**
 * Skills — technology grid organized by category.
 * Renders large blocks with tech logos inside.
 * Fully data-driven from skills.js.
 */
export default function Skills() {
  return (
    <Section id="habilidades">
      <SectionHeading
        title="Habilidades"
        subtitle="Tecnologías y herramientas con las que trabajo."
      />

      <div className={styles.grid}>
        {skillCategories.map((category) => (
          <div key={category.id} className={styles.card}>
            <h3 className={styles.categoryTitle}>{category.title}</h3>

            <div className={styles.technologies}>
              {category.technologies.map((tech) => (
                <div key={tech.icon} className={styles.techItem}>
                  <TechIcon
                    name={tech.icon}
                    size={28}
                    className={styles.techIcon}
                  />
                  <span className={styles.techName}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
