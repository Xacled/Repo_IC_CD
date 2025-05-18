import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

test("muestra el texto y actualiza contador al hacer click", () => {
  render(<App />);
  expect(screen.getByText("Mi app sencilla para CI/CD")).toBeInTheDocument();
  const button = screen.getByRole("button", { name: /click/i });
  fireEvent.click(button);
  expect(screen.getByText(/Clicks: 1/i)).toBeInTheDocument();
});
