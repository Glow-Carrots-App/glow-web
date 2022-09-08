import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ChangeGoalForm from ".";

const MOCK_USER = {
  uid: "abc123",
};

jest.mock("next/image", () => ({
  __esModule: true,
  default: () => {
    return "Next image stub"; // whatever
  },
}));

describe("ChangeGoalForm component", () => {
  beforeEach(() => render(<ChangeGoalForm user={MOCK_USER} />));

  it("should render a container div", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });
});
