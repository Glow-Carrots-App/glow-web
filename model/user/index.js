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

import { db } from "../../firebase.js";

import {
  collection,
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "users");

class UserModel {
  getUser = async (id /*string*/) => {
    // await firestoreFunction(id)
  };

  createUser = async (newUser, uid) => {
    // return await addDoc(userCollectionRef, newUser);
    return await setDoc(doc(db, "users", uid), newUser);
  };

  updateName = async (id, newName /*string*/) => {
    // await firestoreFunction(id, newName)
  };

  updateEmail = async (id, newEmail /*string*/) => {
    // await firestoreFunction(id, newEmail)
  };

  updateGoldenCarrots = async (id, goldenCarrots /*number*/) => {
    //   goldenCarrots = goldenCarrots + 1;
    // await firestoreFunction(id, goldenCarrots)
  };

  createUserJoinDate = async (id, joinDate /*string*/) => {
    // await firestoreFunction(id, joinDate)
  };

  incrementDayStreak = async (id, currentDayStreak) => {
    //   currentDayStreak = currentDayStreak + 1;
    // await firestoreFunction(id, currentDayStreak)
  };

  clearDayStreak = async (id, isGoalComplete) => {
    //   if (!isGoalComplete) {
    // await firestoreFunction(id, 0)
    //   }
  };

  updateDailyGoal = async (id, dailyGoal) => {
    // await firestoreFunction(id, dailyGoal)
  };

  updateAvatar = async (id, avatarPath) => {
    // await firestoreFunction(id, avatarPath)
  };
}

export default new UserModel();
