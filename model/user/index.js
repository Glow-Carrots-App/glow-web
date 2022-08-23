// USER DB MODEL
// import firestore

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
  goldenCarrots = goldenCarrots + 1;
  // await firestoreFunction(id, goldenCarrots)
};

const createUserJoinDate = async (id, joinDate /*string*/) => {
  // await firestoreFunction(id, joinDate)
};

const incrementDayStreak = async (id, currentDayStreak) => {
  currentDayStreak = currentDayStreak + 1;
  // await firestoreFunction(id, currentDayStreak)
};

const clearDayStreak = async (id, isGoalComplete) => {
  if (!isGoalComplete) {
    let currentDayStreak = 0;
    // await firestoreFunction(id, currentDayStreak)
  }
};

const updateDailyGoal = async (id, dailyGoal) => {
  // await firestoreFunction(id, dailyGoal)
};

const updateAvatar = async (id, avatarPath) => {
  // await firestoreFunction(id, avatarPath)
};

//lifetime eaten(???)
const updateLifetimeEaten = async (id, foodObj) => {
  // await firestoreFunction(id, foodObj)
};

//today eaten(???)
const updateTodayEaten = async (id, foodObj) => {
  // await firestoreFunction(id, foodObj)
};

const clearTodayEaten = async (id) => {
  // await firestoreFunction(id)
};

// const user = getUser(id);
// let { goldenCarrots } = user;
// updateGoldenCarrots(goldenCarrots);
