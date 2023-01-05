import type { App, Plugin } from 'vue';
import WdImage from './index.vue';

WdImage.install = (app: App) => {
	app.component(WdImage.name, WdImage);
	return app;
};

export default WdImage as typeof WdImage & Plugin;
