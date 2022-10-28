import { defineStore } from 'pinia';

export interface ComponentModel {
	id: string;
	name: string;
	key: string;
	value?: string;
	values?: string;
}

export const useComponentStore = defineStore('component', () => {
	const currentComponent = ref({});
	const setCurrentComponent = (component: ComponentModel) => {
		currentComponent.value = component;
	};

	return {
		currentComponent,
		setCurrentComponent
	};
});
