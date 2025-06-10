import React, { useRef, useEffect, useState } from "react";

// Defino componente Eye, que representa un ojo individual
const Eye = ({ mouse, eyeCenter, agrandarOjos }) => {
  // Defino el radio normal y el radio agrandado para el ojo y la pupila
  const normalEyeRadius = 30;
  const normalPupilRadius = 10;
  const bigPupilRadius = 15;

  // Uso estados para manejar el tamaño del ojo y la pupila
  const [eyeRadius, setEyeRadius] = useState(normalEyeRadius);
  const [pupilRadius, setPupilRadius] = useState(normalPupilRadius);

  // Cuando la prop agrandarOjos cambia, ajusto el tamaño de la pupila (y el ojo si hace falta)
  useEffect(() => {
    if (agrandarOjos) {
      setPupilRadius(bigPupilRadius);
    } else {
      setEyeRadius(normalEyeRadius);
      setPupilRadius(normalPupilRadius);
    }
  }, [agrandarOjos]);

  // Calculo la posición de la pupila para que siga el mouse, pero sin salirse del ojo
  const dx = mouse.x - eyeCenter.x;
  const dy = mouse.y - eyeCenter.y;
  const angle = Math.atan2(dy, dx);
  const maxDist = eyeRadius - pupilRadius - 4; // Limito la distancia máxima de la pupila al borde del ojo
  const dist = Math.min(Math.hypot(dx, dy), maxDist);
  const pupilX = eyeCenter.x + Math.cos(angle) * dist;
  const pupilY = eyeCenter.y + Math.sin(angle) * dist;

  return (
    <>
      {/* Dibujo el ojo (blanco), con transición suave en el radio */}
      <circle
        cx={eyeCenter.x}
        cy={eyeCenter.y}
        r={eyeRadius}
        fill="#fff"
        stroke="#222"
        strokeWidth="3"
        style={{ transition: "r 0.3s" }}
      />
      {/* Dibujo la pupila (negra), también con transición suave */}
      <circle
        cx={pupilX}
        cy={pupilY}
        r={pupilRadius}
        fill="#222"
        style={{ transition: "r 0.3s" }}
      />
    </>
  );
};

// Yo soy el componente Ojitos, que contiene ambos ojos y maneja el estado del mouse
const Ojitos = ({ agrandarOjos = false }) => {
  // Mantengo la posición del mouse relativa al SVG
  const [mouse, setMouse] = useState({ x: 100, y: 100 });
  const svgRef = useRef(null);

  // Escucho el movimiento del mouse sobre el SVG y actualizo el estado
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = svgRef.current.getBoundingClientRect();
      setMouse({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };
    const svg = svgRef.current;
    svg.addEventListener("mousemove", handleMouseMove);
    return () => svg.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Defino las posiciones de los dos ojos
  const leftEye = { x: 60, y: 60 };
  const rightEye = { x: 140, y: 60 };

  return (
    <svg
      ref={svgRef}
      width={200}
      height={120}
      style={{ display: "block", margin: "20px auto" }}
    >
      {/* Renderizo ambos ojos, pasándoles la posición del mouse y la prop agrandarOjos */}
      <Eye mouse={mouse} eyeCenter={leftEye} agrandarOjos={agrandarOjos} />
      <Eye mouse={mouse} eyeCenter={rightEye} agrandarOjos={agrandarOjos} />
    </svg>
  );
};

export default Ojitos;
