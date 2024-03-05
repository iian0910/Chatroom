<template>
  <div class="info-block d-flex justify-center align-center pa-2">
    <span class="mr-2">使用者暱稱：</span>
    <span>{{ username }}</span>
  </div>
</template>

<script setup>

const props = defineProps({
  username: {
    type: String,
    required: true
  }
})

</script>

<style lang="scss" scoped>
.info-block {
  background-color: azure;
}
</style>
