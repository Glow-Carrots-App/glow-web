import { render, screen, waitFor } from "@testing-library/react";
import dayjs from "dayjs";

import Today from ".";

import FoodEntryModel from "../../model/foodEntry";
import UserModel from "../../model/user";

jest.mock("../../model/foodEntry");
jest.mock("../../model/user");

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

describe("Today Page with error", () => {
  it("should render an error text upon getLifetimeHistory failure", () => {
    const USER = {
      uid: "abc123",
      isDailyGoalComplete: false,
      lastGoalDate: dayjs().subtract(1, "day").format("YYYY/MM/DD"),
    };
    FoodEntryModel.getLifetimeHistory.mockImplementation(() => {
      throw new Error();
    });
    render(<Today user={USER} />);

    waitFor(() => {
      const error = screen.getByText(/Something went wrong/);
      expect(error).toBeInTheDocument();
    });
  });

  it("should render an error text upon clearDayStreak failure", () => {
    const USER = {
      uid: "abc123",
      isDailyGoalComplete: false,
      lastGoalDate: dayjs().subtract(3, "day").format("YYYY/MM/DD"),
    };
    FoodEntryModel.getLifetimeHistory.mockImplementation(() => {
      return [];
    });
    UserModel.clearDayStreak.mockImplementation(() => {
      throw new Error();
    });

    render(<Today user={USER} />);

    waitFor(() => {
      const error = screen.getByText(/Something went wrong/);
      expect(error).toBeInTheDocument();
    });
  });

  it("should render an error text upon updateGoalIsComplete failure", () => {
    const USER = {
      uid: "abc123",
      isDailyGoalComplete: true,
      lastGoalDate: dayjs().subtract(1, "day").format("YYYY/MM/DD"),
    };
    FoodEntryModel.getLifetimeHistory.mockImplementation(() => {
      return [];
    });
    UserModel.updateGoalIsComplete.mockImplementation(() => {
      throw new Error();
    });

    render(<Today user={USER} />);

    waitFor(() => {
      const error = screen.getByText(/Something went wrong/);
      expect(error).toBeInTheDocument();
    });
  });
});
