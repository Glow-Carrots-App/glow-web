import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import SignInForm from ".";

const mockLogin = jest.fn();

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    login: mockLogin,
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

describe("SignInForm with error", () => {
  it("should display error message on handleSignIn failure", async () => {
    mockLogin.mockImplementation(() => {
      return Promise.reject(new Error());
    });

    render(<SignInForm />);

    const form = screen.getByRole("form");
    const emailInput = screen.getByPlaceholderText("Email");
    const passwordInput = screen.getByPlaceholderText("Password");
    fireEvent.change(emailInput, { target: { value: "test email" } });
    fireEvent.change(passwordInput, { target: { value: "test password" } });
    fireEvent.submit(form);

    await waitFor(() => {
      const errorMessage = screen.getByRole("error");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
