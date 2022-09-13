import { render, screen } from "@testing-library/react";

import StatsCard from ".";

const SRC = "fake-img-source";
const TITLE = "Stat";
const DATA = 20;

describe("StatsCard", () => {
  beforeEach(() => render(<StatsCard src={SRC} title={TITLE} data={DATA} />));

  it("should have src attribute", () => {
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", "fake-img-source");
  });

  it("should render the title text", () => {
    const titleElement = screen.getByText(/stat/i);
    expect(titleElement).toBeInTheDocument();
  });

  it("should render the stat data", () => {
    const dataElement = screen.getByText(/20/i);
    expect(dataElement).toBeInTheDocument();
  });
});
