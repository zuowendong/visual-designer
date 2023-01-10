import { createApp } from 'vue';
import router from './router';
import './style.css';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

import { createDesignerUI } from '../../components/src/index';

import App from './App.vue';

const app = createApp(App);
app.use(router);
app.use(ElementPlus);
app.use(createDesignerUI());
app.mount('#app');
