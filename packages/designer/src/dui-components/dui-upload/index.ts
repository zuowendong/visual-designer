import type { App, Plugin } from 'vue';
import DuiUpload from './DuiUpload';

DuiUpload.install = (app: App) => {
	app.component(DuiUpload.name, DuiUpload);
	return app;
};

export default DuiUpload as typeof DuiUpload & Plugin;
