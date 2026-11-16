import { render, screen } from "@testing-library/react";
import { Button, ButtonTheme } from "../Button";

describe("Button", () => {
  it("should be render text", () => {
    render(<Button>Тест</Button>);
    expect(screen.getByText("Тест")).toBeInTheDocument();
  });
  it("should have class", () => {
    render(<Button theme={ButtonTheme.CLEAR}>Тест</Button>);
    expect(screen.getByText("Тест")).toHaveClass("clear");
  });
});
