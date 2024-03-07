<template>
  <div class="chatroom-container">
    <v-btn
      v-if="showBtn"
      class="mb-2"
      prepend-icon="mdi mdi-logout"
      variant="outlined"
      color="red-darken-1"
      @click="logout"
    >
      登出
    </v-btn>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { chatroomStore } from '../stores/index'

const router = useRouter()
const store = chatroomStore()
const showBtn = ref(false)

onMounted(() => {
  showBtn.value = store.isLogin
})

watch(
  () => store.isLogin,
  (state) => {
    showBtn.value = state
  },
  { deep: true }
)

const logout = () => {
  store.Logout()
  router.push('/Chatroom')
}
</script>

<style lang="scss" scoped>
.chatroom-container {
  width: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .container{
    margin: 0 auto;
    border: 1px solid #3b3b3b;
    padding: 10px;
    border-radius: 10px;
  }
}
</style>

