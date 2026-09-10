/**
 * Skills Data
 *
 * Each category renders as a large block in the Skills section.
 * The `icon` key maps to the TechIcon component lookup.
 *
 * To add a new skill: add an entry to the appropriate category.
 * To add a new category: add a new object to this array.
 */

export const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    technologies: [
      { name: "React", icon: "react" },
      { name: "JavaScript", icon: "javascript" },
      { name: "Alpine.js", icon: "alpine" },
      { name: "HTML", icon: "html" },
      { name: "CSS", icon: "css" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    technologies: [
      { name: "Java", icon: "java" },
      { name: "Spring Boot", icon: "spring-boot" },
      { name: "PHP", icon: "php" },
      { name: "Laravel", icon: "laravel" },
    ],
  },
  {
    id: "databases",
    title: "Base de Datos",
    technologies: [
      { name: "MySQL", icon: "mysql" },
      { name: "PostgreSQL", icon: "postgresql" },
    ],
  },
  {
    id: "tools",
    title: "Herramientas & DevOps",
    technologies: [
      { name: "Git", icon: "git" },
      { name: "GitHub", icon: "github" },
      { name: "Docker", icon: "docker" },
      { name: "REST APIs", icon: "rest-api" },
    ],
  },
];
