import { fireEvent, render, screen } from "@testing-library/react";

import SettingsTopInfo from ".";

const USER = {
  avatar: "/avatar.jpg",
};

const HREFS = ["/profile", "/settings/change-avatar"];
const IMG_SRCS = ["/buttonIcons/back.png", USER.avatar];

describe("SettingsTopInfo component", () => {
  beforeEach(() => render(<SettingsTopInfo user={USER} />));

  it("should render anchors with correct hrefs", () => {
    const anchorElements = screen.getAllByRole("link");
    anchorElements.forEach((anchor, i) => {
      expect(anchor).toBeInTheDocument();
      expect(anchor).toHaveAttribute("href", HREFS[i]);
    });
  });

  it("should render images with correct src", () => {
    const imageElements = screen.getAllByRole("img");
    imageElements.forEach((image, i) => {
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute("src", IMG_SRCS[i]);
    });
  });
});
