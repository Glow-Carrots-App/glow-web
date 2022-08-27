import dayjs from "dayjs";

export default function createNewUserDataModel(email, firstName, uid) {
  const newUser = {
    avatar: "/avatars/camp.png",
    dailyGoal: {
      amount: 5,
      isComplete: false,
      lastGoalDate: dayjs().format("YYYY/MM/DD"),
    },
    dayStreak: 0,
    email,
    firstName,
    goldenCarrots: 0,
    joinDate: dayjs().format("MM/DD/YYYY"),
    uid,
  };
  return newUser;
}
