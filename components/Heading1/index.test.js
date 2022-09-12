import { render, screen } from "@testing-library/react";

import Heading1 from ".";

const CHILDREN = "TEST";

describe("Heading1 component", () => {
  it("should render an h1 element with text", () => {
    render(<Heading1>{CHILDREN}</Heading1>);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(CHILDREN);
  });
});
