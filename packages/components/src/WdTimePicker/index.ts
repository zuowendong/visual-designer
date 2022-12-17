import type { App, Plugin } from 'vue';
import WdTimePicker from './index.vue';

WdTimePicker.install = (app: App) => {
	app.component(WdTimePicker.name, WdTimePicker);
	return app;
};

export default WdTimePicker as typeof WdTimePicker & Plugin;
