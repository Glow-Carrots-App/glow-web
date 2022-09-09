import { fireEvent, render, screen } from "@testing-library/react";
// import { useRouter } from "next/router";

import ChangeGoalForm from ".";

const MOCK_USER = {
  uid: "abc123",
  dailyGoalAmount: 10,
};
const IMAGE_SRC = "/buttonIcons/back.png";

// mock function for router push

describe("ChangeGoalForm component", () => {
  beforeEach(() => render(<ChangeGoalForm user={MOCK_USER} />));

  it("should render a container div", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
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

  it("should render a numberPickerContainer", () => {
    const containerElement = screen.getByRole("numberPickerContainer");
    expect(containerElement).toBeInTheDocument();
  });

  it("should render a Save button", () => {
    const buttonElement = screen.getByText(/Save/i);
    expect(buttonElement).toBeInTheDocument();
  });

  describe("numberPickerContainer", () => {
    it("should render a starting heading2", () => {
      const headingElement = screen.getByText(/I want to eat:/i);
      expect(headingElement).toBeInTheDocument();
    });

    it("should render an arrowUp div", () => {
      const arrowUpElement = screen.getByRole("arrowUp");
      expect(arrowUpElement).toBeInTheDocument();
    });

    it("should render a number picker", () => {
      const numberPicker = screen.getByRole("spinbutton");
      expect(numberPicker).toBeInTheDocument();
    });

    it("should render an arrowDown div", () => {
      const arrowDownElement = screen.getByRole("arrowDown");
      expect(arrowDownElement).toBeInTheDocument();
    });

    it("should render an ending heading2", () => {
      const headingElement = screen.getByText(/healthy foods daily./i);
      expect(headingElement).toBeInTheDocument();
    });

    it("should increment number value", () => {
      const arrowUpElement = screen.getByRole("arrowUp");
      const numberPicker = screen.getByRole("spinbutton");
      const expectedValue = Number(numberPicker.value) + 1;
      fireEvent.click(arrowUpElement);
      expect(Number(numberPicker.value)).toEqual(expectedValue);
    });

    it("should decrement number value", () => {
      const arrowDownElement = screen.getByRole("arrowDown");
      const numberPicker = screen.getByRole("spinbutton");
      const expectedValue = Number(numberPicker.value) - 1;
      fireEvent.click(arrowDownElement);
      expect(Number(numberPicker.value)).toEqual(expectedValue);
    });

    it("should route to /settings after clicking Save", () => {
      // Code logic for testing router push
      const buttonElement = screen.getByText(/Save/i);
      fireEvent.click(buttonElement);
      // expect(push).toHaveBeenCalledWith("/settings");
    });
  });
});
