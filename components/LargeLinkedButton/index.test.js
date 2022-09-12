import { render, screen } from "@testing-library/react";

import LargeLinkedButton from ".";

const HREF = "/settings";
const CHILDREN = "Linked Button";

describe("LargeLinkedButton component", () => {
  it("should render an anchor tag with appropriate href and it should display children", () => {
    render(<LargeLinkedButton href={HREF}>{CHILDREN}</LargeLinkedButton>);
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", HREF);
    expect(anchorElement).toHaveTextContent(CHILDREN);
  });

  it("should render default without landing styles", () => {
    render(<LargeLinkedButton href={HREF}>{CHILDREN}</LargeLinkedButton>);
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toHaveClass("largeButton");
  });

  it("should render default with landing style with isLanding prop", () => {
    render(
      <LargeLinkedButton href={HREF} isLanding={true}>
        {CHILDREN}
      </LargeLinkedButton>
    );
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toHaveClass("landingLargeButton");
  });
});
