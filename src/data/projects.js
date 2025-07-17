export const projects = [
  {
    id: 1,
    title: "Portfolio Vitrine",
    shortDescription: "Un site vitrine pour présenter mes projets et compétences.",
    fullDescription: "Portfolio personnel développé avec React et Tailwind CSS, présentant mes compétences et projets de manière élégante et professionnelle.",
    image: "projects screens/portfolio hero.png",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    category: "Frontend",
    githubUrl: "https://github.com/xentee/portfolio",
    liveUrl: "https://lucasfanner-portfolio.vercel.app/",
    featured: true,
    status: "in-progress"
  },
  {
    id: 2,
    title: "CSLedger",
    shortDescription: "Gestionnaire d'investissements dans les skins CS2.",
    fullDescription: "Application web permettant de gérer plusieurs portefeuilles de skins pour Counter-Strike 2. Suivi des achats/ventes, calculs des profits, et visualisation structurée des investissements. Conçue pour les traders de skins cherchant une alternative aux tableaux Excel.",
    image: "https://images.unsplash.com/photo-1602407294553-6a7553f46f94?auto=format&fit=crop&w=600&q=80",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "Full-Stack",
    githubUrl: "https://github.com/xentee/CSLedger",
    liveUrl: "#",
    featured: true,
    status: "in-progress"
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