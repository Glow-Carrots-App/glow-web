import { fireEvent, render, screen } from "@testing-library/react";

import SettingsEmailForm from ".";

const USER = {
  uid: "abc123",
  email: "tester@testing.com",
};

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    changeEmail: jest.fn(),
    reauthenticate: jest.fn(),
  }),
}));

describe("SettingsEmailForm component", () => {
  beforeEach(() => render(<SettingsEmailForm user={USER} />));

  it("should render a form", () => {
    const formElement = screen.getByRole("form");
    expect(formElement).toBeInTheDocument();
  });

  describe("form", () => {
    it("should render an Email label", () => {
      const emailLabel = screen.getByText(/^Email$/);
      expect(emailLabel).toBeInTheDocument();
    });

    it("should render a buttonContainer", () => {
      const buttonContainer = screen.getByRole("buttonContainer");
      expect(buttonContainer).toBeInTheDocument();
    });

    describe("buttonContainer", () => {
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

    it("should render a passwordContainer div", () => {
      const passwordContainer = screen.getByRole("passwordContainer");
      expect(passwordContainer).toBeInTheDocument();
    });

    describe("passwordContainer", () => {
      it("should render a passwordInput field", () => {
        const passwordInput = screen.getByPlaceholderText(/Confirm Password/);
        expect(passwordInput).toBeInTheDocument();
      });

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
