import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import ChangePasswordForm from ".";

const IMAGE_SRC = "/buttonIcons/back.png";

const mockReauth = jest.fn();
const mockChangePassword = jest.fn();

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    changePassword: mockChangePassword,
    reauthenticate: mockReauth,
  }),
}));

describe("ChangePasswordForm component", () => {
  beforeEach(() => {
    render(<ChangePasswordForm />);
  });

  it("should render a passwordForm", () => {
    const formElement = screen.getByRole("passwordForm");
    expect(formElement).toBeInTheDocument();
  });

  it("should render a /settings anchor with /settings href", () => {
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", "/settings");
  });

  it("should render a back arrow image", () => {
    const imageElement = screen.getByRole("img");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", IMAGE_SRC);
  });

  it("should render an oldPassword input", () => {
    const oldPassword = screen.getByPlaceholderText(/Old Password/);
    expect(oldPassword).toBeInTheDocument();
  });

  it("should render a newPassword input", () => {
    const newPassword = screen.getByPlaceholderText(/^New Password$/);
    expect(newPassword).toBeInTheDocument();
  });

  it("should render a confirmNewPassword input", () => {
    const confirmNewPassword =
      screen.getByPlaceholderText(/Confirm New Password/);
    expect(confirmNewPassword).toBeInTheDocument();
  });

  it("should render a buttonContainer", () => {
    const containerElement = screen.getByRole("buttonContainer");
    expect(containerElement).toBeInTheDocument();
  });

  describe("buttonContainer", () => {
    it("should render a Reset button", () => {
      const buttonElement = screen.getByText(/Reset/i);
      expect(buttonElement).toBeInTheDocument();
    });

    it("should render a submit button", () => {
      const buttonElement = screen.getByText(/Save/);
      expect(buttonElement).toBeInTheDocument();
    });

    it("should initially render a disabled submit button", () => {
      const buttonElement = screen.getByText(/Save/);
      expect(buttonElement).toBeDisabled();
    });

    it("should render an enabled submit button after inputs have been populated", () => {
      const buttonElement = screen.getByText(/Save/);
      const oldPassword = screen.getByPlaceholderText(/Old Password/);
      const newPassword = screen.getByPlaceholderText(/^New Password$/);
      const confirmNewPassword =
        screen.getByPlaceholderText(/Confirm New Password/);

      fireEvent.change(oldPassword, { target: { value: "pass123" } });
      fireEvent.change(newPassword, { target: { value: "Password123!" } });
      fireEvent.change(confirmNewPassword, {
        target: { value: "Password123!" },
      });
      expect(buttonElement).toBeEnabled();
    });

    it("should reset values on click of reset button", () => {
      const buttonElement = screen.getByText(/Reset/i);
      const oldPassword = screen.getByPlaceholderText(/Old Password/);
      const newPassword = screen.getByPlaceholderText(/^New Password$/);
      const confirmNewPassword =
        screen.getByPlaceholderText(/Confirm New Password/);

      fireEvent.change(oldPassword, { target: { value: "pass123" } });
      fireEvent.change(newPassword, { target: { value: "Password123!" } });
      fireEvent.change(confirmNewPassword, {
        target: { value: "Password123!" },
      });
      fireEvent.click(buttonElement);
      expect(oldPassword).toHaveValue("");
      expect(newPassword).toHaveValue("");
      expect(confirmNewPassword).toHaveValue("");
    });

    it("should submit the form upon enabled submit button click", () => {
      const formElement = screen.getByRole("passwordForm");

      const buttonElement = screen.getByText(/Save/);
      const oldPassword = screen.getByPlaceholderText(/Old Password/);
      const newPassword = screen.getByPlaceholderText(/^New Password$/);
      const confirmNewPassword =
        screen.getByPlaceholderText(/Confirm New Password/);

      fireEvent.change(oldPassword, { target: { value: "pass123" } });
      fireEvent.change(newPassword, { target: { value: "Password123!" } });
      fireEvent.change(confirmNewPassword, {
        target: { value: "Password123!" },
      });
      fireEvent.submit(formElement);
      expect(buttonElement).toHaveValue("Saved!");
    });
  });
});

describe("ChangePasswordForm with error", () => {
  it("should render an error if handlePasswordUpdate fails", async () => {
    mockReauth.mockImplementation(() => {
      return Promise.reject(new Error());
    });

    mockChangePassword.mockImplementation(() => {
      return Promise.reject(new Error());
    });

    render(<ChangePasswordForm />);

    const oldPassword = screen.getByPlaceholderText(/Old Password/);
    const newPassword = screen.getByPlaceholderText(/^New Password$/);
    const confirmNewPassword =
      screen.getByPlaceholderText(/Confirm New Password/);

    fireEvent.change(oldPassword, { target: { value: "pass123" } });
    fireEvent.change(newPassword, { target: { value: "Password123!" } });
    fireEvent.change(confirmNewPassword, {
      target: { value: "Password123!" },
    });

    const saveButton = screen.getByText(/Save/);
    fireEvent.click(saveButton);

    await waitFor(() => {
      const errorMessage = screen.getByRole("error");
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
