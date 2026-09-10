import Section from '../../layout/Section/Section';
import SectionHeading from '../../ui/SectionHeading/SectionHeading';
import ProjectItem from '../../projects/ProjectItem/ProjectItem';
import Divider from '../../ui/Divider/Divider';
import { projects } from '../../../data/projects';

/**
 * Projects — main portfolio section.
 * Renders all projects from data, separated by dividers.
 */
export default function Projects() {
  return (
    <Section id="proyectos">
      <SectionHeading
        title="Proyectos"
        subtitle="Soluciones que construí para resolver problemas reales de negocios."
      />

      <div>
        {projects.map((project, index) => (
          <div key={project.id}>
            {index > 0 && <Divider />}
            <ProjectItem project={project} />
          </div>
        ))}
      </div>
    </Section>
  );
}
