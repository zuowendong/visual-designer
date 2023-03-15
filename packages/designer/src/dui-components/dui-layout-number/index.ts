import type { App, Plugin } from 'vue';
import DuiLayoutNumber from './DuiLayoutNumber.vue';

DuiLayoutNumber.install = (app: App) => {
	app.component(DuiLayoutNumber.name, DuiLayoutNumber);
	return app;
};

export default DuiLayoutNumber as typeof DuiLayoutNumber & Plugin;
