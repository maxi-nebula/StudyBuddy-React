import { render, screen } from "@testing-library/react";
import App from "./App";
import Welcome from "./Components/Welcome";

test("renders learn react link", () => {
  render(<Welcome />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
