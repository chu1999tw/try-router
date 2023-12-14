import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

export default [
  // 主頁要顯示的元件
  {
    // 網頁路徑
    path: '/',
    name: 'home',
    component: HomeView,
    alias: '/home',
    meta: { name: '首頁' },
    children: [
      {
        path: '/about',
        name: 'about',
        // 動態載入元件 當用戶訪問路徑後才載入 (拆分引入)
        // 在大型網站上，動態引入較有優勢
        component: () => import('@/views/AboutView.vue'),
        meta: { name: '關於我們' }
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    // 動態載入元件 當用戶訪問路徑後才載入 (拆分引入)
    // 在大型網站上，動態引入較有優勢
    component: () => import('@/views/AboutView.vue'),
    meta: { name: '關於我們' },
    children: [
      {
        // 動態路由參數 (範例為限定數字) /about/hello/1
        path: 'hello/:id(\\d+)',
        name: 'aboutHello',
        component: () => import('@/components/about/aboutCard.vue')
      }
    ]
  },
  {
    path: '/members',
    name: 'members',
    meta: { name: '會員列表' },
    component: () => import('@/views/MembersView.vue')
  },
  {
    path: '/members/member_detail/:id',
    name: 'member_detail',
    meta: { name: '會員詳細資料' },
    component: () => import('@/views/MemberDetailView.vue')
  },

  {
    path: '/products',
    name: 'products',
    meta: { name: '產品列表' },
    component: () => import('@/views/ProductsView.vue')
  },
  // 編輯頁面需要權限才可訪問
  {
    path: '/edit',
    name: 'edit',
    meta: { name: '編輯' },
    component: () => import('@/views/EditView.vue'),
    children: [
      {
        path: 'can_edit',
        name: 'canEdit',

        component: () => import('@/views/EditView.vue'),
        meta: { requiresAuth: 1, name: '可以編輯' }
      }
    ]
  },

  // 測試 redirect用
  {
    path: '/else',
    name: 'returnToHomePage',

    // redirect 不需要定義 component
    redirect: (to) => {
      return { path: '/', query: { status: 'returnToHomePage', name: to.name }, alias: '/home' }
    }
  },
  // 404 notfound
  {
    path: '/:path(.*)*',
    name: 'NotFound',
    // component: NotFoundView,
    component: NotFoundView,
    meta: { name: '糟糕！沒有頁面' }
  }
]
