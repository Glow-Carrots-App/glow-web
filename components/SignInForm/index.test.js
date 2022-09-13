import { fireEvent, render, screen } from "@testing-library/react";

import SignInForm from ".";

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    login: jest.fn(),
  }),
}));

describe("SignInForm component", () => {
  beforeEach(() => render(<SignInForm />));
  it("should render an email input", () => {
    const emailInput = screen.getByPlaceholderText("Email");
    fireEvent.change(emailInput, { target: { value: "test email" } });
    expect(emailInput).toHaveValue("test email");
  });
  it("should render a password input", () => {
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(passwordInput, { target: { value: "test password" } });
    expect(passwordInput).toHaveValue("test password");
  });
  it("should render and then disable the sign in button", () => {
    const signInButton = screen.getByText("Sign In");
    expect(signInButton).toBeDisabled();
  });
  it("should render the 'sign in with google' button", () => {
    const signInWithGoogleButton = screen.getByText("Sign In With Google");
    expect(signInWithGoogleButton).toBeInTheDocument();
  });
  it("should enable the sign in button when input fields are populated", () => {
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    const signInButton = screen.getByText("Sign In");
    fireEvent.change(emailInput, { target: { value: "test email" } });
    fireEvent.change(passwordInput, { target: { value: "test password" } });
    expect(signInButton).toBeEnabled();
  });
});
