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
  getUser = async (uid) => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      return;
    }
  };

  createUser = async (newUser, uid) => {
    return await setDoc(doc(db, "users", uid), newUser);
  };

  deleteUser = async (uid) => {
    // await firestoreFunction(uid)
  };

  updateName = async (uid, newName) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      firstName: newName,
    });
  };

  updateEmail = async (uid, newEmail) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      email: newEmail,
    });
  };

  updateGoldenCarrots = async (id, goldenCarrots /*number*/) => {
    //   goldenCarrots = goldenCarrots + 1;
    // await firestoreFunction(id, goldenCarrots)
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

  updateAvatar = async (uid, avatarPath) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      avatar: avatarPath,
    });
  };
}

export default new UserModel();
