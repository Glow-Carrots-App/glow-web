import { render, screen } from "@testing-library/react";

import ChangeGoalForm from ".";

const MOCK_USER = {
  uid: "abc123",
};

describe("ChangeGoalForm component", () => {
  beforeEach(() => render(<ChangeGoalForm user={MOCK_USER} />));

  it("should render a container div", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });
});
