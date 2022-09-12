import { screen, render } from "@testing-library/react";

import Loading from ".";

describe("Loading", () => {
  beforeEach(() => render(<Loading />));
  it("should render container for React Loading component", () => {
    const loadingContainer = screen.getByRole("loadingContainer");
    expect(loadingContainer).toBeInTheDocument();
  });

  it("should check to see that the Loading component is rendered", () => {
    const loadingComponent = screen.findByTestId("loader");
    screen.debug();
  });
});
