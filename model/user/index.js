// USER DB MODEL
// import firestore

// individual user
// user = {
//     uid: ""
//     firstName: “Robby”,
//     email: “robby@gmail.com”,
//     joinDate: “2020-04-31”,
//     avatar: fileLocation,
//     dailyGoal: {amount: 10, isComplete: false},
//     dayStreak: 20,
//     goldenCarrots: 40,
//     }

const getUser = async (id /*string*/) => {
  // await firestoreFunction(id)
};

const createUser = async (id, email /*string*/) => {
  // await firestoreFunction(id, email)
};

const updateName = async (id, newName /*string*/) => {
  // await firestoreFunction(id, newName)
};

const updateEmail = async (id, newEmail /*string*/) => {
  // await firestoreFunction(id, newEmail)
};

const updateGoldenCarrots = async (id, goldenCarrots /*number*/) => {
  //   goldenCarrots = goldenCarrots + 1;
  // await firestoreFunction(id, goldenCarrots)
};

const createUserJoinDate = async (id, joinDate /*string*/) => {
  // await firestoreFunction(id, joinDate)
};

const incrementDayStreak = async (id, currentDayStreak) => {
  //   currentDayStreak = currentDayStreak + 1;
  // await firestoreFunction(id, currentDayStreak)
};

const clearDayStreak = async (id, isGoalComplete) => {
  //   if (!isGoalComplete) {
  // await firestoreFunction(id, 0)
  //   }
};

const updateDailyGoal = async (id, dailyGoal) => {
  // await firestoreFunction(id, dailyGoal)
};

const updateAvatar = async (id, avatarPath) => {
  // await firestoreFunction(id, avatarPath)
};
