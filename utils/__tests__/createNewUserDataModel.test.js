import createNewUserDataModel from "../createNewUserDataModel";
import dayjs from "dayjs";

const email = "testEmail@email.com";
const firstName = "tester";
const uid = "test123";

const correctUser = {
  avatar: "/avatars/camp.png",
  dailyGoalAmount: 5,
  dayStreak: 0,
  email,
  firstName,
  goldenCarrots: 0,
  isDailyGoalComplete: false,
  joinDate: dayjs().format("MM/DD/YYYY"),
  lastGoalDate: dayjs().format("YYYY/MM/DD"),
  uid,
};

describe("createNewUserDataModel", () => {
  it("should return an object", () => {
    const testUser = createNewUserDataModel(email, firstName, uid);
    expect(typeof testUser).toBe("object");
  });

  it("should return an object with desired properties", () => {
    const testUser = createNewUserDataModel(email, firstName, uid);
    expect(testUser).toMatchObject(correctUser);
  });
});
