import { setComponentData, getProperties, getAttrs } from './component';

import type { IMenusModel } from '@/types/menus';
import type { propertyModel } from '@/types/component';

// 生成菜单 - 组件列表
export const genMenuOps = async (): Promise<IMenusModel> => {
	const compData = await setComponentData();
	const categoryMap: IMenusModel = {};
	for (let i = 0; i < compData.length; i++) {
		const { categoryKey, categoryName, label, tag, icon } = compData[i].info;
		if (categoryMap[categoryKey]) {
			categoryMap[categoryKey].name = categoryName;
			categoryMap[categoryKey].list.push({ label, key: tag, icon });
		} else {
			categoryMap[categoryKey] = {
				name: categoryName,
				list: [{ label, key: tag, icon }]
			};
		}
	}
	return categoryMap;
};

// 生成组件初始样式数据
export const genCompStyleData = async (tag: string): Promise<propertyModel[]> => {
	const properties = await getProperties(tag);
	return getAttrs(properties);
};

// 生成组件右侧属性栏数据
export const genComponentProperties = async (tag: string) => {
	const properties = await getProperties(tag);
	return properties;
};
