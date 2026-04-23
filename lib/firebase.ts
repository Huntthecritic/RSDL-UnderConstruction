import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC5j5A-IldlkyYM6AGYUmytOd2wycrxDZI",
  authDomain: "reelspan-f2177.firebaseapp.com",
  databaseURL: "https://reelspan-f2177-default-rtdb.firebaseio.com",
  projectId: "reelspan-f2177",
  storageBucket: "reelspan-f2177.firebasestorage.app",
  messagingSenderId: "394319521591",
  appId: "1:394319521591:web:0d0c9f9c22f0ce82291cb2",
  measurementId: "G-E4TN94VH7P"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);