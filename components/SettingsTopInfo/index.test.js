import { fireEvent, render, screen } from "@testing-library/react";

import SettingsTopInfo from ".";

const USER = {
  avatar: "/avatar.jpg",
};

describe("SettingsTopInfo component", () => {
  beforeEach(() => render(<SettingsTopInfo user={USER} />));

  it("should render an anchor1 with /profile href", () => {
    const anchorElement = screen.getByRole("anchor1");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", "/profile");
  });

  it("should render an image1 with correct src", () => {
    const imageElement = screen.getByRole("image1");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", "/buttonIcons/back.png");
  });

  it("should render an anchor2 with /settings/change-avatar href", () => {
    const anchorElement = screen.getByRole("anchor2");
    expect(anchorElement).toBeInTheDocument();
    expect(anchorElement).toHaveAttribute("href", "/settings/change-avatar");
  });

  it("should render an image2 with correct src", () => {
    const imageElement = screen.getByRole("image2");
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", USER.avatar);
  });
});
