<script setup>
import MyHeaderVue from '../components/global/MyHeader.vue'
import MySidebarVue from '../components/global/MySidebar.vue'
import { useRoute, useRouter } from 'vue-router'
import { ref } from 'vue'

const route = useRoute() // 獲取路由跳轉的對象
const router = useRouter() // 獲取router實體的對象

console.log({ route })
console.log({ router })

const showSidebar = ref(true)

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value
}
</script>

<template>
  <!-- not found page -->
  <template v-if="route.name === 'NotFound'">
    <router-view />
  </template>

  <div class="layout" v-else>
    <MyHeaderVue :toggle-sidebar="toggleSidebar" />

    <div class="layoutContainer">
      <Transition name="sidebar">
        <MySidebarVue v-if="showSidebar" />
      </Transition>

      <!-- flex-grow:1 -->
      <div class="main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.layout {
  height: 100%;

  @include flex(_, _, 0, column);

  .layoutContainer {
    @include flex();
    width: 100%;
    .main {
      height: calc(100vh - 60px);
      flex-grow: 1;
      width: 100%;
      overflow-y: overlay;
      overflow-x: hidden;
      transition: all 0.3s ease-in-out;
    }
  }
}

.sidebar-enter-from {
  position: relative;

  left: -100%;
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 0.5s ease-in-out;
}
.sidebar-enter-to {
  position: relative;
  left: 0;
}

.sidebar-leave-from {
  position: relative;
  left: 0;
}

.sidebar-leave-to {
  position: relative;
  left: -100%;
}
</style>
