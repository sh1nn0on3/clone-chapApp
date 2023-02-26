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
    // kiểm tra condition có giá trị không ? k thì loại
    if (!condition.compareValue || !condition.compareValue.length) {
      console.log("End useFirestore ...");
      return;
    }

    // check xem có user k << chả biết để lj
    if (uid) {
      // tạo bản có tên ... vào db 
      let conditionRef = collection(db, collectionName);

      // thêm where check xem nó hợp k -- thêm orderBy check tgian
      // << cắt với thg trên làm màu chứ chả có qq gì
      const q = query(
        conditionRef,
        where(condition.fieldName, condition.operator, condition.compareValue),
        orderBy("createAt")
      );
      // dùng snapshot để lọc lấy cái cần dùng thay vì in cả tổ
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const documents = snapshot.docs.map((doc) => {
          // thứ cần lấy << đoạn làm màu tiếp
          let data = doc.data();
          let docId = doc.id;

          return {
            ...data,
            id: docId,
          };
        });
        // set lại đoạn làm màu <<
        setDocuments(documents);
      });

      // cleanup function << cái này để dọn dẹp bộ nhớ << nhớ thế >>
      return () => {
        console.log("Clean up useFirestore: ", collectionName);
        unsubscribe();
      };
    }
    // cái nào dùng ở trên thì ở dưới thu gom lại << từ ngoài vào
  }, [collectionName, condition, uid]);

  // các cái trên làm là để thu documents này về
  return documents;
}
