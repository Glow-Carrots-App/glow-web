import { db } from "../../firebase.js";

import { getDoc, setDoc, updateDoc, doc } from "firebase/firestore";

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

  static createUser = async (newUser, uid) => {
    return await setDoc(doc(db, "users", uid), newUser);
  };

  static deleteUser = async (uid) => {
    return await deleteDoc(doc(db, "users", uid));
  };

  static updateName = async (id, newName) => {
    // await firestoreFunction(id, newName)
  };

  static updateEmail = async (id, newEmail) => {
    // await firestoreFunction(id, newEmail)
  };

  static incrementGoldenCarrots = async (uid, goldenCarrots) => {
    console.log("In Increment Carrots");
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      goldenCarrots: goldenCarrots + 1,
    });
  };

  static incrementDayStreak = async (uid, currentDayStreak) => {
    console.log("In Increment Streak");
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      dayStreak: currentDayStreak + 1,
    });
  };

  static clearDayStreak = async (id, isGoalComplete) => {
    // await firestoreFunction(id, 0)
    //   }
  };

  static isGoalCompleteToTrue = async (uid) => {
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

  static updateAvatar = async (uid, avatarPath) => {
    const docRef = doc(db, "users", uid);
    await updateDoc(docRef, {
      avatar: avatarPath,
    });
  };
}

export default UserModel;
