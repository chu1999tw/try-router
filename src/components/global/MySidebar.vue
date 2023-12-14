<script setup>
import { ref } from 'vue'
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const menuData = ref([
  {
    id: 0,
    name: 'dashBoard',
    chName: '首頁',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="22" viewBox="0 0 20 22" fill="none">
              <path d="M18.5 6.27783L9.99997 11.0001M9.99997 11.0001L1.49997 6.27783M9.99997 11.0001L10 20.5001M19 15.0586V6.94153C19 6.59889 19 6.42757 18.9495 6.27477C18.9049 6.13959 18.8318 6.01551 18.7354 5.91082C18.6263 5.79248 18.4766 5.70928 18.177 5.54288L10.777 1.43177C10.4934 1.27421 10.3516 1.19543 10.2015 1.16454C10.0685 1.13721 9.93146 1.13721 9.79855 1.16454C9.64838 1.19543 9.50658 1.27421 9.22297 1.43177L1.82297 5.54288C1.52345 5.70928 1.37369 5.79248 1.26463 5.91082C1.16816 6.01551 1.09515 6.13959 1.05048 6.27477C1 6.42757 1 6.59889 1 6.94153V15.0586C1 15.4013 1 15.5726 1.05048 15.7254C1.09515 15.8606 1.16816 15.9847 1.26463 16.0893C1.37369 16.2077 1.52345 16.2909 1.82297 16.4573L9.22297 20.5684C9.50658 20.726 9.64838 20.8047 9.79855 20.8356C9.93146 20.863 10.0685 20.863 10.2015 20.8356C10.3516 20.8047 10.4934 20.726 10.777 20.5684L18.177 16.4573C18.4766 16.2909 18.6263 16.2077 18.7354 16.0893C18.8318 15.9847 18.9049 15.8606 18.9495 15.7254C19 15.5726 19 15.4013 19 15.0586Z" stroke="#004081" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    isOpenSubMenus: false,
    subMenus: [{ id: 0, name: 'home', chName: '前往首頁', path: '/' }]
  },
  {
    id: 1,
    name: 'memberList',
    chName: '會員資料',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
     <path d="M21 9.5L20.5256 5.70463C20.3395 4.21602 20.2465 3.47169 19.8961 2.9108C19.5875 2.41662 19.1416 2.02301 18.613 1.77804C18.013 1.5 17.2629 1.5 15.7626 1.5H6.23735C4.73714 1.5 3.98704 1.5 3.38702 1.77804C2.85838 2.02301 2.4125 2.41662 2.10386 2.9108C1.75354 3.47169 1.6605 4.21601 1.47442 5.70463L1 9.5M4.5 13.5H17.5M4.5 13.5C2.567 13.5 1 11.933 1 10C1 8.067 2.567 6.5 4.5 6.5H17.5C19.433 6.5 21 8.067 21 10C21 11.933 19.433 13.5 17.5 13.5M4.5 13.5C2.567 13.5 1 15.067 1 17C1 18.933 2.567 20.5 4.5 20.5H17.5C19.433 20.5 21 18.933 21 17C21 15.067 19.433 13.5 17.5 13.5M5 10H5.01M5 17H5.01M11 10H17M11 17H17" stroke="#004081" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
     </svg>`,
    isOpenSubMenus: false,
    subMenus: [{ id: 0, name: 'members', chName: '會員列表', path: '/members' }]
  },

  {
    id: 2,
    name: 'Product',
    chName: '產品列表',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="18" viewBox="0 0 22 18" fill="none">
              <path d="M13 4H15.3373C15.5818 4 15.7041 4 15.8192 4.02763C15.9213 4.05213 16.0188 4.09253 16.1083 4.14736C16.2092 4.2092 16.2957 4.29568 16.4686 4.46863L20.5314 8.53137C20.7043 8.70432 20.7908 8.7908 20.8526 8.89172C20.9075 8.98119 20.9479 9.07873 20.9724 9.18077C21 9.29586 21 9.41815 21 9.66274V12.5C21 12.9659 21 13.1989 20.9239 13.3827C20.8224 13.6277 20.6277 13.8224 20.3827 13.9239C20.1989 14 19.9659 14 19.5 14M14.5 14H13M13 14V4.2C13 3.0799 13 2.51984 12.782 2.09202C12.5903 1.71569 12.2843 1.40973 11.908 1.21799C11.4802 1 10.9201 1 9.8 1H4.2C3.0799 1 2.51984 1 2.09202 1.21799C1.71569 1.40973 1.40973 1.71569 1.21799 2.09202C1 2.51984 1 3.0799 1 4.2V12C1 13.1046 1.89543 14 3 14M13 14H9M9 14C9 15.6569 7.65685 17 6 17C4.34315 17 3 15.6569 3 14M9 14C9 12.3431 7.65685 11 6 11C4.34315 11 3 12.3431 3 14M19.5 14.5C19.5 15.8807 18.3807 17 17 17C15.6193 17 14.5 15.8807 14.5 14.5C14.5 13.1193 15.6193 12 17 12C18.3807 12 19.5 13.1193 19.5 14.5Z" stroke="#004081" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    isOpenSubMenus: false,
    subMenus: [{ id: 0, name: 'products', chName: '全部產品', path: '/products' }]
  },

  {
    id: 3,
    name: 'About',
    chName: '關於我們',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 19.4722C12.0615 20.4223 13.4633 21 15 21C18.3137 21 21 18.3137 21 15C21 12.2331 19.1271 9.90359 16.5798 9.21017M5.42018 9.21016C2.87293 9.90358 1 12.2331 1 15C1 18.3137 3.68629 21 7 21C10.3137 21 13 18.3137 13 15C13 14.2195 12.851 13.4738 12.5798 12.7898M17 7C17 10.3137 14.3137 13 11 13C7.68629 13 5 10.3137 5 7C5 3.68629 7.68629 1 11 1C14.3137 1 17 3.68629 17 7Z" stroke="#004081" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    isOpenSubMenus: false,
    subMenus: [{ id: 0, name: 'about', chName: '我們的資訊', path: '/about' }]
  },
  {
    id: 4,
    name: 'control',
    chName: '操作',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M11 19.4722C12.0615 20.4223 13.4633 21 15 21C18.3137 21 21 18.3137 21 15C21 12.2331 19.1271 9.90359 16.5798 9.21017M5.42018 9.21016C2.87293 9.90358 1 12.2331 1 15C1 18.3137 3.68629 21 7 21C10.3137 21 13 18.3137 13 15C13 14.2195 12.851 13.4738 12.5798 12.7898M17 7C17 10.3137 14.3137 13 11 13C7.68629 13 5 10.3137 5 7C5 3.68629 7.68629 1 11 1C14.3137 1 17 3.68629 17 7Z" stroke="#004081" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>`,
    isOpenSubMenus: false,
    subMenus: [
      {
        id: 0,
        name: 'cannotEdit',
        chName: '編輯資料',
        path: '/edit/can_edit',
        query: { requiresAuth: Math.round(Math.random()) }
      }
    ]
  }
])
</script>

