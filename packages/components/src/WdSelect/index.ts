import type { App, Plugin } from 'vue';
import WdSelect from './index.vue';

WdSelect.install = (app: App) => {
	app.component(WdSelect.name, WdSelect);
	return app;
};

export default WdSelect as typeof WdSelect & Plugin;
