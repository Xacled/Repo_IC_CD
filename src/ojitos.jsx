import React, { useRef, useEffect, useState } from "react";

const Eye = ({ mouse, eyeCenter, agrandarOjos }) => {
  // Defino el radio normal y el radio agrandado
  const normalEyeRadius = 30;
  const normalPupilRadius = 10;
  const bigPupilRadius = 15;

  const [eyeRadius, setEyeRadius] = useState(normalEyeRadius);
  const [pupilRadius, setPupilRadius] = useState(normalPupilRadius);

  useEffect(() => {
    if (agrandarOjos) {
      setPupilRadius(bigPupilRadius);
    } else {
      setEyeRadius(normalEyeRadius);
      setPupilRadius(normalPupilRadius);
    }
  }, [agrandarOjos]);

  // Calculo la posición de la pupila para que siga el mouse
  const dx = mouse.x - eyeCenter.x;
  const dy = mouse.y - eyeCenter.y;
  const angle = Math.atan2(dy, dx);
  const maxDist = eyeRadius - pupilRadius - 4;
  const dist = Math.min(Math.hypot(dx, dy), maxDist);
  const pupilX = eyeCenter.x + Math.cos(angle) * dist;
  const pupilY = eyeCenter.y + Math.sin(angle) * dist;

  return (
    <>
      {/* Dibujo el ojo, y le aplico una transición suave al radio */}
      <circle
        cx={eyeCenter.x}
        cy={eyeCenter.y}
        r={eyeRadius}
        fill="#fff"
        stroke="#222"
        strokeWidth="3"
        style={{ transition: "r 0.3s" }}
      />
      {/* Dibujo la pupila, también con transición */}
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

// Yo soy el componente Ojitos, y manejo el estado del mouse y paso la prop agrandarOjos a cada ojo
const Ojitos = ({ agrandarOjos = false }) => {
  const [mouse, setMouse] = useState({ x: 100, y: 100 });
  const svgRef = useRef(null);

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

  const leftEye = { x: 60, y: 60 };
  const rightEye = { x: 140, y: 60 };

  return (
    <svg
      ref={svgRef}
      width={200}
      height={120}
      style={{ display: "block", margin: "20px auto" }}
    >
      {/* Yo paso la prop agrandarOjos a cada ojo */}
      <Eye mouse={mouse} eyeCenter={leftEye} agrandarOjos={agrandarOjos} />
      <Eye mouse={mouse} eyeCenter={rightEye} agrandarOjos={agrandarOjos} />
    </svg>
  );
};

export default Ojitos;
