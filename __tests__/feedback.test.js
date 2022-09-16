import { render, screen } from "@testing-library/react";

import FeedbackPage from "../pages/settings/feedback";

jest.mock("../context/AuthContext", () => ({
  useAuth: () => ({
    authedUser: {},
  }),
}));

jest.mock("../context/UserContext", () => ({
  useUser: () => ({
    user: {},
  }),
}));

describe("FeedbackPage", () => {
  it("should render one image", () => {
    render(<FeedbackPage />);
    const image = screen.getByRole("image");
    expect(image).toBeInTheDocument();
  });
});
