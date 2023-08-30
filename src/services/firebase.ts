// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvi_nz6SRgDwW7xOrE9o-39DGXbsFjcQU",
  authDomain: "hiagoisoppodev.firebaseapp.com",
  projectId: "hiagoisoppodev",
  storageBucket: "hiagoisoppodev.appspot.com",
  messagingSenderId: "311312389371",
  appId: "1:311312389371:web:2706b60056845470f74c5e",
  measurementId: "G-587ZJ8V99B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, analytics, auth };
