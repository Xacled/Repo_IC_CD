import React, { useState } from "react";

export default function App() {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(null);

  const handleSumar = () => {
    setResultado(Number(numero1) + Number(numero2));
  };

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
      fontFamily: "Segoe UI, sans-serif"
    }}>
      <header style={{
        background: "#6366f1",
        color: "#fff",
        padding: "1.5rem 0",
        textAlign: "center",
        boxShadow: "0 2px 8px rgba(99,102,241,0.1)"
      }}>
        <h1 style={{ margin: 0, fontSize: "2.5rem", letterSpacing: "2px" }}>Calculadora Bonita</h1>
        <p style={{ margin: 0, fontSize: "1.1rem", opacity: 0.9 }}>Suma dos números fácilmente</p>
      </header>

      <main style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>
        <div style={{
          background: "#fff",
          padding: "2.5rem 2rem",
          borderRadius: "1.5rem",
          boxShadow: "0 8px 32px rgba(99,102,241,0.12)",
          minWidth: "320px",
          maxWidth: "90vw"
        }}>
          <h2 style={{
            color: "#6366f1",
            marginBottom: "1.5rem",
            textAlign: "center"
          }}>Suma dos números</h2>
          <div style={{
            display: "flex",
            gap: "1rem",
            marginBottom: "1.5rem",
            justifyContent: "center"
          }}>
            <input
              type="number"
              placeholder="Número 1"
              value={numero1}
              onChange={(e) => setNumero1(e.target.value)}
              style={{
                padding: "0.7rem",
                borderRadius: "0.5rem",
                border: "1px solid #c7d2fe",
                outline: "none",
                fontSize: "1rem",
                width: "100px",
                transition: "border 0.2s"
              }}
            />
            <span style={{ alignSelf: "center", fontSize: "1.5rem", color: "#a5b4fc" }}>+</span>
            <input
              type="number"
              placeholder="Número 2"
              value={numero2}
              onChange={(e) => setNumero2(e.target.value)}
              style={{
                padding: "0.7rem",
                borderRadius: "0.5rem",
                border: "1px solid #c7d2fe",
                outline: "none",
                fontSize: "1rem",
                width: "100px",
                transition: "border 0.2s"
              }}
            />
          </div>
          <button
            onClick={handleSumar}
            style={{
              background: "#6366f1",
              color: "#fff",
              border: "none",
              borderRadius: "0.5rem",
              padding: "0.8rem 2.5rem",
              fontSize: "1.1rem",
              fontWeight: "bold",
              cursor: "pointer",
              boxShadow: "0 2px 8px rgba(99,102,241,0.08)",
              transition: "background 0.2s"
            }}
          >
            Sumar
          </button>
          <p style={{
            marginTop: "2rem",
            fontSize: "1.3rem",
            color: "#374151",
            textAlign: "center",
            minHeight: "2.2rem"
          }}>
            {resultado !== null && <>Resultado: <strong>{resultado}</strong></>}
          </p>
        </div>
      </main>

      <footer style={{
        background: "#f1f5f9",
        color: "#6366f1",
        textAlign: "center",
        padding: "1rem 0",
        fontSize: "1rem",
        letterSpacing: "1px",
        borderTop: "1px solid #e0e7ff"
      }}>
        © {new Date().getFullYear()} Calculadora Bonita. Hecho con React.
      </footer>
    </div>
  );
}
