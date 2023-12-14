<script setup>
import { ref, watch } from 'vue'
import { onBeforeRouteLeave, useRouter } from 'vue-router'

const router = useRouter()

// 當離開這個頁面時，會觸發這個生命週期
onBeforeRouteLeave(() => console.log('onBeforeRouteLeave'))

// FIXME:修正路徑問題
const params = ref('')

watch(params, async(newParams) => {
  const encodeInput = encodeURIComponent(newParams)

  if (newParams) {
    router.push({ name: 'aboutHello', params: { id: encodeInput } })
  }
})

const handleClick = () => router.push({ name: 'about' })
</script>

<template>
  <div class="container">
    <h1>About</h1>
    <h3 class="mt-12">嘗試輸入一些訊息來改變網址</h3>
    <div class="mt-12">
      <input type="text" v-model.lazy.trim="params" placeholder=" / what ever you want" />
    </div>

    <el-button class="mt-12" @click="handleClick">初始化路徑</el-button>

    <router-view />
  </div>
</template>

<style lang="scss" scoped>
.container {
  /* height: calc(100dvh - 60px); */
  padding: 1rem;
  box-sizing: border-box;
}

h1 {
  @include h1();
}

input {
  padding: 8px 10px;
  border: 2px solid #ccc;
  border-radius: 4px;
  width: 50%;
}
</style>
