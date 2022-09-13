import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import LogOut from ".";

const mockLogout = jest.fn();

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    logout: mockLogout,
  }),
}));

jest.mock("../../context/UserContext", () => ({
  useUser: () => ({
    setUser: jest.fn(),
  }),
}));

describe("LogOut component", () => {
  beforeEach(() => render(<LogOut />));

  it("should render a container", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });

  describe("containerElement", () => {
    it("should render a buttonContainer", () => {
      const buttonContainer = screen.getByRole("buttonContainer");
      expect(buttonContainer).toBeInTheDocument();
    });

    describe("buttonContainer", () => {
      it("should render a Log Out button", () => {
        const logOutButton = screen.getByText(/^Log Out$/);
        expect(logOutButton).toBeInTheDocument();
      });
    });
  });
});

describe("LogOut component with error", () => {
  it("should render an error message on failed handleLogout", async () => {
    mockLogout.mockImplementation(() => {
      return Promise.reject(new Error());
    });

    render(<LogOut />);

    const logOutButton = screen.getByText(/^Log Out$/);
    fireEvent.click(logOutButton);

    await waitFor(() => {
      const errorMessage = screen.getByText(/Something went wrong/);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
