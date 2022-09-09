import { render, screen } from "@testing-library/react";

import EatFormButtons from ".";

const MOCKED_CURRENT_DAY = [{}, {}, {}];
const MOCKED_USER = { isGoalComplete: false, uid: "fake_id" };

describe("EatFormButtons", () => {
  beforeEach(() =>
    render(
      <EatFormButtons
        currentDay={MOCKED_CURRENT_DAY}
        selectedFood={{}}
        user={MOCKED_USER}
      />
    )
  );

  it("should render the Add button", () => {
    const addButtonElement = screen.getByText(/add/i);
    expect(addButtonElement).toBeInTheDocument();
  });

  it("should render the Cancel Button", () => {
    const cancelButtonElement = screen.getByText(/cancel/i);
    expect(cancelButtonElement).toBeInTheDocument();
  });

  it("should have href attribute and should be /today", () => {
    const linkElement = screen.getByRole("link");
    expect(linkElement).toHaveAttribute("href", "/today");
  });
});
