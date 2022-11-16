import { setComponentData, getProperties, getAttrs } from './component';
import generateID from '@/utils/generateID';

export interface ComponentModle {
	id: string;
	key: string;
	style: any;
	children?: ComponentModle[];
}

// 生成菜单 - 组件列表
export const genMenuOps = async () => {
	const compData = await setComponentData();
	return compData.map((compItem) => {
		return {
			label: compItem.info.label,
			key: compItem.info.tag,
			icon: compItem.info.icon
		};
	});
};

// 生成组件初始样式数据
export const genCompStyleData = async (tag: string) => {
	const properties = await getProperties(tag);
	return getAttrs(properties);
};

// 生成组件右侧属性栏数据
export const genComponentProperties = async (tag: string) => {
	const properties = await getProperties(tag);
	return properties;
};

// 生成组件数据
export const initCompDataByDrop = (key: string, style: any, top: number, left: number) => {
	const component: ComponentModle = {
		id: generateID(),
		key,
		style: { ...style, top, left }
	};
	if (key === 'WdForm') component.children = new Array(4).fill(1);
	return component;
};
