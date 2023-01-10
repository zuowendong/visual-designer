import type { App, Plugin } from 'vue';
import WdChartPie from './index.vue';

WdChartPie.install = (app: App) => {
	app.component(WdChartPie.name, WdChartPie);
	return app;
};

export default WdChartPie as typeof WdChartPie & Plugin;
