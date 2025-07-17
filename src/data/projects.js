export const projects = [
  {
    id: 1,
    title: "Portfolio Vitrine",
    shortDescription: "Un site vitrine moderne et responsive pour présenter vos projets et compétences.",
    fullDescription: "Portfolio personnel développé avec React et Tailwind CSS, présentant mes compétences et projets de manière élégante et professionnelle.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    category: "Frontend",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    status: "completed"
  },
  {
    id: 2,
    title: "Application Dashboard",
    shortDescription: "Un dashboard interactif avec statistiques, graphiques et gestion avancée.",
    fullDescription: "Dashboard administratif avec visualisation de données en temps réel, graphiques interactifs et système de gestion des utilisateurs.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    technologies: ["React", "Node.js", "Chart.js", "MongoDB"],
    category: "Full-Stack",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    status: "completed"
  },
  {
    id: 3,
    title: "E-commerce Next Gen",
    shortDescription: "Une boutique en ligne performante, design et optimisée pour la conversion.",
    fullDescription: "Plateforme e-commerce moderne avec système de paiement intégré, gestion des stocks et interface d'administration complète.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "TypeScript"],
    category: "Full-Stack",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    status: "in-progress"
  },
  {
    id: 4,
    title: "API RESTful",
    shortDescription: "API REST complète avec authentification et documentation interactive.",
    fullDescription: "API RESTful développée avec Node.js et Express, incluant authentification JWT, validation des données et documentation Swagger.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80",
    technologies: ["Node.js", "Express", "JWT", "Swagger"],
    category: "Backend",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    status: "completed"
  },
  {
    id: 5,
    title: "Application Mobile",
    shortDescription: "Application mobile cross-platform avec React Native.",
    fullDescription: "Application mobile développée avec React Native, offrant une expérience utilisateur fluide sur iOS et Android.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80",
    technologies: ["React Native", "Expo", "Firebase", "Redux"],
    category: "Mobile",
    githubUrl: "#",
    liveUrl: "#",
    featured: false,
    status: "planned"
  },
  {
    id: 6,
    title: "Système de Gestion",
    shortDescription: "Système de gestion d'entreprise avec interface moderne.",
    fullDescription: "Système de gestion complet incluant gestion des clients, facturation, reporting et tableau de bord analytique.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80",
    technologies: ["Vue.js", "Laravel", "MySQL", "Docker"],
    category: "Full-Stack",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    status: "completed"
  }
];

export const getFeaturedProjects = () => {
  return projects.filter(project => project.featured);
};

export const getProjectsByCategory = (category) => {
  if (!category) return projects;
  return projects.filter(project => project.category === category);
};

export const getProjectById = (id) => {
  return projects.find(project => project.id === parseInt(id));
};

export const getCategories = () => {
  const categories = [...new Set(projects.map(project => project.category))];
  return categories;
}; 