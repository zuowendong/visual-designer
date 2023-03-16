import type { App, Plugin } from 'vue';
import DuiInputText from './DuiInput';

DuiInputText.install = (app: App) => {
	app.component(DuiInputText.name, DuiInputText);
	return app;
};

export default DuiInputText as typeof DuiInputText & Plugin;
