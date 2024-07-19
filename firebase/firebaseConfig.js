import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyAG2ydz4di6HBB0z2FBlSKWb9HTm-VM54M",
  authDomain: "shoppyone-80a44.firebaseapp.com",
  databaseURL: "https://shoppyone-80a44-default-rtdb.firebaseio.com",
  projectId: "shoppyone-80a44",
  storageBucket: "shoppyone-80a44.appspot.com",
  messagingSenderId: "570191861076",
  appId: "1:570191861076:web:d1e552fc178574aabd24c1"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };