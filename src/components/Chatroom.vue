<template>
  <div class="chatroom-container">
    <Login
      v-if="step === 1"
      @next="nextStep"
    />
    <Chat
      v-if="step === 2"
      :message="message"
      :username="username"
    />
    <v-alert
      v-if="duplicateUsername"
      color="#C51162"
      icon="mdi mdi-content-duplicate"
      theme="dark"
      border
    >
      使用者暱稱重複!
    </v-alert>
  </div>
</template>

<script setup>
  import Login from './Login.vue'
  import Chat from './Chat.vue'
  import { nextTick, ref } from 'vue'
  import { usernameRef, writeUserName } from '../firebase.config';
  import { onValue } from 'firebase/database';

  const step = ref(1)
  const username = ref('')
  const userList = ref([])
  const duplicateUsername = ref(false)

  const nextStep = async (name) => {
    // 先檢查是否存在相同暱稱
    onValue(usernameRef, (snapshot) => {
      if (snapshot.exists()) {
        snapshot.forEach(username => {
          if (username.val() === name) {
            duplicateUsername.value = true
          } else {
            duplicateUsername.value = false
            const _newList = snapshot.val()
            _newList.push(name)
            userList.value = _newList
            writeUserName(userList.value)
            
          }
        })
      } else {
        const _newList = []
        _newList.push(name)
        userList.value = _newList
        writeUserName(userList.value)
      }

      if (name !== '' && !duplicateUsername.value) {
        username.value = name
        step.value = 2
      }
    }, { onlyOnce: true })
  }
</script>

<style lang="scss" scoped>
.chatroom-container{
  margin: 0 auto;
  border: 1px solid #3b3b3b;
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 10px;
}
</style>

