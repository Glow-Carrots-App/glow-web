import { render, screen } from "@testing-library/react";

import TodayUserInfo from ".";

const USER = {
  avatar: "/avatars/camp.png",
  firstName: "Vince",
  joinDate: "08/12/2022",
};

describe("TodayUserInfo", () => {
  beforeEach(() => render(<TodayUserInfo user={USER} />));
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
