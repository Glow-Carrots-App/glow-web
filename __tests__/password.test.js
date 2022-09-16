import { render, screen } from "@testing-library/react";

import PasswordPage from "../pages/settings/password";

jest.mock("../context/AuthContext", () => ({
  useAuth: () => ({
    authedUser: {},
  }),
}));

jest.mock("../context/UserContext", () => ({
  useUser: () => ({
    user: {},
  }),
}));

describe("PasswordPage page", () => {
  beforeEach(() => render(<PasswordPage />));
  it("should render two images", () => {
    const images = screen.getAllByRole("images");
    expect(images.length).toBe(2);
  });
});
