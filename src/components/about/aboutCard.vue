<script setup>
import { useRoute, onBeforeRouteUpdate} from 'vue-router'





onBeforeRouteUpdate((to) => {
  console.log('updatedRouteInfo:', to)
})

const route = useRoute()
</script>

<template>
  <div class="container mt-12 p-20">
    <!-- show route message  -->
    <h3>輸入的Route 資訊為：</h3>
    <div class="text__wrap mt-40">
      <p class="text">{{ `params : ${route.params.id} ` }}</p>
      <p class="text mt-12">{{ `path : ${route.path} ` }}</p>
      <p class="text mt-12">matched : <pre>{{ route.matched }}</pre></p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  background: $Primary-Color-BG;
  border-radius: 12px;
  border-left: 4px solid $Primary-Color;
}

h3 {
  font-size: 36px;
  font-weight: 700;
  color: $Primary-Color;
}

.text {
  font-size: 24px;
  color: $Secondary-Color;
}
</style>
