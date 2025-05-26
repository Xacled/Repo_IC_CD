import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App"; 
test("suma dos números y muestra el resultado", () => {
  render(<App />);

  const inputNum1 = screen.getByPlaceholderText("Número 1");
  const inputNum2 = screen.getByPlaceholderText("Número 2");
  const botonSumar = screen.getByRole("button", { name: /sumar/i });

  // Simular entrada de números
  fireEvent.change(inputNum1, { target: { value: "3" } });
  fireEvent.change(inputNum2, { target: { value: "5" } });

  // Clic en el botón
  fireEvent.click(botonSumar);

  // Verificar resultado
  const resultado = screen.queryByText("Resultado: 8");
  expect(resultado).toBeTruthy();
  });
