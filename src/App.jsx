import { useState } from "react";

export default function App() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [resultado, setResultado] = useState(0);

  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>Suma dos números</h2>
      <input
        type="number"
        placeholder="Número 1"
        onChange={(e) => setNumero1(Number(e.target.value))}
        style={{ marginRight: "0.5rem" }}
      />
      <input
        type="number"
        placeholder="Número 2"
        onChange={(e) => setNumero2(Number(e.target.value))}
        style={{ marginRight: "0.5rem" }}
      />
      <button onClick={() => setResultado(numero1 + numero2)}>Sumar</button>
      <p>Resultado: {resultado}</p>
    </div>
  );
}
