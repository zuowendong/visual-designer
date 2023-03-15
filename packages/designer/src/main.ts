import { createApp } from 'vue';
import './style/index.less';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import DuiComponent from './dui-components';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.use(ElementPlus);
app.use(DuiComponent);

app.mount('#app');

// 挂载到 window
window['$app'] = app;
