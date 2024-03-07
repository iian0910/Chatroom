import { defineStore } from "pinia";

export const chatroomStore = defineStore('chatRoom', {
  state: () => ({
    isLogin: false
  }),
  actions: {
    Logout() {
      this.isLogin = false
    },
    Login() {
      this.isLogin = true
    }
  },
  persist: true
})