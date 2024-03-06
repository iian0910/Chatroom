<template>
  <div class="chatroom-container">
    <router-view></router-view>
  </div>
</template>

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

