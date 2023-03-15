/// <reference types="vite/client" />

interface Window {
	$app: any;
}

declare let defineOptions;

declare module 'rollup-plugin-external-globals';
