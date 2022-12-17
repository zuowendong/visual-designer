import type { App, Plugin } from 'vue';
import WdRadio from './index.vue';

WdRadio.install = (app: App) => {
	app.component(WdRadio.name, WdRadio);
	return app;
};

export default WdRadio as typeof WdRadio & Plugin;
