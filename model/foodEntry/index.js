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
  getDoc,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const foodEntryCollectionRef = collection(db, "foodEntries");

class FoodEntryModel {
  createFoodEntry = async (foodObj) => {
    return await addDoc(foodEntryCollectionRef, foodObj);
  };

  getCurrentDay = async (userId) => {
    // await fireStoreFunction(userId, 1)
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
