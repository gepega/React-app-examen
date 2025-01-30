import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

// Mock del componente Login para evitar errores en la prueba
jest.mock("./Login", () => () => <div data-testid="login-component"></div>);

describe("Navbar Component", () => {
  test("Renderiza correctamente el título de la aplicación", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );
    expect(screen.getByText("Prei Plant Applicatie")).toBeInTheDocument();
  });

  test("Renderiza los enlaces de navegación", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Rijen")).toBeInTheDocument();
    expect(screen.getByText("Chat")).toBeInTheDocument();
  });

  test("Muestra y oculta el menú móvil al hacer clic en el botón hamburguesa", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const menuButton = screen.getByRole("button");
    expect(menuButton).toBeInTheDocument();

    // Verificar que el menú está oculto al inicio
    const navMenu = screen.getByText("Home").closest("ul");
    expect(navMenu).toHaveClass("-translate-y-full");

    // Simular clic para abrir el menú
    fireEvent.click(menuButton);
    expect(navMenu).not.toHaveClass("-translate-y-full");

    // Simular clic para cerrar el menú
    fireEvent.click(menuButton);
    expect(navMenu).toHaveClass("-translate-y-full");
  });

  test("Renderiza el componente Login en vista de escritorio", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    expect(screen.getByTestId("login-component")).toBeInTheDocument();
  });
});
