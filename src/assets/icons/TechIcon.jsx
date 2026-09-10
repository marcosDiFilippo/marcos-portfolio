import { 
  SiReact, 
  SiTypescript, 
  SiJavascript, 
  SiHtml5, 
  SiCss, 
  SiSpringboot, 
  SiPhp, 
  SiLaravel, 
  SiMysql, 
  SiPostgresql, 
  SiGit, 
  SiGithub, 
  SiDocker, 
  SiAlpinedotjs
} from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';
import { Cloud } from 'lucide-react';

/**
 * Technology Icons Dictionary
 * Maps string keys to components from react-icons
 */
const icons = {
  react: SiReact,
  typescript: SiTypescript,
  javascript: SiJavascript,
  html: SiHtml5,
  css: SiCss,
  java: FaJava,
  "spring-boot": SiSpringboot,
  php: SiPhp,
  laravel: SiLaravel,
  mysql: SiMysql,
  postgresql: SiPostgresql,
  git: SiGit,
  github: SiGithub,
  docker: SiDocker,
  "rest-api": TbApi,
  "tiendanube-api": Cloud,
  "alpine": SiAlpinedotjs
};

/**
 * Get a tech icon component by key.
 * Returns null if the icon doesn't exist.
 */
export function getTechIcon(key) {
  return icons[key] || null;
}

/**
 * TechIcon component — renders the react-icon for a given technology key.
 */
export default function TechIcon({ name, size = 24, className, ...props }) {
  const IconComponent = icons[name];

  if (!IconComponent) {
    return null;
  }

  return (
    <span className={className} role="img" aria-label={name}>
      <IconComponent size={size} {...props} />
    </span>
  );
}
