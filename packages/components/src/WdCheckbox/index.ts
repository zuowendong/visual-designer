import type { App, Plugin } from 'vue';
import WdCheckbox from './index.vue';

WdCheckbox.install = (app: App) => {
	app.component(WdCheckbox.name, WdCheckbox);
	return app;
};

export default WdCheckbox as typeof WdCheckbox & Plugin;
