import React from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

function addDocument(collectionName, data, callback) {
  addDoc(collection(db, collectionName), {
    ...data,
    createAt: serverTimestamp(),
  })
    .then((data) => {
      if (typeof callback === "function") callback(data);
    })
    .catch((error) => {
      console.error(error);
    });
}

export { addDocument };
