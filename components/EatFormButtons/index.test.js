import { render, screen } from "@testing-library/react";

import EatFormButtons from ".";

const CURRENT_DAY = [{}, {}, {}];
const USER = { isGoalComplete: false, uid: "fake_id" };

describe("EatFormButtons", () => {
  describe("add button", () => {
    it("should render the Add button that is disabled", () => {
      render(
        <EatFormButtons
          currentDay={CURRENT_DAY}
          selectedFood={null}
          user={USER}
        />
      );
      const addButtonElement = screen.getByText(/add/i);
      expect(addButtonElement).toBeInTheDocument();
      expect(addButtonElement).toBeDisabled;
    });

    it("should render enabled button when selectedFood", () => {
      render(
        <EatFormButtons
          currentDay={CURRENT_DAY}
          selectedFood={{ product: "Apple" }}
          user={USER}
        />
      );
      const addButtonElement = screen.getByText(/add/i);
      expect(addButtonElement).not.toBeDisabled();
    });
  });

  describe("cancel button", () => {
    it("should render the Cancel Button", () => {
      render(
        <EatFormButtons
          currentDay={CURRENT_DAY}
          selectedFood={null}
          user={USER}
        />
      );
      const cancelButtonElement = screen.getByText(/cancel/i);
      expect(cancelButtonElement).toBeInTheDocument();
    });

    it("should have href attribute and should be /today", () => {
      render(
        <EatFormButtons
          currentDay={CURRENT_DAY}
          selectedFood={null}
          user={USER}
        />
      );
      const linkElement = screen.getByRole("link");
      expect(linkElement).toHaveAttribute("href", "/today");
    });
  });
});
