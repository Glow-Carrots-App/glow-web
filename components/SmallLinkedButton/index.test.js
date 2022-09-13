import { render, screen } from "@testing-library/react";

import SmallLinkedButton from ".";

const HREF = "/settings";
const CHILDREN = "Linked Button";

describe("SmallLinkedButton component", () => {
  it("should render an anchor tag with appropriate href and it should display children", () => {
    render(<SmallLinkedButton href={HREF}>{CHILDREN}</SmallLinkedButton>);
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", HREF);
    expect(anchorElement).toHaveTextContent(CHILDREN);
  });

  it("should render default without landing styles", () => {
    render(<SmallLinkedButton href={HREF}>{CHILDREN}</SmallLinkedButton>);
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toHaveClass("smallButton");
  });

  it("should render default with landing style with isLanding prop", () => {
    render(
      <SmallLinkedButton href={HREF} isLanding={true}>
        {CHILDREN}
      </SmallLinkedButton>
    );
    const anchorElement = screen.getByRole("link");
    expect(anchorElement).toHaveClass("smallLandingButton");
  });
});
