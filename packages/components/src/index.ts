// import type { App } from 'vue';
// import * as components from './components';
export * from './components';
export * from './types';
export { default as fileConfig } from './config';

// export default {
// 	install(app: App) {
// 		for (const key in components) {
// 			// @ts-expect-error
// 			const comp = components[key];
// 			if (comp.install) app.use(comp);
// 			return app;
// 		}
// 	}
// };
