import { initializeApp } from "firebase/app"
import { getDatabase, ref, set } from "firebase/database"
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "sample-project-9e4c2.firebaseapp.com",
  databaseURL: "https://sample-project-9e4c2-default-rtdb.firebaseio.com",
  projectId: "sample-project-9e4c2",
  storageBucket: "sample-project-9e4c2.appspot.com",
  messagingSenderId: import.meta.env.VITE_MSG_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
}

// init
const app = initializeApp(firebaseConfig)
// init realtime db and get a reference to the service
export const database = getDatabase(app)
// building db ref
export const realtimeRef = ref(database, 'chatroom')
export const usernameRef = ref(database, 'username')
// save username
export const writeUserName = (username) => {
  set(ref(database, `username`), username)
}
// save chat
export const writeUserData = (username, message) => {
  set(ref(database, `chatroom/${dayjs().unix()}`), {
    key: uuidv4(),
    username,
    message,
    time: dayjs().unix()
  })
}