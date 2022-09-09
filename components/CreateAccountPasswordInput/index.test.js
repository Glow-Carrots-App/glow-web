import { render, screen } from "@testing-library/react";

import CreateAccountPasswordInput from ".";

const PLACEHOLDER = "TEST PLACEHOLDER";

describe("CreateAccountPasswordInput component", () => {
  it("should render an input field", () => {
    render(<CreateAccountPasswordInput />);
    const passwordInput = screen.getByRole("password");
    expect(passwordInput).toBeInTheDocument();
  });

  it("should accurately render placeholder prop text", () => {
    render(<CreateAccountPasswordInput placeholder={PLACEHOLDER} />);
    const passwordInput = screen.getByPlaceholderText(/TEST PLACEHOLDER/);
    expect(passwordInput).toBeInTheDocument();
  });
});
