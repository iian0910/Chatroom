<template>
  <v-row class="px-2 pb-2 send-message-block" no-gutters align="center">
      <v-col class="d-flex align-center">
          <v-text-field
              ref="messageInput"
              v-model="msg"
              outlined
              hide-details
              dense
              :placeholder="'請輸入訊息'"
              variant="outlined"
              @keyup.enter="send()"
          ></v-text-field>
          <v-btn
              class="ml-2 mr-0 elevation-0"
              fab
              dark
              x-small
              :color="msg === '' ? 'gray' : 'primary'"
              :loading="loading"
              :disabled="msg === '' || !sendController"
              @click="send()">
              <v-icon>mdi-send</v-icon>
          </v-btn>
      </v-col>
  </v-row>
</template>

<script setup>
import { ref } from "vue";
import { writeUserData } from "../firebase.config";

const messageInput = ref()
const msg = ref('')
const loading = ref(false)
let sendController = ref(true)

const props = defineProps({
  username: {
    type: String,
    required: true
  }
})

const send = () => {
  try {
    sendController.value = false
    writeUserData(props.username, msg.value)
    setTimeout(() => {
      sendController.value = true
    }, 1000)
    msg.value = ''
  } catch (error) {
    console.log('error: ', error)
  }
  toFocusMessageInput()
}

const toFocusMessageInput = () => {
  messageInput.value?.focus()
}
</script>

<style lang="scss" scoped>
// .send-message-block{
//   height: 80px;
// }
</style>