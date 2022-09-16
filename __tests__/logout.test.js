import { render, screen } from "@testing-library/react";

import LogOutPage from "../pages/settings/logout";

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
  it("should render two images", () => {
    render(<LogOutPage />);
    const images = screen.getAllByRole("images");
    expect(images.length).toBe(2);
  });
});
