import { render, screen } from "@testing-library/react";

import HomeImages from ".";

describe("HomeImages component", () => {
  it("should render 6 images", () => {
    render(<HomeImages />);
    const images = screen.getAllByRole("img");
    images.forEach((image) => expect(image).toBeInTheDocument());
    expect(images.length).toBe(6);
  });
});
