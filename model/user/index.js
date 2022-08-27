import { db } from "../../firebase.js";

import {
  getDoc,
  setDoc,
  updateDoc,
  doc,
  deleteDoc,
  collection,
  query,
  where,
} from "firebase/firestore";

const usersRef = collection(db, "users");

class UserModel {
  static getUser = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return;
    }
  };

  static createUser = async (newUser) => {
    return await setDoc(doc(db, "users", newUser.uid), newUser);
  };

  static deleteUser = async (uid) => {
    return await deleteDoc(doc(db, "users", uid));
  };

  static checkIfUserExists = async (email) => {
    const userQuery = query(usersRef, where("email", "==", email));
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

  static incrementGoldenCarrots = async (uid, goldenCarrots) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      goldenCarrots: goldenCarrots + 1,
    });
  };

  static incrementDayStreak = async (uid, currentDayStreak) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      dayStreak: currentDayStreak + 1,
    });
  };

  static clearDayStreak = async (id, isGoalComplete) => {
    // await firestoreFunction(id, 0)
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

  static updateAvatar = async (uid, avatarPath) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      avatar: avatarPath,
    });
  };
}

export default UserModel;
