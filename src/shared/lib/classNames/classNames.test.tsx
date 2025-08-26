import { classNames } from "./classNames";

describe("classname", () => {
  it("should be with only first param", () => {
    expect(classNames("someClass")).toBe("someClass");
  });
  it("should be with mods param", () => {
    expect(classNames("someClass", { hovered: true, scrollable: true })).toBe(
      "someClass hovered scrollable"
    );
  });

  it("should be with mods param if true", () => {
    expect(classNames("someClass", { hovered: false, scrollable: true })).toBe(
      "someClass scrollable"
    );
  });

  it("should be with add param  ", () => {
    expect(
      classNames("someClass", { hovered: false, scrollable: true }, [
        "additional",
      ])
    ).toBe("someClass additional scrollable");
  });

  it("should not add undefined mods ", () => {
    expect(
      classNames("someClass", { hovered: undefined, scrollable: true }, [
        "additional",
      ])
    ).toBe("someClass additional scrollable");
  });
});
