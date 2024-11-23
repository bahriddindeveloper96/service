import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './assets/main.css'
import 'aos/dist/aos.css'
import AOS from 'aos'

const app = createApp(App)

app.use(router)
app.use(i18n)

AOS.init({
  duration: 1000,
  once: true
})

app.mount('#app')
