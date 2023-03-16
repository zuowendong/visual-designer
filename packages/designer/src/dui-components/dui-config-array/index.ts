import type { App, Plugin } from 'vue';
import DuiConfigArray from './DuiConfigArray';

DuiConfigArray.install = (app: App) => {
	app.component(DuiConfigArray.name, DuiConfigArray);
	return app;
};

export default DuiConfigArray as typeof DuiConfigArray & Plugin;
