import { db } from "../../firebase.js";

import {
  setDoc,
  updateDoc,
  doc,
  deleteDoc,
  collection,
  increment,
} from "firebase/firestore";

const usersRef = collection(db, "users");

class UserModel {
  static createUser = async (newUser) => {
    return await setDoc(doc(db, "users", newUser.uid), newUser);
  };

  static deleteUser = async (uid) => {
    return await deleteDoc(doc(db, "users", uid));
  };

  static updateName = async (uid, newName) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      firstName: newName,
    });
  };

  static updateEmail = async (uid, newEmail) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      email: newEmail,
    });
  };

  static incrementGoldenCarrots = async (uid) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      goldenCarrots: increment(1),
    });
  };

  static incrementDayStreak = async (uid) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      dayStreak: increment(1),
    });
  };

  static clearDayStreak = async (uid) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      dayStreak: 0,
    });
  };

  static updateDailyGoal = async (uid, dailyGoal) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      "dailyGoal.amount": dailyGoal,
    });
  };

  static updateGoalIsComplete = async (uid, isGoalComplete) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      "dailyGoal.isComplete": isGoalComplete,
    });
  };

  static updateLastGoalDate = async (uid, currentDate) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      "dailyGoal.lastGoalDate": currentDate,
    });
  };

  static updateAvatar = async (uid, avatarPath) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      avatar: avatarPath,
    });
  };
}

export default UserModel;
