import { defineStore } from 'pinia';

export interface ComponentModel {
	id: string;
	name: string;
	key: string;
	value?: string;
	values?: string;
	property?: PropertiesModel;
}
export interface PropertiesModel {
	[k: string]: any;
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
	// const updateCurrentByKey = (key: string, value: string) => {
	const updateCurrentByKey = () => {
		// for (let i = 0; i < currentComponent.value.property.length; i++) {
		// 	const property = currentComponent.value.property[i];
		// 	if (property.key === key) {
		// 		currentComponent.value.property[i].value = value;
		// 	}
		// }
	};

	const components = ref<ComponentModel[]>([]);

	return {
		currentComponent,
		setCurrentComponent,
		updateCurrentByKey,

		components
	};
});
