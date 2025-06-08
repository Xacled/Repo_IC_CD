import React, { useState,useRef} from "react";
import Ojitos from "./ojitos";

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);
  const [agrandarOjos, setagrandarOjos] = useState(false);
  const botonRef = useRef(null);
  
  const handleMouseMove = (e) => {
    if (botonRef.current) {
      const rect = botonRef.current.getBoundingClientRect();
      const mouseX = e.clientX;
      const mouseY = e.clientY;
      const padding = 60; // distancia de "cerca"
      const isNear =
        mouseX > rect.left - padding &&
        mouseX < rect.right + padding &&
        mouseY > rect.top - padding &&
        mouseY < rect.bottom + padding;
      setagrandarOjos(isNear);
    }
  };

  return (
    <div style={estilos.contenedor} onMouseMove={handleMouseMove}>
      <div style={estilos.tarjeta}>
        <Ojitos agrandarOjos={agrandarOjos} />
        <h2 style={estilos.titulo}>Suma dos números</h2>
        <div>
          <input
            type="number"
            placeholder="Número 1"
            onChange={(e) => setNumero1(Number(e.target.value))}
            style={estilos.input}
          />
          <input
            type="number"
            placeholder="Número 2"
            onChange={(e) => setNumero2(Number(e.target.value))}
            style={estilos.input}
          />
        </div>
        <button
          ref={botonRef}
          onClick={() => setResultado(numero1 - numero2)} // En este boton se dispara la suma, si cambio la operacion el test falla
          style={estilos.boton}
        >
          Sumar
        </button>
        <p style={estilos.resultado}>
          Resultado: <strong>{resultado}</strong>
        </p>
      </div>
    </div>
  );
}

export const estilos = {
  contenedor: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
    fontFamily: "'Segoe UI', sans-serif",
  },
  tarjeta: {
    background: "#fff",
    padding: "2rem",
    borderRadius: "1rem",
    boxShadow: "0 8px 32px rgba(99,102,241,0.12)",
    textAlign: "center",
    minWidth: "320px",
  },
  titulo: {
    color: "#6366f1",
    marginBottom: "1.5rem",
  },
  input: {
    padding: "0.7rem",
    borderRadius: "0.5rem",
    border: "1px solid #c7d2fe",
    outline: "none",
    fontSize: "1rem",
    width: "100px",
    marginRight: "0.5rem",
  },
  boton: {
    background: "#6366f1",
    color: "#fff",
    border: "none",
    borderRadius: "0.5rem",
    padding: "0.8rem 2rem",
    fontSize: "1rem",
    cursor: "pointer",
    marginTop: "1rem",
  },
  resultado: {
    marginTop: "2rem",
    fontSize: "1.3rem",
    color: "#374151",
    minHeight: "2rem",
  },
};