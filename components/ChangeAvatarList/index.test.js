import { render, screen, fireEvent } from "@testing-library/react";
import ChangeAvatarList from ".";

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({ authedUser: { uid: "123" } }),
}));

describe("ChangeAvatarList", () => {
  beforeEach(() => render(<ChangeAvatarList />));
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
