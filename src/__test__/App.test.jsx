import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App";
import '@testing-library/jest-dom';

test("suma dos números y muestra el resultado", () => {
  render(<App />);

  const inputNum1 = screen.getByPlaceholderText("Número 1");
  const inputNum2 = screen.getByPlaceholderText("Número 2");
  const botonSumar = screen.getByRole("button", { name: /sumar/i });

  fireEvent.change(inputNum1, { target: { value: "3" } });
  fireEvent.change(inputNum2, { target: { value: "5" } });

  fireEvent.click(botonSumar);

  expect(screen.getByText("Resultado: 8")).toBeInTheDocument();
});
