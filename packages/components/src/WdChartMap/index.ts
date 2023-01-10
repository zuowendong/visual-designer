import type { App, Plugin } from 'vue';
import WdChartMap from './index.vue';

WdChartMap.install = (app: App) => {
	app.component(WdChartMap.name, WdChartMap);
	return app;
};

export default WdChartMap as typeof WdChartMap & Plugin;
