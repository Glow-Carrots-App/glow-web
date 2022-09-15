import { render, screen } from "@testing-library/react";

import { CreateAccountPage } from ".";

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({}),
}));

describe("Create Account page", () => {
  beforeEach(() => render(<CreateAccountPage />));
  it("should render 2 images", () => {
    const images = screen.getAllByRole("img");
    expect(images.length).toBe(2);
  });
  it("should render a header", () => {
    const header = screen.getByText(/Create Account/i);
    expect(header).toBeInTheDocument();
  });
  it("should render the CreateAccountForm component", () => {
    const emailInput = screen.getByPlaceholderText("Email");
    expect(emailInput).toBeInTheDocument();
  });
  it("should render a pTag and a link", () => {
    const haveAccountText = screen.getByText(/Already have an account/i);
    expect(haveAccountText).toBeInTheDocument();
    const signInLink = screen.getByRole("link");
    expect(signInLink).toHaveAttribute("href", "/sign-in");
  });
});
