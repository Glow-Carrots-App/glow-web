import { render, screen } from "@testing-library/react";

import SettingsButtons from ".";

const HREFS = [
  "/settings/change-goal",
  "/settings/feedback",
  "/settings/password",
  "/settings/logout",
  "/settings/delete-account",
  "/settings/about",
];

describe("SettingsButtons component", () => {
  render(<SettingsButtons />);
  it("should render 6 LargeLinkedButtons with the correct hrefs", () => {
    const buttons = screen.getAllByRole("link");
    buttons.forEach((button, i) => {
      expect(button).toBeInTheDocument();
      expect(button).toHaveAttribute("href", HREFS[i]);
    });
    expect(buttons.length).toBe(6);
  });
});
