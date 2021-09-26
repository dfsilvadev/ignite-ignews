import { render, screen } from "@testing-library/react";

import Home from "../../pages/index";

jest.mock("next/router");
jest.mock("next-auth/client", () => {
  return {
    useSession: () => [null, false],
  };
});

describe("Home page", () => {
  const product = {
    priceId: "fake-priceId",
    amount: "$10,00",
  };

  it("should be renders currectly", () => {
    render(<Home product={product} />);

    expect(screen.getByText("for $10,00 month")).toBeInTheDocument();
  });
});
