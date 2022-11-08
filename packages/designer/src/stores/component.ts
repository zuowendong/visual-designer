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
	const editorDom = ref(); // 编辑器dom
	const setEditorDom = (refObj: any) => {
		editorDom.value = refObj;
	};

	const currentComponent = ref<any>({});
	const currentComponentIndex = ref<number>();
	const setCurrentComponent = (component: any, index: number) => {
		currentComponent.value = component;
		currentComponentIndex.value = index;
	};

	const setShapeStyle = (props: any) => {
		const { top, left, width, height, rotate } = props;
		if (top) currentComponent.value.style.top = Math.round(top);
		if (left) currentComponent.value.style.left = Math.round(left);
		if (width) currentComponent.value.style.width = Math.round(width);
		if (height) currentComponent.value.style.height = Math.round(height);
		if (rotate) currentComponent.value.style.rotate = Math.round(rotate);
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
