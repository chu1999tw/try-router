<script setup>
import { useRouter, useRoute, onBeforeRouteUpdate, onBeforeRouteLeave } from 'vue-router'

// 當參數改變時，會觸發這個生命週期
onBeforeRouteUpdate(() => console.log('onBeforeRouteUpdate'))

// 當離開這個頁面時，會觸發這個生命週期
onBeforeRouteLeave(() => console.log('onBeforeRouteLeave'))

const router = useRouter()
const route = useRoute()

const handleClick = () => {
  router.push({ name: 'products', query: { page: 1, limit: 20 } })
}
</script>

<template>
  <div class="container">
    <h1>Products</h1>
    <h3 class="mt-12">按下按鈕 獲取query string</h3>
    <div class="mt-12">
      <el-button @click="handleClick">click me</el-button>
      {{ `current query : page:${route.query.page}  limit:${route.query.limit}` }}
    </div>
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
