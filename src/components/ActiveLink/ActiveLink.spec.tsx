import { render } from "@testing-library/react";
import { ActiveLink } from ".";

jest.mock("next/router", () => {
  return {
    useRouter() {
      return {
        asPath: "/",
      };
    },
  };
});

describe("ActiveLink Component", () => {
  it("should be renders currectly", () => {
    const { container } = render(
      <ActiveLink href="/" activeClasName="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(container.textContent).toBe("Home");
  });

  it("should receiving active class", () => {
    const { container } = render(
      <ActiveLink href="/" activeClasName="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(container.firstChild).toHaveClass("active");
  });

  it("should be contains href attribute", () => {
    const { container } = render(
      <ActiveLink href="/" activeClasName="active">
        <a>Home</a>
      </ActiveLink>
    );

    expect(container.firstChild).toHaveAttribute("href");
  });
});
