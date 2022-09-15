import { render, screen, waitFor } from "@testing-library/react";

import ProfilePage from ".";

import FoodEntryModel from "../../model/foodEntry";

const USER = { uid: "abc123" };

jest.mock("../../model/foodEntry");

jest.mock("../../context/AuthContext", () => ({
  useAuth: () => ({
    authedUser: {},
  }),
}));

jest.mock("../../context/UserContext", () => ({
  useUser: () => ({
    user: {},
  }),
}));

describe("ProfilePage with error", () => {
  it("should render an error text upon getLifetimeHistory failure", () => {
    FoodEntryModel.getLifetimeHistory.mockImplementation(() => {
      return Promise.reject(new Error());
    });
    render(<ProfilePage user={USER} />);

    waitFor(() => {
      const error = screen.getByText(/Something went wrong/);
      expect(error).toBeInTheDocument();
    });
  });
});
