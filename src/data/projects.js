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
    image: "projects screens/homepage csledger.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    category: "Full-Stack",
    githubUrl: "https://github.com/xentee/CSLedger",
    liveUrl: "#",
    featured: true,
    status: "in-progress"
  },
  {
    id: 3,
    title: "Winalyze - League of Legends Stats",
    shortDescription: "Dashboard interactif de statistiques League of Legends.",
    fullDescription: "Application de data visualisation permettant d’analyser les performances d’un joueur sur League of Legends. Récupération de données via l’API Riot, affichage de graphiques interactifs (radars, pie charts) et présentation du rang, des comptes utilisés et de l'évolution au fil du temps.",
    image: "projects screens/winalyze.png",
    technologies: ["Dash", "Plotly", "Python", "Pandas", "Riot API"],
    category: "Data Visualization",
    githubUrl: "https://github.com/xentee/dataviz-winalyze",
    liveUrl: "#",
    featured: true,
    status: "completed"
  },
  {
    id: 4,
    title: "Tests & Projets TypeScript",
    shortDescription: "Explorations et mini-projets pour progresser avec TypeScript.",
    fullDescription: "Dépôt regroupant divers projets d'entraînement réalisés avec TypeScript et Node.js. Chaque sous-projet permet d'explorer des concepts clés : typage strict, manipulation d'API, algorithmes, ou encore création de petits outils CLI. Idéal pour affiner sa compréhension de l'écosystème TypeScript en pratique.",
    image: "projects screens/test typescripts.png",
    technologies: ["TypeScript", "Node.js", "ts-node", "ESM"],
    category: "Backend / CLI",
    githubUrl: "https://github.com/xentee/projets_tests_typescript",
    liveUrl: "#",
    featured: true,
    status: "completed"
  },
  {
    id: 5,
    title: "Go Next BOT - Bot Discord",
    shortDescription: "Bot Discord pour la gestion de giveaways et d’interactions avancées.",
    fullDescription: "GoNextBOT est un bot Discord codé en JavaScript/Node.js permettant d'organiser des giveaways, d'automatiser des actions de modération et de proposer des interactions personnalisées avec les utilisateurs (réponses contextuelles, réactions, systèmes de rôles, etc.). Ce projet sert de base modulable pour créer un bot communautaire réactif et évolutif.",
    image: "projects screens/gonextbot.webp",
    technologies: ["Node.js", "Discord.js", "JavaScript"],
    category: "Bot Discord",
    githubUrl: "https://github.com/xentee/GoNextBOT",
    liveUrl: "#",
    featured: true,
    status: "in-progress"
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