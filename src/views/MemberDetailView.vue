<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="container">
    <h1>MemberDetail {{ route.params.id }}</h1>
  </div>
</template>

<style lang="scss" scoped>
.container {
  padding: 1rem;
}

h1 {
  @include h1();
}
</style>
