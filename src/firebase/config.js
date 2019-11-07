export const firebaseConfig = {
  apiKey: process.env.FIREBASE_APIKEY || "",
  authDomain: process.env.FIREBASE_DOMAIN || "",
  databaseURL: process.env.FIREBASE_DATABASE || "",
  projectId: process.env.FIREBASE_PROJECTID || "",
  storageBucket: process.env.FIREBASE_STORAGE || "",
  messagingSenderId: process.env.FIREBASE_SENDERID || "",
  appId: process.env.FIREBASE_APPID || ""
};
