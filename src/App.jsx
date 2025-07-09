import { useState } from "react";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 transition-colors duration-300">
      {/* Main Content with padding for fixed header */}
      <div className="pt-20">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 bg-anthracite/95 backdrop-blur-md shadow-none z-50">
          <div className="container-custom flex flex-col items-center justify-center h-20">
            <div className="text-2xl font-bold text-accent tracking-tight mb-1">
              Lucas FANNER
            </div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-8 w-full">
              <a
                href="#home"
                className="text-textsecondary hover:text-accent transition-colors font-medium"
              >
                Accueil
              </a>
              <a
                href="#projects"
                className="text-textsecondary hover:text-accent transition-colors font-medium"
              >
                Projets
              </a>
              <a
                href="#about"
                className="text-textsecondary hover:text-accent transition-colors font-medium"
              >
                À propos
              </a>
              <a
                href="#contact"
                className="text-textsecondary hover:text-accent transition-colors font-medium"
              >
                Contact
              </a>
            </nav>
            {/* Mobile Burger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden p-2 rounded-lg bg-anthracite hover:bg-primary transition-colors"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-7 h-7 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7 text-accent"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
            {/* Mobile Menu */}
            <div
              className={`md:hidden fixed top-20 left-0 right-0 bg-anthracite/95 backdrop-blur-md z-40 transition-all duration-300 ${
                isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-4 pointer-events-none"
              }`}
            >
              <nav className="flex flex-col items-center space-y-4 py-6">
                <a
                  href="#home"
                  className="text-textsecondary hover:text-accent transition-colors font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Accueil
                </a>
                <a
                  href="#projects"
                  className="text-textsecondary hover:text-accent transition-colors font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Projets
                </a>
                <a
                  href="#about"
                  className="text-textsecondary hover:text-accent transition-colors font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  À propos
                </a>
                <a
                  href="#contact"
                  className="text-textsecondary hover:text-accent transition-colors font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section
          id="home"
          className="section bg-gray-900 border-b border-gray-800"
        >
          <div className="container-custom">
            <div className="text-center animate-fade-in">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-gray-100 mb-6 animate-scale-in">
                Bonjour, je suis{" "}
                <span className="text-primary-400 animate-glow">Lucas</span>
              </h1>
              <p
                className="text-lg sm:text-xl md:text-2xl text-gray-400 mb-8 max-w-3xl mx-auto animate-slide-up px-4"
                style={{ animationDelay: "0.3s" }}
              >
                Développeur passionné créant des expériences numériques modernes
                et innovantes
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  className="btn-primary text-lg px-8 py-3 animate-slide-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  Voir mes projets
                </button>
                <button
                  className="bg-white text-charbon font-medium text-lg px-8 py-3 rounded-lg shadow-md hover:shadow-[0_0_0_3px_#BB86FC] transition-all animate-slide-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  Télécharger CV
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="section bg-gray-800 border-b border-gray-800">
          <div className="container-custom">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-100 mb-12">
              Mes Compétences
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <div
                className="card text-center animate-scale-in"
                style={{ animationDelay: "0.1s" }}
              >
                <div className="text-4xl mb-4 animate-float">💻</div>
                <h3 className="text-xl font-semibold mb-2">Frontend</h3>
                <p className="text-gray-400">React, TypeScript, Tailwind CSS</p>
              </div>
              <div
                className="card text-center animate-scale-in"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="text-4xl mb-4 animate-float">⚙️</div>
                <h3 className="text-xl font-semibold mb-2">Backend</h3>
                <p className="text-gray-400">
                  PHP, Node.js, Python, MySQL, MongoDB
                </p>
              </div>
              <div
                className="card text-center animate-scale-in"
                style={{ animationDelay: "0.3s" }}
              >
                <div className="text-4xl mb-4 animate-float">🚀</div>
                <h3 className="text-xl font-semibold mb-2">DevOps</h3>
                <p className="text-gray-400">Docker, CI/CD, Git</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="section bg-gray-900 border-b border-gray-800"
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Column - Image & Stats */}
              <div className="space-y-8">
                {/* Profile Image Placeholder */}
                <div className="relative">
                  <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto bg-accent rounded-full flex items-center justify-center text-charbon text-4xl sm:text-6xl font-bold shadow-2xl animate-scale-in animate-float">
                    L
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-800 rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-primary-400">
                      3+
                    </div>
                    <div className="text-sm text-gray-400">
                      Années d'expérience
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-primary-400">
                      50+
                    </div>
                    <div className="text-sm text-gray-400">
                      Projets réalisés
                    </div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 shadow-md">
                    <div className="text-2xl font-bold text-primary-400">
                      100%
                    </div>
                    <div className="text-sm text-gray-400">
                      Satisfaction client
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                    À propos de moi
                  </h2>
                  <div className="w-20 h-1 bg-primary-400 rounded-full mb-6"></div>
                </div>

                <p className="text-lg text-gray-400 leading-relaxed">
                  Passionné par le développement web et les nouvelles
                  technologies, je crée des solutions numériques innovantes qui
                  allient performance, design et expérience utilisateur.
                </p>

                <p className="text-lg text-gray-400 leading-relaxed">
                  Mon approche combine créativité technique et rigueur
                  méthodologique pour livrer des projets qui dépassent les
                  attentes et créent une vraie valeur ajoutée.
                </p>

                {/* Experience Timeline */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-gray-100 mb-4">
                    Mon Parcours
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-100">
                          Admis en cursus Ingénieur Informatique & Multimédia
                        </h4>
                        <p className="text-primary-400">
                          CNAM-Enjmin • 2025 - 2028
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          Cursus en alternance de trois ans, habilité par la
                          CTI, formant des ingénieurs capables de développer des
                          applications logicielles classiques tout en concevant
                          des systèmes interactifs et multimédias (réalité
                          virtuelle, 3D immersive, architectures réseau).
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-100">
                          Développeur Full Stack PHP en Alternance
                        </h4>
                        <p className="text-primary-400">
                          AuCoffre.com • Septembre 2024 - Août 2025
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          Création d'interfaces utilisateur modernes et
                          responsives
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-3 h-3 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <h4 className="font-semibold text-gray-100">
                          BUT Informatique
                        </h4>
                        <p className="text-primary-400">
                          IUT de Bordeaux • 2022 - 2025
                        </p>
                        <p className="text-gray-400 text-sm mt-1">
                          En trois ans au BUT Informatique de l’IUT de Bordeaux,
                          j’ai exploré de A à Z le cycle de vie des projets web,
                          de la conception d’API à la sécurisation des
                          infrastructures, tout en confrontant au quotidien les
                          enjeux méthodologiques et éthiques du numérique.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <button className="btn-primary">Voir mon CV complet</button>
                  <button className="btn-secondary">Me contacter</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section bg-gray-800">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-100 mb-4">
                Contactez-moi
              </h2>
              <div className="w-20 h-1 bg-primary-400 rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Intéressé par mon profil ? N'hésitez pas à me contacter pour
                discuter de vos projets !
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">
                  Envoyez-moi un message
                </h3>

                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Prénom
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Nom
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Sujet de votre message"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      className="w-full px-4 py-3 border border-gray-600 rounded-lg bg-gray-700 text-gray-100 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Décrivez votre projet ou votre demande..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-3 hover:scale-105 transition-transform"
                  >
                    Envoyer le message
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div className="space-y-8">
                <h3 className="text-2xl font-semibold text-gray-100 mb-6">
                  Mes coordonnées
                </h3>

                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">
                        Email
                      </h4>
                      <p className="text-gray-400">lucas.fanner@example.com</p>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">
                        Localisation
                      </h4>
                      <p className="text-gray-400">Bordeaux, France</p>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-primary-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-100">
                        Réseaux sociaux
                      </h4>
                      <div className="flex space-x-4 mt-2">
                        <a
                          href="#"
                          className="text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          className="text-primary-400 hover:text-primary-300 transition-colors"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fixed Availability Badge */}
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
          <div className="bg-green-500 text-white px-3 py-2 md:px-4 rounded-full text-xs md:text-sm font-medium shadow-lg animate-pulse">
            <div className="flex items-center space-x-1 md:space-x-2">
              <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-white rounded-full animate-ping"></div>
              <span className="hidden sm:inline">Open to work</span>
              <span className="sm:hidden">OTW</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
