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

  updateName = async (id, newName /*string*/) => {
    // await firestoreFunction(id, newName)
  };

  updateEmail = async (id, newEmail /*string*/) => {
    // await firestoreFunction(id, newEmail)
  };

  incrementGoldenCarrots = async (uid, goldenCarrots) => {
    console.log("In Increment Carrots");
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      goldenCarrots: goldenCarrots + 1,
    });
  };

  incrementDayStreak = async (uid, currentDayStreak) => {
    console.log("In Increment Streak");
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      dayStreak: currentDayStreak + 1,
    });
  };

  clearDayStreak = async (id, isGoalComplete) => {
    //   if (!isGoalComplete) {
    // await firestoreFunction(id, 0)
    //   }
  };

  isGoalCompleteToTrue = async (uid, amount) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      "dailyGoal.isComplete": true,
    });
  };

  updateDailyGoal = async (uid, dailyGoal, isComplete) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      dailyGoal: { amount: dailyGoal, isComplete: isComplete },
    });
  };

  updateAvatar = async (uid, avatarPath) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      avatar: avatarPath,
    });
  };
}

export default new UserModel();
