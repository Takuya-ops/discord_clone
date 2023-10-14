import React, { useEffect, useState } from 'react'
import { collection, query, onSnapshot, DocumentData, CollectionReference, Query } from "firebase/firestore";
import { db } from '../firebase';

interface Channels {
  id: string;
  channel: DocumentData;
}

const useCollection = (data: string) => {
    // interfaceで指定した方以外は受け付けないようにする
  const [documents, setDocuments] = useState<Channels[]>([]);
  const collectionRef: Query<DocumentData> = query(collection(db, data))

  useEffect(() => {
    onSnapshot(collectionRef, (querySnapshot) => {
      const channelsResults: Channels[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelsResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setDocuments(channelsResults)
    });
  }, []);

  return { documents }
}

export default useCollection