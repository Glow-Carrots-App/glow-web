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

import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

const foodEntriesRef = collection(db, "foodEntries");

class FoodEntryModel {
  createFoodEntry = async (foodObj) => {
    return await addDoc(foodEntriesRef, foodObj);
  };

  getCurrentDay = async (userId) => {
    // await fireStoreFunction(userId, 1)
  };

  getHistory = async (userId, today, dateToCompare) => {
    let historySnapshot = await getDocs(
      query(
        foodEntriesRef,
        where("uid", "==", userId),
        where("date", "<=", today),
        where("date", ">=", dateToCompare)
      )
    );
    let history = historySnapshot.docs.map((doc) => doc.data());
    return history;
  };

  getLifetimeHistory = async (userId) => {
    // await firestoreFunction(userId)
  };
}

export default new FoodEntryModel();
