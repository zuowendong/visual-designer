import type { App, Plugin } from 'vue';
import DuiConfigArray from './DuiConfigArray.vue';

DuiConfigArray.install = (app: App) => {
	app.component(DuiConfigArray.name, DuiConfigArray);
	return app;
};

export default DuiConfigArray as typeof DuiConfigArray & Plugin;
