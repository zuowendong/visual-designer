import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
	base: '/',
	plugins: [Vue()],
	server: {
		host: '0.0.0.0',
		port: 5174
	}
});
