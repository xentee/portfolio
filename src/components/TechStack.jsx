import React from "react";

const logos = [
  { src: "/logo/csharp.svg", alt: "C#" },
  { src: "/logo/js.png", alt: "JavaScript" },
  { src: "/logo/java.png", alt: "Java" },
  { src: "/logo/ts.svg", alt: "TypeScript" },
  { src: "/logo/python.webp", alt: "TypeScript" },
];

export default function TechStack() {
  return (
    <div className="flex flex-wrap justify-center gap-8 py-6">
      {logos.map((logo) => (
        <div
          key={logo.alt}
          className="transition-transform duration-200 hover:scale-110 hover:drop-shadow-lg"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="h-16 w-auto object-contain"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
} 