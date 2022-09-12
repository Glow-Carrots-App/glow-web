import { fireEvent, render, screen } from "@testing-library/react";

import EatFoodsForm from ".";

jest.mock("../../masterFoodLibrary/masterFoodLibrary", () => {
  return [
    {
      productSearch: "Cabbage (Green)",
    },
    {
      productSearch: "Blackberry",
    },
    {
      productSearch: "Strawberry",
    },
    {
      productSearch: "Lemon",
    },
    {
      productSearch: "Apricot (Orange)",
    },
  ];
});
const MOCKED_USER = { isGoalComplete: false, uid: "fake_id" };
const MOCKED_CURRENT_DAY = [{}, {}, {}];

describe("EatFoodsForm", () => {
  beforeEach(() =>
    render(<EatFoodsForm currentDay={MOCKED_CURRENT_DAY} user={MOCKED_USER} />)
  );

  it("should render an input", () => {
    const inputElement = screen.getByPlaceholderText(/search food/i);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render food list when input is focused", () => {
    const inputElement = screen.getByPlaceholderText(/search food/i);
    fireEvent.focus(inputElement);
    const foodListContainer = screen.getByRole("listContainer");
    expect(foodListContainer).toBeInTheDocument();
  });

  it("should change the input value when food list item is clicked", () => {
    const inputElement = screen.getByPlaceholderText(/search food/i);
    fireEvent.focus(inputElement);
    const listElement = screen.getByText(/apricot/i);
    fireEvent.mouseDown(listElement);
    expect(inputElement).toHaveValue("Apricot (Orange)");
  });

  it("should make list not visible when food list item clicked", () => {
    const inputElement = screen.getByPlaceholderText(/search food/i);
    fireEvent.focus(inputElement);
    const foodListContainer = screen.getByRole("listContainer");
    const listElement = screen.getByText(/apricot/i);
    fireEvent.mouseDown(listElement);
    expect(foodListContainer).not.toBeVisible();
  });

  it("should render list when color filter is clicked", () => {
    const filterImg = screen.getByRole("filterImg0");
    fireEvent.click(filterImg);
    const foodListContainer = screen.getByRole("listContainer");
    expect(foodListContainer).toBeInTheDocument();
  });

  it("should not render list when color filter is clicked again", () => {
    const filterImg = screen.getByRole("filterImg0");
    fireEvent.click(filterImg);
    const foodListContainer = screen.getByRole("listContainer");
    fireEvent.click(filterImg);
    expect(foodListContainer).not.toBeInTheDocument();
  });

  it("should enable Add button when user select food item from list", () => {
    const inputElement = screen.getByPlaceholderText(/search food/i);
    const addButton = screen.getByText(/add/i);
    fireEvent.focus(inputElement);
    const listElement = screen.getByText(/apricot/i);
    fireEvent.mouseDown(listElement);
    expect(addButton).toBeEnabled();
  });

  it("should should remove value from input when Add button is clicked", () => {
    const inputElement = screen.getByPlaceholderText(/search food/i);
    const addButton = screen.getByText(/add/i);
    fireEvent.focus(inputElement);
    const listElement = screen.getByText(/apricot/i);
    fireEvent.mouseDown(listElement);
    fireEvent.click(addButton);
    expect(inputElement).toHaveValue("");
  });
});
