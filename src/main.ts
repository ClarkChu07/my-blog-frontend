import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import { createPinia } from "pinia"
import router from './router'
import 'element-plus/dist/index.css'
import Particles from 'particles.vue3'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia()).use(router)
app.use(ElementPlus)
app.use(Particles)
app.mount('#app')
