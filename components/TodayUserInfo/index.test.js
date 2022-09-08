import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodayUserInfo from ".";

const Mocked_User = {
  avatar: "/avatars/camp.png",
  firstName: "Vince",
  joinDate: "08/12/2022",
};

describe("TodayUserInfo", () => {
  beforeEach(() => render(<TodayUserInfo user={mockedUser} />));
  it("should render the correct avatar", () => {
    const imgElement = screen.getByRole("img");
    expect(imgElement).toBeInTheDocument();
  });
  it("should render the correct name", () => {
    const firstNameTextElement = screen.getByText("Vince");
    expect(firstNameTextElement).toBeInTheDocument();
  });
  it("should render the correct join date", () => {
    const dateElement = screen.getByText("Joined Aug 2022");
    expect(dateElement).toBeInTheDocument();
  });
});
