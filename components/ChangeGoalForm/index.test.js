import { render, screen } from "@testing-library/react";

import ChangeGoalForm from ".";

const MOCK_USER = {
  uid: "abc123",
  dailyGoalAmount: 10,
};
const IMAGE_SRC = "/buttonIcons/back.png";

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

  describe("numberPickerContainer", () => {
    it("should render a heading2", () => {
      const headingElement = screen.getByText("I want to eat:");
      expect(headingElement).toBeInTheDocument();
    });
  });
});
