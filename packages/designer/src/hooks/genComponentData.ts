import { setComponentData, getProperties, getAttrs } from './component';

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
