import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import SettingsEmailForm from ".";
import UserModel from "../../model/user";

const USER = {
  uid: "abc123",
  email: "tester@testing.com",
};

const mockReauth = jest.fn();
const mockChangeEmail = jest.fn();

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    changeEmail: mockChangeEmail,
    reauthenticate: mockReauth,
  }),
}));

jest.mock("../../model/user");

describe("SettingsEmailForm component", () => {
  beforeEach(() => render(<SettingsEmailForm user={USER} />));
  UserModel.updateEmail.mockImplementation(() => jest.fn());
  it("should render a form", () => {
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
  });

  describe("form", () => {
    it("should render an Email label", () => {
      const emailLabel = screen.getByText(/^Email$/);
      expect(emailLabel).toBeInTheDocument();
    });

    it("should render an email input field", () => {
      const emailInput = screen.getByDisplayValue(USER.email);
      expect(emailInput).toBeInTheDocument();
    });

    it("should render a submit button", () => {
      const submitButton = screen.getByText(/^Save$/);
      expect(submitButton).toBeInTheDocument();
    });

    describe("submitButton", () => {
      it("should render 'Save' and have inputButton style by default", () => {
        const submitButton = screen.getByText(/^Save$/);
        expect(submitButton).toHaveValue("Save");
        expect(submitButton).toHaveClass("inputButton");
      });

      it("should render 'Saved!' and have inputButtonSaved style when form is submitted", () => {
        const submitButton = screen.getByText(/^Save$/);
        const emailInput = screen.getByDisplayValue(USER.email);
        const passwordInput = screen.getByPlaceholderText(/Confirm Password/);

        fireEvent.change(emailInput, {
          target: { value: "newtester@testing.com" },
        });
        fireEvent.change(passwordInput, {
          target: { value: "Password123!" },
        });
        fireEvent.click(submitButton);

        expect(submitButton).toHaveValue("Saved!");
        expect(submitButton).toHaveClass("inputButtonSaved");
      });
    });

    it("should render a password label", () => {
      const passwordLabel = screen.getByText(
        /Confirm password to change email:/
      );
      expect(passwordLabel).toBeInTheDocument();
    });

    describe("passwordLabel", () => {
      it("should be not visible by default", () => {
        const passwordLabel = screen.getByText(
          /Confirm password to change email:/
        );
        expect(passwordLabel).not.toBeVisible();
      });

      it("should be visible on email input focus", () => {
        const passwordLabel = screen.getByText(
          /Confirm password to change email:/
        );
        const emailInput = screen.getByDisplayValue(USER.email);
        fireEvent.focus(emailInput);
        expect(passwordLabel).toBeVisible();
      });
    });

    it("should render a passwordInput field", () => {
      const passwordInput = screen.getByPlaceholderText(/Confirm Password/);
      expect(passwordInput).toBeInTheDocument();
    });

    describe("passwordInput", () => {
      it("should be not visible by default", () => {
        const passwordInput = screen.getByPlaceholderText(/Confirm Password/);
        expect(passwordInput).not.toBeVisible();
      });

      it("should be visible on email input focus", () => {
        const passwordInput = screen.getByPlaceholderText(/Confirm Password/);
        const emailInput = screen.getByDisplayValue(USER.email);
        fireEvent.focus(emailInput);
        expect(passwordInput).toBeVisible();
      });
    });
  });
});

describe("SettingsEmailForm with error", () => {
  it("should render an error message upon handleNewEmail failure", async () => {
    mockChangeEmail.mockImplementationOnce(() => {
      return Promise.reject(new Error());
    });
    mockReauth.mockImplementationOnce(() => {
      return Promise.reject(new Error());
    });

    render(<SettingsEmailForm user={USER} />);

    const submitButton = screen.getByText(/^Save$/);
    const emailInput = screen.getByDisplayValue(USER.email);
    const passwordInput = screen.getByPlaceholderText(/Confirm Password/);

    fireEvent.change(emailInput, {
      target: { value: "newtester@testing.com" },
    });
    fireEvent.change(passwordInput, {
      target: { value: "Password123!" },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByText(/Something went wrong/);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
