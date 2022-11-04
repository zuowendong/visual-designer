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
	const updateCurrentByKey = (key: string, value: string) => {
		for (let i = 0; i < currentComponent.value.properties.length; i++) {
			const property = currentComponent.value.properties[i];
			if (property.key === key) {
				currentComponent.value.properties[i].value = value;
			}
		}
	};

	return {
		currentComponent,
		setCurrentComponent,
		updateCurrentByKey
	};
});
