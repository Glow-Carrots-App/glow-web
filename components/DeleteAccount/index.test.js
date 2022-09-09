import { fireEvent, render, screen } from "@testing-library/react";

import DeleteAccount from ".";

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    deleteAccount: jest.fn(),
    reauthenticate: jest.fn(),
    authedUser: { uid: "abc123" },
  }),
}));

jest.mock("../../context/UserContext", () => ({
  useUser: () => ({
    setUser: jest.fn(),
  }),
}));

describe("DeleteAccount component", () => {
  beforeEach(() => render(<DeleteAccount />));

  it("should render a container div", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });

  describe("container element", () => {
    it("should render an h2 element", () => {
      const headingElement = screen.getByRole("heading");
      expect(headingElement).toBeInTheDocument();
    });

    it("should render a form element", () => {
      const formElement = screen.getByRole("form");
      expect(formElement).toBeInTheDocument();
    });

    describe("form element", () => {
      it("should render a password label", () => {
        const passwordLabel = screen.getByRole("label");
        expect(passwordLabel).toBeInTheDocument();
      });

      it("should render a password input field", () => {
        const passwordInput = screen.getByPlaceholderText(/Password/);
        expect(passwordInput).toBeInTheDocument();
      });

      it("should render a buttonContainer", () => {
        const buttonContainer = screen.getByRole("buttonContainer");
        expect(buttonContainer).toBeInTheDocument();
      });

      describe("buttonContainer", () => {
        it("should render a linked button to /settings", () => {
          const anchorElement = screen.getByText(/Cancel/);
          expect(anchorElement).toBeInTheDocument();
          expect(anchorElement).toHaveAttribute("href", "/settings");
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

          it("should be enabled when password input field is populated", () => {
            const submitButton = screen.getByRole("button");
            const passwordInput = screen.getByPlaceholderText(/Password/);
            fireEvent.change(passwordInput, {
              target: { value: "Password123!" },
            });
            expect(submitButton).toBeEnabled();
          });
        });
      });
    });
  });
});
