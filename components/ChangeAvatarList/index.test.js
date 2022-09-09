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
  it("should give avatars a default style", () => {
    const avatarItem = screen.getByRole("avatarItem1");
    expect(avatarItem).toHaveClass("avatarListItem");
  });
  it("should highlight a selected avatar on click", () => {
    const avatarItem = screen.getByRole("avatarItem1");
    fireEvent.click(avatarItem);
    expect(avatarItem).toHaveClass("avatarListItemSelected");
  });
  it("should highlight a new avatar on click and unhighlight the previous", () => {
    const avatarItemA = screen.getByRole("avatarItem1");
    const avatarItemB = screen.getByRole("avatarItem2");
    fireEvent.click(avatarItemA);
    expect(avatarItemA).toHaveClass("avatarListItemSelected");
    fireEvent.click(avatarItemB);
    expect(avatarItemA).toHaveClass("avatarListItem");
    expect(avatarItemB).toHaveClass("avatarListItemSelected");
  });
  it("should render two avatar arrays", () => {
    const avatarItemList1 = screen.getByRole("avatarItemList1");
    const avatarItemList2 = screen.getByRole("avatarItemList2");
    expect(avatarItemList1).toBeInTheDocument();
    expect(avatarItemList2).toBeInTheDocument();
  });
});
