import { useEffect, useRef } from "react";

export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let stars = [];
    let comets = [];
    const STAR_COUNT = 250;
    let scrollOffset = 0;
    let mouse = { x: -9999, y: -9999 };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      stars = [];
      for (let i = 0; i < STAR_COUNT; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;

        // Avoid placing a star near the center of the screen
        if (
          Math.abs(x - canvas.width / 2) < 50 &&
          Math.abs(y - canvas.height / 2) < 50
        ) {
          i--;
          continue;
        }

        stars.push({
          x,
          y,
          radius: Math.random() * 1.5 + 0.5,
          speed: Math.random() * 0.5 + 0.1,
          opacity: Math.random(),
          parallaxFactor: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const spawnComet = () => {
      comets.push({
        x: -100,
        y: Math.random() * (canvas.height / 2),
        speed: Math.random() * 6 + 4,
        angle: Math.random() * 0.2 - 0.1,
        size: Math.random() * 2 + 1,
        life: 1.0,
      });
    };

    const drawNebula = () => {
      const gradient = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 100,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      gradient.addColorStop(0, "rgba(128, 0, 128, 0.2)");
      gradient.addColorStop(0.4, "rgba(75, 0, 130, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };



    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawNebula();

      for (let star of stars) {
        const dx = mouse.x - star.x;
        const dy = mouse.y - (star.y - scrollOffset * star.parallaxFactor);
        const dist = Math.sqrt(dx * dx + dy * dy);
        const proximity = dist < 100 ? 1 - dist / 100 : 0;
        const radius = star.radius + proximity * 2;
        const opacity = Math.min(star.opacity + proximity * 0.5, 1);

        ctx.beginPath();
        ctx.arc(star.x, star.y - scrollOffset * star.parallaxFactor, radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fill();

        star.y += star.speed;
        if (star.y > canvas.height + 50) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }
      }

      comets.forEach((comet, i) => {
        const trailLength = 50;
        for (let t = 0; t < trailLength; t++) {
          const trailX = comet.x - t * comet.speed;
          const trailY = comet.y - t * comet.angle * comet.speed;
          const opacity = (1 - t / trailLength) * comet.life;
          ctx.beginPath();
          ctx.arc(trailX, trailY, comet.size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
          ctx.fill();
        }

        comet.x += comet.speed;
        comet.y += comet.angle * comet.speed;
        comet.life -= 0.003;

        if (comet.x > canvas.width + 100 || comet.life <= 0) {
          comets.splice(i, 1);
        }
      });



      requestAnimationFrame(drawStars);
    };

    createStars();
    drawStars();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", () => {
      scrollOffset = window.scrollY;
    });
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    resizeCanvas();
    const cometInterval = setInterval(spawnComet, 10000);

    return () => {
      clearInterval(cometInterval);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
}
