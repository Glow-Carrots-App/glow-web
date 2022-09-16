import { render, screen, waitFor } from "@testing-library/react";

import Eat from "../pages/eat";

import FoodEntryModel from "../model/foodEntry";

const USER = { uid: "abc123" };

jest.mock("../model/foodEntry");

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

describe("Eat Page with error", () => {
  it("should render an error text upon getCurrentDayHistory failure", () => {
    FoodEntryModel.getCurrentDayHistory.mockImplementation(() => {
      throw new Error();
    });
    render(<Eat user={USER} />);

    waitFor(() => {
      const error = screen.getByText(/Something went wrong/);
      expect(error).toBeInTheDocument();
    });
  });
});
