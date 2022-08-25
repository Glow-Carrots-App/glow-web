import { db } from "../../firebase.js";

import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

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

  getThirtyDayHistory = async (userId, today, dateToCompare) => {
    let thirtyDayHistorySnapshot = await getDocs(
      query(
        foodEntriesRef,
        where("uid", "==", userId),
        where("date", "<=", today),
        where("date", ">=", dateToCompare)
      )
    );
    let thirtyDayHistory = thirtyDayHistorySnapshot.docs.map((doc) =>
      doc.data()
    );
    return thirtyDayHistory;
  };

  getLifetimeHistory = async (userId) => {
    // await firestoreFunction(userId)
  };
}

export default new FoodEntryModel();
