import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './style/index.scss'
import { i18n } from '@/lang'
import DuiUI from '@/dui-components'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(i18n)
app.use(DuiUI)

app.mount('#app')
window['$app'] = app
