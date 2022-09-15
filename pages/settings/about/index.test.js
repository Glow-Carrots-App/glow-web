import { render, screen } from "@testing-library/react";

import AboutPage from ".";

jest.mock("../../../context/AuthContext", () => ({
  useAuth: () => ({
    authedUser: { uid: "fakeID" },
  }),
}));

jest.mock("../../../context/UserContext", () => ({
  useUser: () => ({
    user: {},
  }),
}));

describe("AboutPage page", () => {
  beforeEach(() => render(<AboutPage />));
  it("should render two images", () => {
    const images = screen.getAllByRole("images");
    expect(images.length).toBe(2);
  });
  it("should render a 'done' link", () => {
    const doneLink = screen.getByRole("doneLink");
    expect(doneLink).toHaveAttribute("href", "/settings");
  });
});
