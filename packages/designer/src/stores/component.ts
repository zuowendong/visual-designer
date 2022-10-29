import { defineStore } from 'pinia';

export interface ComponentModel {
	id: string;
	name: string;
	key: string;
	value?: string;
	values?: string;
	properties?: any;
}

export const useComponentStore = defineStore('component', () => {
	const currentComponent = ref<ComponentModel>({
		id: '',
		name: '',
		key: ''
	});
	const setCurrentComponent = (component: ComponentModel) => {
		currentComponent.value = component;
	};

	return {
		currentComponent,
		setCurrentComponent
	};
});
