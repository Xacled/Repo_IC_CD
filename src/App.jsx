import React, { useState } from "react";

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <div style={{ fontFamily: "Arial, sans-serif", textAlign: "center", marginTop: "3rem" }}>
      <h1>Mi app sencilla para CI/CD</h1>
      <p>Has hecho click {contador} veces.</p>
      <button onClick={() => setContador(contador + 1)}>Haz click aquí</button>
    </div>
  );
}
