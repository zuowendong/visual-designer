import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import path, { format } from 'path';
// import defineOptions from 'unplugin-vue-define-options/vite';

export default defineConfig({
	plugins: [vue(), dts()],
	build: {
		lib: {
			entry: path.resolve(__dirname, 'src/index.ts'),
			name: 'desinger-components',
			fileName: (format) => `wd.${format}.js`
		},
		rollupOptions: {
			external: ['vue', 'lodashEs'],
			output: {
				globals: {
					vue: 'Vue',
					lodashEs: 'lodashEs'
				}
			}
		}
	}
});
