import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDuEl3HDRRkh9OQzTife3JDDTFcCSy8w0M",
  authDomain: "idobatakaigi-with-ham-82d71.firebaseapp.com",
  projectId: "idobatakaigi-with-ham-82d71",
  storageBucket: "idobatakaigi-with-ham-82d71.appspot.com",
  messagingSenderId: "1084671646304",
  appId: "1:1084671646304:web:322f4ead43eb2dfd3c0105"
};
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
const messagesRef = database.ref("messages")

export const pushMessage = ({name, text}) => {
  messagesRef.push({name, text})
}
