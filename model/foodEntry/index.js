import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  writeBatch,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../../firebase.js";
import chunkArray from "../../utils/chunkArray.js";

const foodEntriesRef = collection(db, "foodEntries");

class FoodEntryModel {
  static createFoodEntry = async (foodObj) => {
    return await addDoc(foodEntriesRef, foodObj);
  };

  static getCurrentDayHistory = async (userId, today) => {
    let currentDayHistorySnapshot = await getDocs(
      query(
        foodEntriesRef,
        where("uid", "==", userId),
        where("date", "==", today)
      )
    );
    let currentDayHistory = currentDayHistorySnapshot.docs.map((doc) =>
      doc.data()
    );
    return currentDayHistory;
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

  static deleteUserHistory = async (userId) => {
    const userHistorySnapshot = await getDocs(
      query(foodEntriesRef, where("uid", "==", userId))
    );
    const MAX_WRITES_PER_BATCH = 500;
    const batches = chunkArray(userHistorySnapshot.docs, MAX_WRITES_PER_BATCH);
    const commitBatchPromises = [];

    batches.forEach((batch) => {
      const deleteBatch = writeBatch(db);
      batch.forEach((doc) => deleteBatch.delete(doc.ref));
      commitBatchPromises.push(deleteBatch.commit());
    });

    await Promise.all(commitBatchPromises);
  };
}

export default FoodEntryModel;
