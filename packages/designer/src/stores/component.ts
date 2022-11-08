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
	const editorDom = ref();
	const setEditorDom = (refObj: any) => {
		editorDom.value = refObj;
	};

	let currentComponent = reactive<any>({});
	const currentComponentIndex = ref<number>();
	const setCurrentComponent = (component: any, index: number) => {
		currentComponent = component;
		currentComponentIndex.value = index;
	};

	const setShapeStyle = (props: any) => {
		const { top, left, width, height, rotate } = props;
		if (top) currentComponent.style.top = Math.round(top);
		if (left) currentComponent.style.left = Math.round(left);
		if (width) currentComponent.style.width = Math.round(width);
		if (height) currentComponent.style.height = Math.round(height);
		if (rotate) currentComponent.style.rotate = Math.round(rotate);
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

	const components = reactive<any[]>([]);
	const addComponent = (component: any) => {
		components.push(component);
	};

	return {
		editorDom,
		setEditorDom,

		currentComponent,
		setCurrentComponent,
		updateCurrentByKey,
		setShapeStyle,

		components,
		addComponent
	};
});
