import type { App, Plugin } from 'vue';
import WdChartBar from './index.vue';

WdChartBar.install = (app: App) => {
	app.component(WdChartBar.name, WdChartBar);
	return app;
};

export default WdChartBar as typeof WdChartBar & Plugin;
