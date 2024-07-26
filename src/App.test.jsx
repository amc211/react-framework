import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("should display react at least once", () => {
    render(<App />);
    const linkElement = screen.getAllByText(/react/i);
    expect(linkElement.length).toBeGreaterThan(0);
  });
});
