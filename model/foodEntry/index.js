import { db } from "../../firebase.js";

import { collection, query, where, getDocs, addDoc } from "firebase/firestore";

const foodEntriesRef = collection(db, "foodEntries");

class FoodEntryModel {
  static createFoodEntry = async (foodObj) => {
    return await addDoc(foodEntriesRef, foodObj);
  };

  static getCurrentDay = async (userId, today) => {
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

  static getThirtyDayHistory = async (userId, today, dateToCompare) => {
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

  static getLifetimeHistory = async (userId) => {
    const lifetimeHistorySnapshot = await getDocs(
      query(foodEntriesRef, where("uid", "==", userId))
    );
    const lifetimeHistory = lifetimeHistorySnapshot.docs.map((doc) =>
      doc.data()
    );
    return lifetimeHistory;
  };
}

export default FoodEntryModel;
