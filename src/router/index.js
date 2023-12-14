import routes from './routes'
import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
  isNavigationFailure
} from 'vue-router'
// createRouter => 創建路由實體
// 大部分需要放上線的網站 通常使用html5模式的 history 需要服務器支持 （在後端設定)
// 自己的專案若是沒有使用服務器建置的話，可以使用hash模式即可

// import HomeView from '@/views/HomeView.vue'
// import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // history: createWebHashHistory(),
  routes
  // 自定義當前router 要顯示的className (預設為router-link-active)
  // linkActiveClass: 'myCustom-router-link-active'
})

// <--- 路由守衛 (全域)--->

// 路由守衛中 beforeEach 可以獲取 即將進入的路由 to 和 即將離開的路由 from資訊 在進入每一個匹配的路由之前觸發 類似於 middleware
/**
 * @param {Object} to 即將進入的路由
 * @param {Object} from 即將離開的路由
 * @param {Function} next 用於路由跳轉
 */
router.beforeEach((to, from) => {
  console.log('beforeEach', 1)
  console.log({ to, from })
  // to , from 相當於 useRoute() 的返回值

  // 適用情境：
  // 1.阻擋用戶訪問需要權限的頁面
  // 2.詢問是否放棄編輯
  // 3.登入驗證

  // 嘗試撰寫一些邏輯
  if (to.name === 'canEdit' && to.meta.requiresAuth != to.query.requiresAuth) {
    alert('請先登入')
    // 阻止路由跳轉至頁面 return false
    // 如果要繼續執行路由跳轉 return true
    // 如果要繼續執行路由重新定向 return {name:'yourPageNameInRoutes'}
    return {
      name: 'home'
    }
  }

  if (from.path.includes('/can_edit')) {
    alert('確定要放棄編輯嗎?')
  }
})

// 示例：若宣告next 就一定要呼叫next() 否則會造成頁面卡住

// router.beforeEach((to, from, next) => {
//   if (to.name === 'canEdit' && to.meta.requiresAuth != to.query.requiresAuth) {
//     alert('請先登入')
//     // 阻止路由跳轉至頁面 return false
//     // 如果要繼續執行路由跳轉 return true
//     // 如果要繼續執行路由重新定向 return {name:'yourPageNameInRoutes'}
//     next({
//       name: 'home'
//     })
//   } else {
//     next()
//   }
// })

/**
 * @param {Object} to 即將進入的路由
 * @param {Object} from 即將離開的路由
 * @param {Function} next 用於路由跳轉
 */
router.beforeResolve((to, from) => {
  console.log('beforeResolve', 2)
  console.log({ to, from }, 'beforeResolve')

  // 適用情境：
  // 畫面資料的初始化
})

/**
 * @param {Object} to 即將進入的路由
 * @param {Object} from 即將離開的路由
 * @param {Function} failure 錯誤
 */
router.afterEach((to, from, failure) => {
  console.log('afterEach', 3)
  console.log({ to, from, failure }, 'afterEach')

  // 適用情境：
  // 1.錯誤處理 => 使用者訪問的是當前頁面 只會觸發afterEach 在vue-router 中訪問同一個路由路徑算是錯誤的行為
  // 2.網頁名稱 document.title

  // 官方錯誤處理
  if (isNavigationFailure(failure)) {
    console.log('failed navigation', failure.type)
  }

  document.title = `Vue-Router練習網 - ${to.meta.name}`
})

export default router
