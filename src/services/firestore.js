import {
  doc,
  setDoc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "../layout/firebase/firebase";

// Save User

export async function saveUser(user) {

  await setDoc(

    doc(db, "users", user.uid),

    {

      uid: user.uid,

      name: user.displayName || "",

      email: user.email,

      photo: user.photoURL || "",

      createdAt: serverTimestamp(),

    },

    {

      merge: true,

    }

  );

}

// Get User

export async function getUser(uid) {

  const snapshot = await getDoc(

    doc(db, "users", uid)

  );

  if(snapshot.exists()){

    return snapshot.data();

  }

  return null;

}

// Update User

export async function updateUser(uid,data){

  await updateDoc(

    doc(db,"users",uid),

    data

  );

}

// Save Address

export async function saveAddress(uid,address){

  await addDoc(

    collection(db,"users",uid,"addresses"),

    {

      ...address,

      createdAt:serverTimestamp(),

    }

  );

}

// Get Addresses

export async function getAddresses(uid){

  const snapshot = await getDocs(

    collection(db,"users",uid,"addresses")

  );

  return snapshot.docs.map(doc=>({

    id:doc.id,

    ...doc.data(),

  }));

}

// Place Order

export async function placeOrder(uid,order){

  await addDoc(

    collection(db,"users",uid,"orders"),

    {

      ...order,

      status:"Pending",

      createdAt:serverTimestamp(),

    }

  );

}

// Get Orders

export async function getOrders(uid){

  const snapshot = await getDocs(

    collection(db,"users",uid,"orders")

  );

  return snapshot.docs.map(doc=>({

    id:doc.id,

    ...doc.data(),

  }));

}