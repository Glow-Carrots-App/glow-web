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

  static updateGoldenCarrots = async (id, goldenCarrots) => {
    // await firestoreFunction(id, goldenCarrots)
  };

  static incrementDayStreak = async (id, currentDayStreak) => {
    // await firestoreFunction(id, currentDayStreak)
  };

  static clearDayStreak = async (id, isGoalComplete) => {
    // await firestoreFunction(id, 0)
  };

  static updateDailyGoal = async (uid, dailyGoal, isComplete) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      dailyGoal: { amount: dailyGoal, isComplete: isComplete },
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
