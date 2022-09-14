import { screen, render } from "@testing-library/react";

import Loading from ".";

describe("Loading", () => {
  render(<Loading />);
  it("should check to see that the Loading component is rendered", () => {
    const loadingComponent = screen.getByRole("loader");
    expect(loadingComponent).toBeInTheDocument();
  });
});
