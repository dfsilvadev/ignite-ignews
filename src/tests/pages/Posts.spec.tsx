import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";

import { getPrismicClient } from "../../services/prismic";

import Posts, { getStaticProps } from "../../pages/posts";

jest.mock("../../services/prismic");

describe("Posts Page", () => {
  const posts = [
    {
      slug: "my-new-post",
      title: "My New Post",
      excerpt: "Post excerpt",
      updatedAt: "01 de abril de 2021",
    },
  ];

  it("should be renders currectly", () => {
    render(<Posts posts={posts} />);

    expect(screen.getByText("My New Post")).toBeInTheDocument();
  });

  it("should be loads initial data", async () => {
    const getPrismicClientMocked = mocked(getPrismicClient);

    getPrismicClientMocked.mockReturnValueOnce({
      query: jest.fn().mockResolvedValueOnce({
        results: [
          {
            uid: "my-new-post",
            data: {
              title: [{ type: "heading", text: "My New Post" }],
              content: [{ type: "paragraph", text: "Post excerpt" }],
            },
            last_publication_date: "04-01-2021",
          },
        ],
      }),
    } as any);

    const response = await getStaticProps({});

    expect(response).toEqual(
      expect.objectContaining({
        props: {
          posts,
        },
      })
    );
  });
});
