import type { App, Plugin } from 'vue';
import WdForm from './Form.vue';
import * as info from './buid.json';
import { properties } from './properties';

WdForm.__info__ = info;
WdForm.__properties__ = properties;

WdForm.install = (app: App) => {
	app.component(WdForm.name, WdForm);
	return app;
};

export default WdForm as typeof WdForm & Plugin;
