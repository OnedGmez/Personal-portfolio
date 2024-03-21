import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import i18n from './lang/i18next.config.js'
import App from './App.vue'
import router from './router'

const app = i18n(createApp(App))

app.use(createPinia())
app.use(router)

app.mount('#app')
