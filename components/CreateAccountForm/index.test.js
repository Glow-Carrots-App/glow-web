import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import CreateAccountForm from ".";

const MOCK_USER = {
  firstName: "Tester",
  email: "tester@testing.com",
  password: "Password123!",
  confirmPassword: "Password123!",
};

const mockSignup = jest.fn();

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    signup: mockSignup,
  }),
}));

describe("CreateAccountForm component", () => {
  beforeEach(() => {
    render(<CreateAccountForm />);
  });

  describe("createAccount form", () => {
    it("should render a first name input field", () => {
      const nameInput = screen.getByPlaceholderText(/First Name/);
      expect(nameInput).toBeInTheDocument();
    });

    it("should render an email input field", () => {
      const emailInput = screen.getByPlaceholderText(/Email/);
      expect(emailInput).toBeInTheDocument();
    });

    it("should render a password input field", () => {
      const passwordInput = screen.getByPlaceholderText(/^Password$/);
      expect(passwordInput).toBeInTheDocument();
    });

    it("should render a confirmPassword input field", () => {
      const confirmPasswordInput =
        screen.getByPlaceholderText(/^Confirm Password$/);
      expect(confirmPasswordInput).toBeInTheDocument();
    });

    it("should render a submit button", () => {
      const submitButton = screen.getByRole("button");
      expect(submitButton).toBeInTheDocument();
    });

    describe("submit button", () => {
      it("should be disabled as a default", () => {
        const submitButton = screen.getByRole("button");
        expect(submitButton).toBeDisabled();
      });

      it("should be enabled when input fields are populated", () => {
        const submitButton = screen.getByRole("button");
        const nameInput = screen.getByPlaceholderText(/First Name/);
        const emailInput = screen.getByPlaceholderText(/Email/);
        const passwordInput = screen.getByPlaceholderText(/^Password$/);
        const confirmPasswordInput =
          screen.getByPlaceholderText(/^Confirm Password$/);

        fireEvent.change(nameInput, {
          target: { value: MOCK_USER.firstName },
        });
        fireEvent.change(emailInput, { target: { value: MOCK_USER.email } });
        fireEvent.change(passwordInput, {
          target: { value: MOCK_USER.password },
        });
        fireEvent.change(confirmPasswordInput, {
          target: { value: MOCK_USER.confirmPassword },
        });

        expect(submitButton).toBeEnabled();
      });
    });
  });
});

describe("CreateAccountForm with error", () => {
  it("should render an error on failed handleCreateAccount", async () => {
    mockSignup.mockImplementationOnce(() => {
      return Promise.reject(new Error());
    });
    render(<CreateAccountForm />);

    const submitButton = screen.getByRole("button");
    const nameInput = screen.getByPlaceholderText(/First Name/);
    const emailInput = screen.getByPlaceholderText(/Email/);
    const passwordInput = screen.getByPlaceholderText(/^Password$/);
    const confirmPasswordInput =
      screen.getByPlaceholderText(/^Confirm Password$/);

    fireEvent.change(nameInput, {
      target: { value: MOCK_USER.firstName },
    });
    fireEvent.change(emailInput, { target: { value: MOCK_USER.email } });
    fireEvent.change(passwordInput, {
      target: { value: MOCK_USER.password },
    });
    fireEvent.change(confirmPasswordInput, {
      target: { value: MOCK_USER.confirmPassword },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText(/Email already in use/);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
