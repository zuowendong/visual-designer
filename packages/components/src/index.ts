import type { App } from 'vue';
import { forEach } from 'lodash-es';
import * as components from './components';
// export * from './components';
export * from './types';
export { default as fileConfig } from './config';

export { components };

export const createDesignerUI = () => {
	// 预处理...
	// components['WdButton'].name = 'WdButton';
	console.log(1111, components);
	return {
		install: (app: App) => {
			forEach(components, (component) => {
				app.component(component.name, component);
			});
		}
	};
};
