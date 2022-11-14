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
	// 编辑器dom
	const editorDom = ref();
	const setEditorDom = (refObj: any) => {
		editorDom.value = refObj;
	};

	// 当前组件
	const currentComponent = ref<any>({});
	const currentComponentId = ref<string>('');
	const setCurrentComponent = (component: any, compId: string) => {
		currentComponent.value = component;
		currentComponentId.value = compId;
	};
	// 设置当前组件的shapebox样式
	const setShapeStyle = (props: any) => {
		const { top, left, width, height, rotate } = props;
		if (top) currentComponent.value.style.top = Math.round(top);
		if (left) currentComponent.value.style.left = Math.round(left);
		if (width) currentComponent.value.style.width = Math.round(width);
		if (height) currentComponent.value.style.height = Math.round(height);
		if (rotate) currentComponent.value.style.rotate = Math.round(rotate);
	};
	// 取消or选中组件
	const isChoosedComponent = ref(false);
	const setChoosedComponentStatus = (status: boolean) => {
		isChoosedComponent.value = status;
	};
	const updateCurrentComponent = (props: any) => {
		Object.keys(props).forEach((propKey: string) => {
			const propValue = props[propKey];
			currentComponent.value.style[propKey] = propValue;
		});
	};

	// 画布中所有组件
	const components = reactive<any[]>([]);
	const addComponent = (component: any) => {
		components.push(component);
	};
	const deleteComponent = () => {
		const index = components.findIndex((compItem) => compItem.id === currentComponentId.value);
		if (index !== -1) {
			components.splice(index, 1);
			setCurrentComponent({}, ''); // 清空当前组件
		}
	};

	return {
		editorDom,
		setEditorDom,

		currentComponent,
		currentComponentId,
		setCurrentComponent,
		setShapeStyle,
		updateCurrentComponent,

		isChoosedComponent,
		setChoosedComponentStatus,

		components,
		addComponent,
		deleteComponent
	};
});
