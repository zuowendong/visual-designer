import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import './style/index.scss'
import WdUI from '@designer/ui'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(WdUI)

app.mount('#app')
