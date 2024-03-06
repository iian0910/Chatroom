<template>
  <Info :username="username"/>
  <MessageContainer
    :messages="messages"
    :username="username"
  />
  <MessageInput :username="username"/>
</template>

<script setup>
import Info from './Info.vue';
import MessageContainer from './MessageContainer.vue';
import MessageInput from './MessageInput.vue';
import dayjs from 'dayjs'
import { onMounted, ref, watch } from 'vue';
import { onValue } from 'firebase/database';
import { realtimeRef } from '../firebase.config';

const props = defineProps({
  username: {
    type: String,
    required: true
  }
})

let loginTimestamp = 0
let messages = ref([])

onMounted(() => {
  loginTimestamp = dayjs().unix()
  onValue(realtimeRef, (snapshot) => {
    if (snapshot.exists()) {
      let size = 1
      snapshot.forEach(item => {
        if (snapshot.size === size && item.key !== null && Number(item.key) >= loginTimestamp) {
          messages.value.push(item.val())
        }
        size++
      })
    } else {
      messages.value = []
    }
  }, (error) => {
    console.log(error)
  })
})

</script>

<style scoped>

</style>
