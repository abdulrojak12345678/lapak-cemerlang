// statetment impir modul 
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
 import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  getDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// conifigurasi firebase 
const firebaseConfig = {
  apiKey: "AIzaSyBcym1i4oAyM2rFmBU_Ipa0vcC7Pdz0dws",
  authDomain: "insan-cemerlang-2e18f.firebaseapp.com",
  projectId: "insan-cemerlang-2e18f",
  storageBucket: "insan-cemerlang-2e18f.appspot.com",
  messagingSenderId: "1096016420480",
  appId: "1:1096016420480:web:87611389fc765e7ddbd065",
  measurementId: "G-DW23S2DXCR"
};
// iniliasisi firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// fungsi untuk mengambil daftar produk dari firebase 
export async function ambilDaftarProduk() {
  const refDokumen = collection(db,"produk");
  const kuery = query(refDokumen,orderBy("nama"));
  const cuplikankuery = await getDocs(kuery);
  
  let hasil = [];
  cuplikankuery.forEach((dok) => {
      hasil.push({ 
     id:dok.id, 
      nama: dok.data().nama,
      harga:dok.data().harga,
      stok: dok.data().stok,
      });
  });
  
  return hasil;
}

// fungsi untuk memformat angka dengan pemisah ribuan pakai titik 
export function formatangka(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}