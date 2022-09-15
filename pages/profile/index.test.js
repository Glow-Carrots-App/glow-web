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

describe("ProfilePage", () => {
  beforeEach(() => render(<ProfilePage user={USER} />));
  FoodEntryModel.getLifetimeHistory.mockImplementation(() => []);

  it("should render a Sidebar", () => {
    waitFor(() => {
      const Sidebar = screen.getByTestId("Sidebar");
      expect(Sidebar).toBeInTheDocument();
    });
  });

  it("should render a Profile heading", () => {
    waitFor(() => {
      const profileHeading = screen.getByText(/^Profile$/);
      expect(profileHeading).toBeInTheDocument();
    });
  });

  it("should render ProfileUserInfo", () => {
    waitFor(() => {
      const ProfileUserInfo = screen.getByTestId("ProfileUserInfo");
      expect(ProfileUserInfo).toBeInTheDocument();
    });
  });

  it("should render ProfileStatistics", () => {
    waitFor(() => {
      const ProfileStatistics = screen.getByTestId("ProfileStatistics");
      expect(ProfileStatistics).toBeInTheDocument();
    });
  });

  it("should render ProfileGraph", () => {
    waitFor(() => {
      const ProfileGraph = screen.getByTestId("ProfileGraph");
      expect(ProfileGraph).toBeInTheDocument();
    });
  });

  it("should render TodayUserInfo", () => {
    waitFor(() => {
      const TodayUserInfo = screen.getByTestId("TodayUserInfo");
      expect(TodayUserInfo).toBeInTheDocument();
    });
  });

  it("should render TodayFoodList", () => {
    waitFor(() => {
      const TodayFoodList = screen.getByTestId("TodayFoodList");
      expect(TodayFoodList).toBeInTheDocument();
    });
  });

  it("should render AddButton", () => {
    waitFor(() => {
      const AddButton = screen.getByTestId("AddButton");
      expect(AddButton).toBeInTheDocument();
    });
  });

  it("should render BottomTabs", () => {
    waitFor(() => {
      const BottomTabs = screen.getByTestId("BottomTabs");
      expect(BottomTabs).toBeInTheDocument();
    });
  });
});

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
