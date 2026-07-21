import {
  collection,
  addDoc,
  serverTimestamp,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "../layout/firebase/firebase";

// Place Order

export async function placeOrder(orderData) {
  const orderRef = collection(db, "orders");

  const docRef = await addDoc(orderRef, {
    ...orderData,
    status: "Pending",
    createdAt: serverTimestamp(),
  });

  return docRef.id;
}

// Get User Orders

export async function getOrders(uid) {
  const orderRef = collection(db, "orders");

  const q = query(
    orderRef,
    where("uid", "==", uid)
  );

  const snapshot = await getDocs(q);

  const orders = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  // Latest order first
  orders.sort((a, b) => {
    if (!a.createdAt || !b.createdAt) return 0;
    return b.createdAt.seconds - a.createdAt.seconds;
  });

  return orders;
}