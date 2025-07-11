import { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Ajuster la taille du canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Configuration du mesh gradient
    let time = 0;
    const points = [];
    const numPoints = 6;

    // Créer les points initiaux
    for (let i = 0; i < numPoints; i++) {
      points.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 200 + 100,
        color: `hsl(${280 + i * 60}, 70%, 60%)`,
      });
    }

    // Fonction d'animation
    const animate = () => {
      time += 0.005;

      // Effacer le canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Mettre à jour les positions des points
      points.forEach((point, index) => {
        point.x += point.vx;
        point.y += point.vy;

        // Rebondir sur les bords
        if (point.x < 0 || point.x > canvas.width) point.vx *= -1;
        if (point.y < 0 || point.y > canvas.height) point.vy *= -1;

        // Changer les couleurs progressivement
        const hue = (280 + index * 60 + time * 20) % 360;
        point.color = `hsl(${hue}, 70%, 60%)`;
      });

      // Créer le gradient mesh
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height)
      );

      // Ajouter les couleurs du mesh
      points.forEach((point, index) => {
        const alpha = 0.3 + 0.2 * Math.sin(time + index);
        // Extraire le hue de la couleur HSL
        const hue = (280 + index * 60 + time * 20) % 360;
        gradient.addColorStop(
          index / (points.length - 1),
          `hsla(${hue}, 70%, 60%, ${alpha})`
        );
      });

      // Dessiner le fond
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Ajouter des formes géométriques flottantes
      ctx.globalCompositeOperation = "overlay";
      points.forEach((point, index) => {
        const size = point.radius * (0.5 + 0.5 * Math.sin(time * 2 + index));

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = `${point.color}20`;
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0.8 }}
    />
  );
};

export default AnimatedBackground;
