import type { App, Plugin } from 'vue';
import WdButton from './index.vue';

// WdButton.__build = import('./build.json');
WdButton.install = (app: App) => {
	app.component(WdButton.name, WdButton);
	return app;
};

export default WdButton as typeof WdButton & Plugin;
