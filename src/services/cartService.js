import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import { db } from "../layout/firebase/firebase";

// Get Cart Items

export async function getCart(uid) {

  const cartRef = collection(db, "users", uid, "cart");

  const snapshot = await getDocs(cartRef);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

}

// Add Item

export async function addItem(uid, product) {

  const itemRef = doc(
    db,
    "users",
    uid,
    "cart",
    String(product.id)
  );

  await setDoc(itemRef, product);

}

// Update Quantity

export async function updateItem(uid, id, quantity) {

  const itemRef = doc(
    db,
    "users",
    uid,
    "cart",
    String(id)
  );

  await updateDoc(itemRef, {
    quantity,
  });

}

// Delete Item

export async function removeItem(uid, id) {

  const itemRef = doc(
    db,
    "users",
    uid,
    "cart",
    String(id)
  );

  await deleteDoc(itemRef);

}