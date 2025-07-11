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
    <div className="w-full max-w-6xl mx-auto py-16 bg-transparent px-20">
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
          <SwiperSlide key={idx} className="max-w-lg">
            <div className="bg-anthracite rounded-3xl shadow-2xl border-2 border-accent p-10 flex flex-col items-center transition-transform duration-300 hover:scale-105">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-72 object-cover rounded-2xl shadow-lg mb-6"
              />
              <h3 className="text-3xl font-bold text-accent mb-4 drop-shadow">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-8 text-center text-lg">
                {project.description}
              </p>
              <a
                href={project.link}
                className="inline-block btn-primary px-10 py-4 text-xl font-semibold shadow hover:scale-105 transition-transform"
              >
                Voir le projet
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
