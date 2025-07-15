import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

const projects = [
  {
    title: "Portfolio Vitrine",
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    description:
      "Un site vitrine moderne et responsive pour présenter vos projets et compétences.",
    link: "#",
  },
  {
    title: "Application Dashboard",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
    description:
      "Un dashboard interactif avec statistiques, graphiques et gestion avancée.",
    link: "#",
  },
  {
    title: "E-commerce Next Gen",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description:
      "Une boutique en ligne performante, design et optimisée pour la conversion.",
    link: "#",
  },
  {
    title: "E-commerce Next Gen",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description:
      "Une boutique en ligne performante, design et optimisée pour la conversion.",
    link: "#",
  },
  {
    title: "E-commerce Next Gen",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    description:
      "Une boutique en ligne performante, design et optimisée pour la conversion.",
    link: "#",
  },
];

export default function Carousel() {
  return (
    <div className="w-full max-w-6xl mx-auto py-8 sm:py-12 md:py-16 bg-transparent px-4 sm:px-8 md:px-20">
      <style>{`
        /* Réduction de la taille des flèches Swiper sur mobile */
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 32px !important;
            height: 32px !important;
            font-size: 18px !important;
          }
        }
        /* Optionnel : réduire l’icône à l’intérieur */
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 1.5rem !important;
        }
        @media (max-width: 640px) {
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 1.2rem !important;
          }
        }
      `}</style>
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-white">Mes Projets</h2>
      <div className="flex justify-center mb-8">
        <a
          href="/projets"
          className="btn-primary px-8 py-3 text-lg font-semibold shadow rounded-xl hover:scale-105 transition-transform"
        >
          Voir tous mes projets
        </a>
      </div>
      <Swiper
        modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        effect="coverflow"
        coverflowEffect={{
          rotate: 60,
          stretch: 0,
          depth: 300,
          modifier: 1.2,
          slideShadows: true,
        }}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="!bg-transparent"
        style={{ paddingBottom: "3rem" }}
      >
        {projects.map((project, idx) => (
          <SwiperSlide key={idx} className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="bg-anthracite rounded-3xl shadow-2xl border-2 border-accent p-4 sm:p-6 md:p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-56 md:h-72 object-cover rounded-2xl shadow-lg mb-4 sm:mb-6"
              />
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-2 sm:mb-4 drop-shadow">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-8 text-center text-base sm:text-lg">
                {project.description}
              </p>
              {project.link && project.link !== "#" ? (
                <a
                  href={project.link}
                  className="inline-block btn-primary px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-semibold shadow hover:scale-105 transition-transform"
                  target="_blank" rel="noopener noreferrer"
                >
                  Voir le projet
                </a>
              ) : (
                <span
                  className="inline-block bg-gray-500/40 text-gray-300 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-semibold shadow rounded cursor-not-allowed opacity-60"
                >
                  Bientôt disponible
                </span>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
