// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { db } from "../../firebaseConfig.js"
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
} from "firebase/firestore"

export async function createArticle({ title, body, danger, reward }) {  
  const data = { title, body, danger, reward }
  const docRef = await addDoc(collection(db, "articles"), data)
  return { id: docRef.id, ...data }
}

// Maybe implement pagination.
export async function fetchArticles() {
  const snapshot = await getDocs(
    query(collection(db, "articles"), orderBy("danger", "desc"))
  )
  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }))
}