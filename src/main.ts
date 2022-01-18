import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/index.css'
import Particles from 'particles.vue3'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(Particles)
app.mount('#app')
