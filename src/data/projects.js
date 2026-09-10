/**
 * Projects Data
 *
 * To add a new project:
 * 1. Add your screenshots to /public/projects/<project-id>/
 * 2. Add a new object to this array
 * 3. The ProjectItem component renders it automatically
 *
 * No JSX changes needed.
 */

export const projects = [
  {
    id: "project-01",
    title: "Sistema de Gestión Integral para Consultorios",
    subtitle: "Agenda, turnos y facturación en un solo lugar",
    description:
      "Plataforma SaaS para la administración y agendamiento de clínicas y consultorios. Incluye gestión de pacientes, turnos masivos, control avanzado de coberturas médicas y obras sociales, caja con balance dinámico, billetera virtual del paciente, seguimiento de tratamientos y resumen financiero.",
    problem:
      "La clínica organizaba su agenda y tratamientos de forma manual (vía planillas), lo que dificultaba administrar las sesiones pendientes, el manejo de múltiples coberturas médicas por paciente y el control de saldos a favor — con el riesgo constante de errores de cobro y pérdida de información.",
    technologies: ["react", "typescript", "laravel", "mysql"],
    images: [
      "/projects/project-01/screenshot-1.webp",
      "/projects/project-01/screenshot-2.webp",
      "/projects/project-01/screenshot-3.webp",
      "/projects/project-01/screenshot-4.webp",
      "/projects/project-01/screenshot-5.webp",
      "/projects/project-01/screenshot-6.webp",
      "/projects/project-01/screenshot-7.webp",
      "/projects/project-01/screenshot-8.webp",
    ],
    github: null,
    live: null,
    featured: true,
  },
  {
    id: "project-03",
    title: "Sistema de Gestión Integral con Sincronización a Tiendanube",
    subtitle: "Stock, POS y clientes unificados entre venta física y online",
    description:
      "Sistema de gestión integral para un comercio de indumentaria/lencería con venta física y online simultánea. Incluye punto de venta (POS) con lector de código de barras, control de inventario por variantes (talle/color), packs, módulo de clientes con historial de compras, reportes de rotación de ventas y sincronización automática de stock con Tiendanube vía API oficial (OAuth 2.0 + webhooks), evitando vender productos sin stock real disponible.",
    problem:
      "El comercio vendía en simultáneo por local físico y por Tiendanube, pero el stock de ambos canales no estaba sincronizado: una venta presencial no se reflejaba en la tienda online y viceversa, generando ventas de productos sin stock real, descuadres de inventario y pérdida de tiempo en reconciliación manual.",
    technologies: ["react", "typescript", "spring-boot", "postgresql", "tiendanube-api"],
    images: [
      "/projects/project-02/screenshot-1.webp",
      "/projects/project-02/screenshot-2.webp",
      "/projects/project-02/screenshot-3.webp",
      "/projects/project-02/screenshot-4.webp",
      "/projects/project-02/screenshot-5.webp",
      "/projects/project-02/screenshot-6.webp",
      "/projects/project-02/screenshot-7.webp",
    ],
    github: null,
    live: null,
    featured: true,
  },
  {
    id: "project-04",
    title: "Sistema de Gestión para Taller Mecánico",
    subtitle: "Control de órdenes de trabajo, vehículos y clientes",
    description:
      "Plataforma de gestión para talleres de vehículos. Permite administrar órdenes de trabajo, historial de vehículos por cliente, agenda de turnos, cuenta corriente y pagos, con una arquitectura modular organizada por features para facilitar el mantenimiento a futuro.",
    problem:
      "El taller llevaba el control de trabajos, vehículos y clientes de forma desorganizada, sin un registro claro del historial de cada auto ni de los pagos pendientes, lo que generaba pérdida de información y dificultaba el seguimiento de la cuenta corriente de cada cliente.",
    technologies: ["laravel", "alpine", "typescript", "mysql"],
    images: [
      "/projects/project-03/screenshot-1.webp",
      "/projects/project-03/screenshot-2.webp",
      "/projects/project-03/screenshot-3.webp",
      "/projects/project-03/screenshot-4.webp",
      "/projects/project-03/screenshot-5.webp",
      "/projects/project-03/screenshot-6.webp",
      "/projects/project-03/screenshot-7.webp",
      "/projects/project-03/screenshot-8.webp",
      "/projects/project-03/screenshot-9.webp",
    ],
    github: null,
    live: null,
    featured: false,
  }
];
