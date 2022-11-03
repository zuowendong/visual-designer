import type { App, Plugin } from 'vue';
import DuiInput from './DuiInput.vue';

DuiInput.install = (app: App) => {
	app.component(DuiInput.name, DuiInput);
	return app;
};

export default DuiInput as typeof DuiInput & Plugin;
