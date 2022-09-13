import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import EatFormButtons from ".";
import FoodEntryModel from "../../model/foodEntry";

jest.mock("../../model/foodEntry");

const MOCKED_CURRENT_DAY = [{}, {}, {}];
const MOCKED_USER = {
  isDailyGoalComplete: false,
  uid: "fake_id",
  dailyGoalAmount: 5,
};

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
      expect(addButtonElement).toBeDisabled();
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
      expect(addButtonElement).toBeEnabled();
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

describe("EatFormsButtons with error", () => {
  it("should render an error if handleEatFoods fails", async () => {
    FoodEntryModel.createFoodEntry.mockImplementationOnce(() => {
      throw new Error();
    });

    render(
      <EatFormButtons
        currentDay={MOCKED_CURRENT_DAY}
        selectedFood={{ product: "Apple" }}
        user={MOCKED_USER}
        setSearchInput={jest.fn()}
      />
    );

    const addButtonElement = screen.getByText(/add/i);
    fireEvent.click(addButtonElement);

    await waitFor(() => {
      const errorMessage = screen.getByText(/Something went wrong/);
      expect(errorMessage).toBeInTheDocument();
    });
  });
});
