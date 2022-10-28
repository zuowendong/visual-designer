import type { App, Plugin } from 'vue';
import WdInput from './Input.vue';
import * as info from './buid.json';
import { properties } from './properties';

WdInput.__info__ = info;
WdInput.__properties__ = properties;

WdInput.install = (app: App) => {
	app.component(WdInput.name, WdInput);
	return app;
};

export default WdInput as typeof WdInput & Plugin;
