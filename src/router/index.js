import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/Chatroom/',
    name: 'Login',
    component: () => import('../components/Login.vue')
  },
  {
    path: '/Chatroom/Chat',
    name: 'ChatRoom',
    component: () => import('../components/Chat.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
