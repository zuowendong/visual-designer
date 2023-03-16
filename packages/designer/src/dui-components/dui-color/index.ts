import type { App, Plugin } from 'vue';
import DuiColorPicker from './DuiColor';

DuiColorPicker.install = (app: App) => {
	app.component(DuiColorPicker.name, DuiColorPicker);
	return app;
};

export default DuiColorPicker as typeof DuiColorPicker & Plugin;
