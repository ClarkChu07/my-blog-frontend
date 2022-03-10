import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import store from './store'
import router from './router'
import 'element-plus/dist/index.css'
import Particles from 'particles.vue3'
import App from './App.vue'

const app = createApp(App)

app.use(store)
app.use(router)
app.use(ElementPlus)
app.use(Particles)
app.mount('#app')
