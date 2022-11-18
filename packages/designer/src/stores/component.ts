import { defineStore } from 'pinia';
import type { ComponentModel, propertyModel } from '../types/component';

export const useComponentStore = defineStore('component', () => {
	// 编辑器dom
	const editorDom = ref();
	const setEditorDom = (refObj: HTMLElement) => {
		editorDom.value = refObj;
	};

	// 当前组件
	const currentComponent = ref<ComponentModel>({ id: '', label: '', key: '', style: {} });
	const currentComponentId = ref<string>('');
	const setCurrentComponent = (component: ComponentModel, compId: string) => {
		currentComponent.value = component;
		currentComponentId.value = compId;
	};
	const setCurrentComponentById = (compId: string) => {
		const targetComp = components.find((compItem) => compItem.id === compId);
		if (targetComp) {
			currentComponent.value = targetComp;
			currentComponentId.value = compId;
		}
	};
	// 设置当前组件的shapebox样式
	const setShapeStyle = (props: propertyModel) => {
		const { top, left, width, height, rotate } = props;
		if (top) currentComponent.value.style.top = Math.round(top);
		if (left) currentComponent.value.style.left = Math.round(left);
		if (width) currentComponent.value.style.width = Math.round(width);
		if (height) currentComponent.value.style.height = Math.round(height);
		if (rotate) currentComponent.value.style.rotate = Math.round(rotate);
	};
	// 取消or选中组件
	const isChoosedComponent = ref<boolean>(false);
	const setChoosedComponentStatus = (status: boolean) => {
		isChoosedComponent.value = status;
	};
	const updateCurrentComponent = (props: propertyModel) => {
		Object.keys(props).forEach((propKey: string) => {
			const propValue = props[propKey];
			currentComponent.value.style[propKey] = propValue;
		});
	};

	// 画布中所有组件
	const components = reactive<ComponentModel[]>([]);
	const addComponent = (component: ComponentModel) => {
		components.push(component);
	};
	// 添加组件到容器
	const addCompInContainer = (id: string, component: ComponentModel, index: number) => {
		const containerComp = components.find((compItem) => compItem.id === id);
		if (containerComp) {
			containerComp.children!.splice(index, 1, component);
		}
	};
	const deleteComponent = () => {
		const index = components.findIndex((compItem) => compItem.id === currentComponentId.value);
		if (index !== -1) {
			components.splice(index, 1);
			setCurrentComponent({ id: '', label: '', key: '', style: {} }, ''); // 清空当前组件
		}
	};

	// 是否为容器组件
	const isContainer = ref<boolean>(false);

	return {
		editorDom,
		setEditorDom,

		currentComponent,
		currentComponentId,
		setCurrentComponent,
		setCurrentComponentById,
		setShapeStyle,
		updateCurrentComponent,

		isChoosedComponent,
		setChoosedComponentStatus,

		components,
		addComponent,
		addCompInContainer,
		deleteComponent,

		isContainer
	};
});
