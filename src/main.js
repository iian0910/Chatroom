import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import router from './router/index'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App)
  .use(router)
  .use(vuetify)
  .use(pinia)
  .mount('#app')
