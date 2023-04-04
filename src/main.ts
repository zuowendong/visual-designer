import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './style/index.scss'
// import WdUI from '@designer/ui'
// import '@designer/ui/dist/style.css'

import { i18n } from '@/lang'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(WdUI)
app.use(i18n)

app.mount('#app')
