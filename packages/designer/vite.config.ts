import { fileURLToPath, URL } from 'node:url';
import { resolve } from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { configManualChunk } from './build/optimizer';
import { visualizer } from 'rollup-plugin-visualizer';
import viteCompression from 'vite-plugin-compression';
import externalGlobals from 'rollup-plugin-external-globals';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd());
	return {
		base: '/visual-designer/',
		plugins: [
			vue(),
			vueJsx(),
			AutoImport({
				imports: ['vue'],
				resolvers: [ElementPlusResolver()]
			}),
			Components({
				resolvers: [ElementPlusResolver()]
			}),
			viteCompression({
				ext: '.gz',
				deleteOriginFile: false
			}),
			visualizer({
				filename: './node_modules/.cache/visualizer/stats.html',
				open: true,
				gzipSize: true,
				brotliSize: true
			})
		],
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			}
		},
		server: {
			host: '0.0.0.0',
			port: 5733,
			proxy: {
				'/api': {
					target: env.VITE_BASE_URL,
					changeOrigin: true,
					rewrite: (path) => path.replace(/^\/api/, '')
				}
			}
		},
		build: {
			reportCompressedSize: false,
			sourcemap: false,
			rollupOptions: {
				// 分包策略
				manualChunks: configManualChunk,
				output: {
					chunkFileNames: 'js/[name]-[hash].js',
					entryFileNames: 'js/[name]-[hash].js',
					assetFileNames: '[ext]/[name]-[hash].[ext]'
				},
				external: ['ace-builds'],
				plugins: [
					externalGlobals({
						'ace-builds': 'ace'
					})
				]
			}
		}
	};
});
