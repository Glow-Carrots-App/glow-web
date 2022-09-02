import dayjs from "dayjs";

export default function createNewUserDataModel(email, firstName, uid) {
  const newUser = {
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
  return newUser;
}
