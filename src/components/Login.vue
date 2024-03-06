<template>
  <div class="login-block">
    <div class="text-center mt-8">請輸入暱稱：</div>
    <v-responsive
        class="mx-auto my-8"
        max-width="300px"
        width="300px">
        <v-text-field
            density="comfortable"
            variant="outlined"
            hide-details="auto"
            v-model.trim="username"
            :placeholder="'請輸入使用者暱稱'">
        </v-text-field>
    </v-responsive>
    <v-responsive
        class="mx-auto my-8"
        max-width="300px"
        width="300px">
        <v-btn
            color="info"
            block
            fab
            :disabled="username === ''"
            @click="nextStep(username)">
            開始聊天
        </v-btn>
    </v-responsive>
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
  import { ref } from 'vue'
  import { usernameRef, writeUserName } from '../firebase.config'
  import { onValue } from 'firebase/database'
  import { useRouter } from 'vue-router'

  const router = useRouter()
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
        router.push({
          path: '/Chatroom/Chat',
          query: { username: username.value }
        })
      }
    }, { onlyOnce: true })
  }
</script>