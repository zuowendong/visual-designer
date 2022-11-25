import { setComponentData, getProperties, getAttrs } from './component';

import type { IMenuModel } from '@/types/menus';
import type { propertyModel } from '@/types/component';

// 生成菜单 - 组件列表
export const genMenuOps = async (): Promise<IMenuModel[]> => {
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
export const genCompStyleData = async (tag: string): Promise<propertyModel[]> => {
	const properties = await getProperties(tag);
	console.log(33333333, properties);
	return getAttrs(properties);
};

// 生成组件右侧属性栏数据
export const genComponentProperties = async (tag: string) => {
	const properties = await getProperties(tag);
	return properties;
};
