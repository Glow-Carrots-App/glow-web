import { render, screen } from "@testing-library/react";

import EatFormButtons from ".";

const MOCKED_CURRENT_DAY = [{}, {}, {}];
const MOCKED_USER = { isGoalComplete: false, uid: "fake_id" };

describe("EatFormButtons", () => {
  describe("add button", () => {
    it("should render the Add button that is disabled", () => {
      render(
        <EatFormButtons
          currentDay={MOCKED_CURRENT_DAY}
          selectedFood={null}
          user={MOCKED_USER}
        />
      );
      const addButtonElement = screen.getByText(/add/i);
      expect(addButtonElement).toBeInTheDocument();
      expect(addButtonElement).toBeDisabled;
    });

    it("should render enabled button when selectedFood", () => {
      render(
        <EatFormButtons
          currentDay={MOCKED_CURRENT_DAY}
          selectedFood={{ product: "Apple" }}
          user={MOCKED_USER}
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
          currentDay={MOCKED_CURRENT_DAY}
          selectedFood={null}
          user={MOCKED_USER}
        />
      );
      const cancelButtonElement = screen.getByText(/cancel/i);
      expect(cancelButtonElement).toBeInTheDocument();
    });

    it("should have href attribute and should be /today", () => {
      render(
        <EatFormButtons
          currentDay={MOCKED_CURRENT_DAY}
          selectedFood={null}
          user={MOCKED_USER}
        />
      );
      const linkElement = screen.getByRole("link");
      expect(linkElement).toHaveAttribute("href", "/today");
    });
  });
});
