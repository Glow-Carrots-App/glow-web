import { render, screen } from "@testing-library/react";

import Heading2 from ".";

const CHILDREN = "TEST";

describe("Heading2 component", () => {
  it("should render an h2 element with text", () => {
    render(<Heading2>{CHILDREN}</Heading2>);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(CHILDREN);
  });
});
