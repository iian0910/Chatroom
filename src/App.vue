<template>
  <v-app>
    <v-main>
      <Chatroom/>
    </v-main>
  </v-app>
</template>

<script>
import Chatroom from './components/Chatroom.vue'

export default {
  name: 'App',

  components: {
    Chatroom,
  },

  data: () => ({
    //
  }),
}
</script>
