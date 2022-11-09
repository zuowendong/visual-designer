import type { App, Plugin } from 'vue';
import WdSelect from './Select.vue';
// import * as info from './buid.json';
// import { properties } from './properties';

// WdSelect.__info__ = info;
// WdSelect.__properties__ = properties;

WdSelect.install = (app: App) => {
	app.component(WdSelect.name, WdSelect);
	return app;
};

export default WdSelect as typeof WdSelect & Plugin;
