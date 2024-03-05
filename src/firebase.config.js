import { initializeApp } from "firebase/app"
import { getDatabase, ref, set } from "firebase/database"
import { v4 as uuidv4 } from 'uuid'
import dayjs from 'dayjs'

const firebaseConfig = {
  apiKey: "AIzaSyBsrh8MhMPE7stGQf7wt7m7MQ7rstMNt8M",
  authDomain: "sample-project-9e4c2.firebaseapp.com",
  databaseURL: "https://sample-project-9e4c2-default-rtdb.firebaseio.com",
  projectId: "sample-project-9e4c2",
  storageBucket: "sample-project-9e4c2.appspot.com",
  messagingSenderId: "199794781922",
  appId: "1:199794781922:web:44e0854712ce3ab58278bb"
}

// init
const app = initializeApp(firebaseConfig)
// init realtime db and get a reference to the service
export const database = getDatabase(app)
// building db ref
export const realtimeRef = ref(database, 'chatroom')
// write data
export const writeUserData = (username, message) => {
  set(ref(database, `chatroom/${dayjs().unix()}`), {
    key: uuidv4(),
    username,
    message,
    time: dayjs().unix()
  })
}