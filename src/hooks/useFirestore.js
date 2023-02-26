import {
  collection,
  onSnapshot,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import { db } from "../firebase/config";

export default function useFirestore(collectionName, condition, callback) {
  const [documents, setDocuments] = useState([]);
  const { uid } = useContext(AuthContext);

  useEffect(() => {
    if (!condition.compareValue || !condition.compareValue.length) {
      console.log("End useFirestore ...");
      return;
    }
    if (uid) {
      let conditionRef = collection(db, collectionName);

      const q = query(
        conditionRef,
        where(condition.fieldName, condition.operator, condition.compareValue),
        orderBy("createAt")
      );

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const documents = snapshot.docs.map((doc) => {
          let data = doc.data();
          let docId = doc.id;

          return {
            ...data,
            id: docId,
          };
        });
        setDocuments(documents);
      });

      // cleanup function
      return () => {
        console.log("Clean up useFirestore: ", collectionName);
        unsubscribe();
      };
    }
  }, [collectionName, condition , uid ]);
  return documents;
}
