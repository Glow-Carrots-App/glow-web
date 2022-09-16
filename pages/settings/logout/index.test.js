import { render, screen } from "@testing-library/react";

import LogOutPage from ".";

jest.mock("../../../context/AuthContext", () => ({
  useAuth: () => ({
    authedUser: {},
  }),
}));

jest.mock("../../../context/UserContext", () => ({
  useUser: () => ({
    user: {},
  }),
}));

describe("PasswordPage page", () => {
  beforeEach(() => render(<LogOutPage />));
  it("should render two images", () => {
    const images = screen.getAllByRole("images");
    expect(images.length).toBe(2);
  });
});
