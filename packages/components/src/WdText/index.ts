import type { App, Plugin } from 'vue';
import WdText from './index.vue';

WdText.install = (app: App) => {
	app.component(WdText.name, WdText);
	return app;
};

export default WdText as typeof WdText & Plugin;
