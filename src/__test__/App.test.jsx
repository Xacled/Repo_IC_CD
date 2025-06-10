import '@testing-library/jest-dom';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";

test("suma dos números y muestra el resultado", () => {
  // Primero, renderizo el componente para tener todo listo en el DOM virtual
  render(<App />);

  // Busco los inputs por su placeholder para poder simular que escribo ahí
  const inputNum1 = screen.getByPlaceholderText("Número 1");
  const inputNum2 = screen.getByPlaceholderText("Número 2");

  // También agarro el botón que dice "Sumar" para simular el click después
  const botonSumar = screen.getByRole("button", { name: /sumar/i });

  // Ahora, simulo que escribo "3" en el primer input y "5" en el segundo
  fireEvent.change(inputNum1, { target: { value: "3" } });
  fireEvent.change(inputNum2, { target: { value: "5" } });

  // Luego, simulo que hago click en el botón para disparar la suma
  fireEvent.click(botonSumar);

  // Finalmente, verifico que aparezca el texto exacto Resultado: "8"
  expect(screen.getByText("8")).toBeInTheDocument();
});