<template>
  <div class="sidebar">
    <ul class="menus">
      <!-- 父層選單 -->
      <li class="menuItem__container" v-for="menuItem in menuData" :key="menuItem.id">
        <div class="menuItem">
          <!-- Icon  -->
          <div class="icon__wrap" v-html="menuItem.icon"></div>

          <p class="menuItem__name">{{ menuItem.chName }}</p>

          <!-- Dropdown Icon -->

          <div
            class="dropdown__wrap"
            :class="{ 'dropdown__wrap--active': menuItem.isOpenSubMenus }"
            @click="menuItem.isOpenSubMenus = !menuItem.isOpenSubMenus"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="8"
              viewBox="0 0 12 8"
              fill="none"
            >
              <path
                d="M11 1.5L6 6.5L1 1.5"
                stroke="#004081"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>

        <!-- 子層選單 -->
        <Transition name="sub">
          <!-- :class="{ 'sub__menuItem--active': route.path === subMenuItem.path }" -->
          <ul class="sub__menus" v-show="menuItem.isOpenSubMenus">
            <li
              class="sub__menuItem"
              v-for="subMenuItem in menuItem.subMenus"
              :key="subMenuItem.id"
            >
              <RouterLink
                :to="{
                  path: subMenuItem.path,
                  query: { requiresAuth: subMenuItem.query?.requiresAuth }
                }"
              >
                {{ subMenuItem.chName }}
              </RouterLink>
            </li>
          </ul>
        </Transition>
      </li>
    </ul>

    <div class="version__container">
      <p class="version">Ver 0.1</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;
  width: 250px;
  box-shadow: $elevation-level-1;
  // 設定最大高度  (100vh - header 高度)
  height: calc(100vh - 60px);
  overflow-y: overlay;
}

.menus {
  flex-grow: 1;
}

.menuItem {
  @include flex(flex-start, center, 8px);
  padding: $Padding_16 $Padding_8 $Padding_8;
  cursor: pointer;

  .menuItem__name {
    @include title();
    color: $Primary-Color-Dark;
    flex-grow: 1;
  }
}

.icon__wrap {
  padding: 1px;
  width: 22px;
  height: 22px;
  flex-shrink: 0;

  svg {
    width: 100%;
    height: 100%;
  }
}

.dropdown__wrap {
  @include flex(center, center);
  transition: all 0.3s ease-in-out;
  flex-shrink: 0;
  width: 20px;
  height: 20px;

  &.dropdown__wrap--active {
    transform: rotate(-540deg);
  }
}

.sub__menuItem {
  // RouteLink
  a {
    color: unset;
    text-decoration: none;
    display: block;
  }

  @include bodyMD();
  padding: $Padding_8 $Padding_20;
  color: $Black-Tone-40;
  cursor: pointer;

  &:hover {
    color: $Primary-Color-Dark;
    background: $Black-Tone-95;
  }

  // 使用 router-link-active 來判斷當前路由
  &:has(.router-link-active.router-link-exact-active) {
    color: $Primary-Color-Dark;
    background: $Primary-Color-BG;
    position: relative;
    &::before {
      content: '';
      position: absolute;
      width: 4px;
      height: 32px;
      left: 0;
      top: 2.5px;
      background: $Primary-Color;
      border-top-right-radius: 100px;
      border-bottom-right-radius: 100px;
    }
  }
}

.version__container {
  &::before {
    content: '';
    display: block;
    width: 180px;

    height: 1px;
    background: $Black-Tone-50;
    margin: $Margin_8 auto;
  }
}
.version {
  @include caption();
  padding: $Padding_8 28px;
  color: $Black-Tone-50;
  text-align: center;
}

// transition
.sub-enter-active,
.sub-leave-active {
  overflow: hidden;
  transition:
    max-height 0.4s ease-in-out,
    opacity 0.2s ease;
}

.sub-enter-from,
.sub-leave-to {
  max-height: 0;
  opacity: 0;
}

.sub-leave-from,
.sub-enter-to {
  max-height: 1000px;
  opacity: 1;
}
</style>
