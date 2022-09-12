import { screen, render } from "@testing-library/react";

import Sidebar from ".";

const expectedHrefValues = [
  "/today",
  "/eat",
  "/profile",
  "/settings",
  "/settings/logout",
];

const expectedLinkText = ["Today", "Eat", "Profile", "Settings", "Logout"];

describe("Sidebar", () => {
  beforeEach(() => render(<Sidebar page="today" />));
  it("should render glow text", () => {
    const headerElement = screen.getByText(/glow/i);
    expect(headerElement).toBeInTheDocument();
  });

  it("should check that the images have correct src", () => {
    const imageElements = screen.getAllByRole("img");
    expect(imageElements[0]).toHaveAttribute("src", "/favicon.ico");
    expect(imageElements[1]).toHaveAttribute(
      "src",
      "/pageBackgrounds/lettuce.png"
    );
  });

  it("should render 5 links", () => {
    const linkElements = screen.getAllByRole("link");
    expect(linkElements.length).toBe(5);
  });

  it("should check that each link has the correct href", () => {
    const linkElements = screen.getAllByRole("link");
    linkElements.forEach((link, i) => {
      expect(link).toHaveAttribute("href", expectedHrefValues[i]);
    });
  });

  it("should check that text for each link is rendered", () => {
    expectedLinkText.forEach((text) => {
      const linkText = screen.getByText(text);
      expect(linkText).toBeInTheDocument();
    });
  });
  it("should check that selected page is highlighted", () => {
    const linkElements = screen.getAllByRole("link");
    expect(linkElements[0]).toHaveAttribute(
      "style",
      "color: rgb(255, 219, 75);"
    );
  });
});
