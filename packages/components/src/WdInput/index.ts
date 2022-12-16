import type { App, Plugin } from 'vue';
import WdInput from './index.vue';

WdInput.install = (app: App) => {
	app.component(WdInput.name, WdInput);
	return app;
};

export default WdInput as typeof WdInput & Plugin;
