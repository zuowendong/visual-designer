import { createRouter, createWebHistory } from 'vue-router';
import Home from '../view/Home.vue';
import * as components from '../components';

const genComponentRouter = () => {
	const routers = [];
	for (const key in components) {
		const item = (components as any)[key];
		routers.push({
			path: `/${item.__name || key}`,
			name: item.__name || key,
			component: item
		});
	}
	return [
		{
			path: '/',
			name: 'home',
			component: Home,
			children: routers
		}
	];
};

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: genComponentRouter()
});

export default router;
