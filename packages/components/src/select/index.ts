import type { App, Plugin } from 'vue';
import WdSelect from './Select.vue';
import './buid.json';

WdSelect.install = (app: App) => {
	app.component(WdSelect.name, WdSelect);
	return app;
};

export * from './properties';
export default WdSelect as typeof WdSelect & Plugin;
