import { createApp } from 'vue';
import './style/index.less';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import DuiComponents from './components';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(ElementPlus);
app.use(DuiComponents);

app.mount('#app');
