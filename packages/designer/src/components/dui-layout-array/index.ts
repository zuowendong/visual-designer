import type { App, Plugin } from 'vue';
import DuiLayoutArray from './DuiLayoutArray.vue';

DuiLayoutArray.install = (app: App) => {
	app.component(DuiLayoutArray.name, DuiLayoutArray);
	return app;
};

export default DuiLayoutArray as typeof DuiLayoutArray & Plugin;
