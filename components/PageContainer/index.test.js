import { fireEvent, render, screen } from "@testing-library/react";

import PageContainer from ".";

describe("PageContainer component", () => {
  it("should render a div with default style", () => {
    render(<PageContainer />);
    const pageContainer = screen.getByRole("pageContainer");
    expect(pageContainer).toBeInTheDocument();
    expect(pageContainer).toHaveClass("container");
  });

  it("should render a div with landing style", () => {
    render(<PageContainer isLanding={true} />);
    const pageContainer = screen.getByRole("pageContainer");
    expect(pageContainer).toBeInTheDocument();
    expect(pageContainer).toHaveClass("containerLanding");
  });
});
