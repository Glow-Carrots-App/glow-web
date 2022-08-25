// FOOD ENTRY DB MODEL
// import firestore

// individual food entry
// foodEntry = {
//     id: 123,
//     userId: ldf,
//     product: green,
//     productSearch: Asparagus,
//     textHex: "",
//     fillHex: "",
//     date: "",
//   }

import { db } from "../../firebase.js";

import {
  collection,
  query,
  where,
  getDoc,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const foodEntriesRef = collection(db, "foodEntries");

class FoodEntryModel {
  createFoodEntry = async (foodObj) => {
    return await addDoc(foodEntriesRef, foodObj);
  };

  getCurrentDay = async (userId, today) => {
    let currentDaySnapshot = await getDocs(
      query(
        foodEntriesRef,
        where("uid", "==", userId),
        where("date", "==", today)
      )
    );
    let currentDay = currentDaySnapshot.docs.map((doc) => doc.data());
    return currentDay;
  };

  get7DayHistory = async (userId) => {
    // await firestoreFunction(userId, 7)
  };

  get14DayHistory = async (userId) => {
    // await firestoreFunction(userId, 14)
  };

  get30DayHistory = async (userId) => {
    // await firestoreFunction(userId, 30)
  };

  getLifetimeHistory = async (userId) => {
    // await firestoreFunction(userId)
  };
}

export default new FoodEntryModel();
