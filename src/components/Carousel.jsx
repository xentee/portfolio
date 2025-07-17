import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { getFeaturedProjects } from "../data/projects";

export default function Carousel() {
  const featuredProjects = getFeaturedProjects();

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-500';
      case 'in-progress':
        return 'bg-yellow-500';
      case 'planned':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'completed':
        return 'Terminé';
      case 'in-progress':
        return 'En cours';
      case 'planned':
        return 'Planifié';
      default:
        return 'Inconnu';
    }
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-8 sm:py-12 md:py-16 bg-transparent px-4 sm:px-8 md:px-20">
      <style>{`
        @media (max-width: 640px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 32px !important;
            height: 32px !important;
            font-size: 18px !important;
          }
        }
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
        {featuredProjects.map((project, idx) => (
          <SwiperSlide key={project.id} className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
            <div className="bg-anthracite rounded-3xl shadow-2xl border-2 border-accent p-4 sm:p-6 md:p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105">
              <div className="relative w-full mb-4 sm:mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 sm:h-56 md:h-72 object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getStatusColor(project.status)}`}>
                    {getStatusText(project.status)}
                  </span>
                </div>
              </div>
              
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-accent mb-2 sm:mb-4 drop-shadow text-center">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4 sm:mb-8 text-center text-base sm:text-lg">
                {project.shortDescription}
              </p>

              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {project.technologies.slice(0, 3).map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>

              {project.githubUrl !== "#" || project.liveUrl !== "#" ? (
                <div className="flex gap-3 w-full">
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-gray-700 text-gray-300 py-2 px-4 rounded-lg text-center hover:bg-accent hover:text-gray-900 transition-all duration-300 text-sm"
                    >
                      Repository
                    </a>
                  )}
                  {project.liveUrl !== "#" && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-accent text-gray-900 py-2 px-4 rounded-lg text-center hover:bg-primary-400 transition-all duration-300 text-sm"
                    >
                      Demo
                    </a>
                  )}
                </div>
              ) : (
                <span className="bg-gray-500/40 text-gray-300 px-6 sm:px-8 md:px-10 py-2 sm:py-3 md:py-4 text-base sm:text-lg md:text-xl font-semibold shadow rounded cursor-not-allowed opacity-60">
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
