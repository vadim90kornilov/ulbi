import { fireEvent, render, screen } from "@testing-library/react";
import { Sidebar } from "../Sidebar";
import { renderWithTranslation } from "shared/lib/tests";

describe("Sidebar", () => {
  it("should be render text", () => {
    renderWithTranslation(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("should be render text", () => {
    renderWithTranslation(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
