import type { App, Plugin } from 'vue';
import WdSwitch from './index.vue';

WdSwitch.install = (app: App) => {
	app.component(WdSwitch.name, WdSwitch);
	return app;
};

export default WdSwitch as typeof WdSwitch & Plugin;
