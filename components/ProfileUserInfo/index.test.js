import { fireEvent, render, screen } from "@testing-library/react";

import ProfileUserInfo from ".";

const USER = {
  avatar: "/testAvatar.jpg",
  firstName: "Tester",
  joinDate: "01/01/01",
};

describe("ProfileUserInfo component", () => {
  beforeEach(() => render(<ProfileUserInfo user={USER} />));

  it("should render a container div", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });

  describe("containerElement", () => {
    it("should render an anchor tag with a /settings href", () => {
      const anchorElement = screen.getByRole("link");
      expect(anchorElement).toBeInTheDocument();
      expect(anchorElement).toHaveAttribute("href", "/settings");
    });

    it("should render a textContainer", () => {
      const textContainer = screen.getByRole("textContainer");
      expect(textContainer).toBeInTheDocument();
    });

    describe("textContainer", () => {
      it("shoulder render a joinDate text", () => {
        const joinDateText = screen.getByText(USER.joinDate);
        expect(joinDateText).toBeInTheDocument();
      });
    });

    it("should render an avatarContainer", () => {
      const avatarContainer = screen.getByRole("avatarContainer");
      expect(avatarContainer).toBeInTheDocument();
    });

    describe("avatarContainer", () => {
      it("should render an avatar with the correct src", () => {
        const avatarElement = screen.getByRole("img");
        expect(avatarElement).toBeInTheDocument();
        expect(avatarElement).toHaveAttribute("src", USER.avatar);
      });
    });
  });
});
