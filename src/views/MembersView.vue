<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
import MemberCards from '@/components/members/MemberCards.vue'

const membersData = ref([])

const getMemberData = async() => {
  const { data } = await axios.get('https://randomuser.me/api/', {
    params: {
      results: 100
    }
  })
  console.log(data.results)
  membersData.value = data.results
}

onMounted(() => {
  getMemberData()
})
</script>

<template>
  <div class="container">
    <h1>Members</h1>
    <MemberCards :data="membersData" :class="['mt-16']" />
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: 100%;
  max-height: calc(100vh - 60px);
  padding: 1rem;
  box-sizing: border-box;
}

h1 {
  @include h1();
}
</style>
