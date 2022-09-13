import createNewUserDataModel from "../createNewUserDataModel";
import dayjs from "dayjs";

const EMAIL = "testEmail@email.com";
const FIRST_NAME = "tester";
const UID = "test123";

const CORRECT_USER = {
  avatar: "/avatars/camp.png",
  dailyGoalAmount: 5,
  dayStreak: 0,
  email: EMAIL,
  firstName: FIRST_NAME,
  goldenCarrots: 0,
  isDailyGoalComplete: false,
  joinDate: dayjs().format("MM/DD/YYYY"),
  lastGoalDate: dayjs().format("YYYY/MM/DD"),
  uid: UID,
};

describe("createNewUserDataModel", () => {
  it("should return an object", () => {
    const testUser = createNewUserDataModel(EMAIL, FIRST_NAME, UID);
    expect(typeof testUser).toBe("object");
  });

  it("should return an object with desired properties", () => {
    const testUser = createNewUserDataModel(EMAIL, FIRST_NAME, UID);
    expect(testUser).toMatchObject(CORRECT_USER);
  });
});
