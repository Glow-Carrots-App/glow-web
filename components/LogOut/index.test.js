import { fireEvent, render, screen } from "@testing-library/react";

import LogOut from ".";

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    logout: jest.fn(),
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
