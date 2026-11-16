import { fireEvent, screen } from "@testing-library/react";
import { Sidebar } from "../Sidebar";
import { renderComponent } from "shared/lib/tests/renderComponent/renderComponent";

describe("Sidebar", () => {
  it("should be render text", () => {
    renderComponent(<Sidebar />);
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
  });

  it("should be render text", () => {
    renderComponent(<Sidebar />);
    const toggleButton = screen.getByTestId("sidebar-toggle");
    expect(screen.getByTestId("sidebar")).toBeInTheDocument();
    fireEvent.click(toggleButton);
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed");
  });
});
