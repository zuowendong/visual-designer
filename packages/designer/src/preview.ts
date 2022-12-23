import { createApp } from 'vue';
import './style/index.less';
import { createPinia } from 'pinia';

import Preview from './views/preview/index.vue';

import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const previewApp = createApp(Preview);
previewApp.use(createPinia());
previewApp.use(ElementPlus);

previewApp.mount('#previewApp');
