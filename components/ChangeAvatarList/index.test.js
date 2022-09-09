import { render, screen, fireEvent } from "@testing-library/react";
import ChangeAvatarList from ".";

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({ authedUser: { uid: "123" } }),
}));

describe("ChangeAvatarList", () => {
  beforeEach(() => render(<ChangeAvatarList />));
  it("should render the avatar list", () => {
    const containerElement = screen.getByRole("container");
    expect(containerElement).toBeInTheDocument();
  });
  it("should highlight a selected avatar on click", () => {
    const avatarItem = screen.getByRole("avatarItem1");
    fireEvent.click(avatarItem);
    expect(avatarItem).toHaveClass("avatarListItemSelected");
  });
  it("should have a cancel button with href property", () => {
    const cancelButton = screen.getByRole("link");
    expect(cancelButton).toHaveAttribute("href", "/settings");
  });
});
