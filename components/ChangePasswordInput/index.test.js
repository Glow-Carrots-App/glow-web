import { render, screen } from "@testing-library/react";

import ChangePasswordInput from ".";

const PLACEHOLDER = "TEST PLACEHOLDER";

describe("ChangePasswordInput component", () => {
  it("should render an input field", () => {
    render(<ChangePasswordInput />);
    const passwordInput = screen.getByRole("password");
    expect(passwordInput).toBeInTheDocument();
  });

  it("should accurately render placeholder prop text", () => {
    render(<ChangePasswordInput placeholder={PLACEHOLDER} />);
    const passwordInput = screen.getByPlaceholderText(/TEST PLACEHOLDER/);
    expect(passwordInput).toBeInTheDocument();
  });
});
