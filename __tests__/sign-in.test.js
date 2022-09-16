import { render, screen } from "@testing-library/react";

import SignIn from "../pages/sign-in";

jest.mock("../context/AuthContext", () => ({
  useAuth: () => ({
    authedUser: null,
  }),
}));

jest.mock("../context/UserContext", () => ({
  useUser: () => ({
    user: null,
  }),
}));

describe("Signin page", () => {
  beforeEach(() => render(<SignIn />));
  it("should render 2 images", () => {
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(2);
  });
  it("should render a header", () => {
    const header = screen.getByText(/Glow/i);
    expect(header).toBeInTheDocument();
  });
  it("should render a pTag and a link", () => {
    const createAccountText = screen.getByText(/Don't have an account/i);
    expect(createAccountText).toBeInTheDocument();
    const signUpLink = screen.getByRole("link");
    expect(signUpLink).toHaveAttribute("href", "/create-account");
  });
});
