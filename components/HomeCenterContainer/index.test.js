import { render, screen } from "@testing-library/react";

import HomeCenterContainer from ".";

describe("HomeCenterContainer component", () => {
  beforeEach(() => render(<HomeCenterContainer />));

  describe("headingsContainer", () => {
    it("should render 3 headings", () => {
      const headings = screen.getAllByRole("heading");
      headings.forEach((heading) => expect(heading).toBeInTheDocument());
      expect(headings.length).toBe(3);
    });
  });

  describe("buttonContainer", () => {
    it("should render an anchor with /create-account href", () => {
      const createAccountButton = screen.getByText(/Get Started/);
      expect(createAccountButton).toBeInTheDocument();
      expect(createAccountButton).toHaveAttribute("href", "/create-account");
    });

    it("should have an anchor with /sign-in href", () => {
      const signInButton = screen.getByText(/I Already Have An Account/);
      expect(signInButton).toBeInTheDocument();
      expect(signInButton).toHaveAttribute("href", "/sign-in");
    });
  });
});
