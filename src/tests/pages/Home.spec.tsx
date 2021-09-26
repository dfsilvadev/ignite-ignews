import { render, screen } from "@testing-library/react";

import { stripe } from "../../services/stripe";

import Home, { getStaticProps } from "../../pages/index";
import { mocked } from "ts-jest/utils";

jest.mock("next/router");
jest.mock("next-auth/client", () => {
  return {
    useSession: () => [null, false],
  };
});
jest.mock("../../services/stripe");

describe("Home page", () => {
  const product = {
    priceId: "fake-priceId",
    amount: "$10.00",
  };

  it("should be renders currectly", () => {
    render(<Home product={product} />);

    expect(screen.getByText("for $10.00 month")).toBeInTheDocument();
  });

  it("should be loads initial data", async () => {
    const stripePriceRetrieveMocked = mocked(stripe.prices.retrieve);

    stripePriceRetrieveMocked.mockResolvedValueOnce({
      id: "fake-priceId",
      unit_amount: 1000,
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          product,
        },
      })
    );
  });
});
