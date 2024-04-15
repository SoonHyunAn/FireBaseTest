import React, { useEffect } from "react";
import { firestore } from "../commons/libraries/firebase.js";
import { COLLECTION, DOC } from "../config";

export default function Check() {
  useEffect(() => {
    firestore.collection(COLLECTION).doc(DOC)
      .get()
      .then((data) => {
        console.log(data.data());
      });
  }, []);

  return <></>;
}
