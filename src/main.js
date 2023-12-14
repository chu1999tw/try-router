import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

// app.use(ElementPlus, { size: 'small', zIndex: 2000 })
// size :用于设置表单组件的默认尺寸
// zIndex :设置弹框的初始 z-index（默认值：2000）
app.use(ElementPlus)
app.use(router)

app.mount('#app')
