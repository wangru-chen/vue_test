// import { createApp } from 'vue'
// import App from './App.vue'
// import ElementPlus from 'element-plus'
// createApp(App).mount('#app')


import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import App from './App.vue'
import 'element-plus/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'
import './styles/element/index.scss'
const app = createApp(App)
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.mount('#app')