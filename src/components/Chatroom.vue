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
  </div>
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
  border: 1px solid #3b3b3b;
  width: 50%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
  border-radius: 10px;
}
</style>

