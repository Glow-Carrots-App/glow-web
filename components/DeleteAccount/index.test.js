import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import DeleteAccount from ".";
import UserModel from "../../model/user";

const mockDeleteAccount = jest.fn();
const mockReauth = jest.fn();

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    deleteAccount: mockDeleteAccount,
    reauthenticate: mockReauth,
    authedUser: { uid: "abc123" },
  }),
}));

jest.mock("../../context/UserContext", () => ({
  useUser: () => ({
    setUser: jest.fn(),
  }),
}));

jest.mock("../../model/user");

describe("DeleteAccount component", () => {
  beforeEach(() => render(<DeleteAccount />));
  UserModel.deleteUser.mockImplementation(() => jest.fn());

  describe("container element", () => {
    it("should render an h2 element", () => {
      const headingElement = screen.getByRole("heading");
      expect(headingElement).toBeInTheDocument();
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

describe("DeleteAccount component with error", () => {
  it("should render an error on failed handleDelete", async () => {
    mockReauth.mockImplementationOnce(() => {
      return Promise.reject(new Error());
    });

    mockDeleteAccount.mockImplementationOnce(() => {
      return Promise.reject(new Error());
    });

    render(<DeleteAccount />);

    const submitButton = screen.getByRole("button");
    const passwordInput = screen.getByPlaceholderText(/Password/);
    fireEvent.change(passwordInput, {
      target: { value: "Password123!" },
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      const errorMessage = screen.getByRole("error");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
