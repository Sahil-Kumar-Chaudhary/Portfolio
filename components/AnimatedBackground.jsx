import { useCallback, useEffect, useState } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const AnimatedBackground = ({ id = "bg-particles" }) => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    setIsTouchDevice(
      "ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches
    );
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
      <Particles
        className="w-full h-full absolute top-0 left-0 translate-z-0"
        id={id}
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "" } },
          fpsLimit: isTouchDevice ? 30 : 120,
          interactivity: {
            events: {
              onClick: { enable: false, mode: "push" },
              onHover: { enable: !isTouchDevice, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 90 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#e68e2e" },
            links: {
              color: "#f5d393",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: !isTouchDevice },
            move: {
              direction: "none",
              enable: true,
              outMode: { default: "bounce" },
              random: false,
              speed: isTouchDevice ? 0.5 : 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: isTouchDevice ? 1200 : 800 },
              value: isTouchDevice ? 30 : 80,
            },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: isTouchDevice ? 3 : 5 } },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
};

export default AnimatedBackground;
