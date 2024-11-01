import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import Contact from "../components/Contact/Contact";

// Mock de los componentes que se importan en la página
jest.mock("../components/Main/Main", () => {
  const MainMock = () => <Main />;
  MainMock.displayName = "Main"; // Agregar displayName al mock para evitar eslint errors
  return MainMock;
});
jest.mock("../components/About/About", () => {
  const AboutMock = () => <About />;
  AboutMock.displayName = "About"; // Agregar displayName al mock para evitar eslint errors
  return AboutMock;
});
jest.mock("../components/Skills/Skills", () => {
  const SkillsMock = () => <Skills />;
  SkillsMock.displayName = "Skills"; // Agregar displayName al mock para evitar eslint errors
  return SkillsMock;
});
jest.mock("../components/Projects/Projects", () => {
  const ProjectsMock = () => <Projects />;
  ProjectsMock.displayName = "Projects"; // Agregar displayName al mock para evitar eslint errors
  return ProjectsMock;
});
jest.mock("../components/Contact/Contact", () => {
  const ContactMock = () => <Contact />;
  ContactMock.displayName = "Contact"; // Agregar displayName al mock para evitar eslint errors
  return ContactMock;
});

describe("HomePage", () => {
  it("should render all sections correctly", () => {
    render(<HomePage />);

    expect(
      screen.getByText(/Let's build something legendary together/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Check out some of my latest projects/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/What I Can Do/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Get In Touch/i)).toBeInTheDocument();
  });
});
