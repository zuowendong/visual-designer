import type { App, Plugin } from 'vue';
import WdInput from './Input.vue';
import './buid.json';

WdInput.install = (app: App) => {
	app.component(WdInput.name, WdInput);
	return app;
};

export * from './properties';
export default WdInput as typeof WdInput & Plugin;
