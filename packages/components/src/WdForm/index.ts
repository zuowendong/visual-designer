import type { App, Plugin } from 'vue';
import WdForm from './index.vue';

WdForm.install = (app: App) => {
	app.component(WdForm.name, WdForm);
	return app;
};

export default WdForm as typeof WdForm & Plugin;
