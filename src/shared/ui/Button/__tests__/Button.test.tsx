import { render, screen } from "@testing-library/react";
import { Button, ThemeButton } from "../Button";

describe("Button", () => {
  it("should be render text", () => {
    render(<Button>Тест</Button>);
    expect(screen.getByText("Тест")).toBeInTheDocument();
  });
  it("should have class", () => {
    render(<Button theme={ThemeButton.CLEAR}>Тест</Button>);
    expect(screen.getByText("Тест")).toHaveClass("clear");
  });
});
