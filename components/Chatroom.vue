<template>
  <v-container class="pa-0 w-25 chatroom-container">
    <Login
      v-if="step === 1"
      @next="nextStep"
    />
    <Chat
      v-if="step === 2"
      :message="message"
      :username="username"
    />
  </v-container>
</template>

<script setup>
  import Login from './Login.vue'
  import Chat from './Chat.vue'
  import { ref } from 'vue'

  const step = ref(1)
  const username = ref('')

  const nextStep = (name) => {
    if (name !== '') {
      username.value = name
      step.value = 2
    }
  }
</script>

<style lang="scss" scoped>
.chatroom-container{
    margin: 0 auto;
    border: 1px solid #F4F4F4;
}
</style>

