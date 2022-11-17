import { fileConfig } from '@form-designer/components';

/**
 * 获取组件初始数据
 * @returns
 */
export const setComponentData = async () => {
	const originCompData: any[] = [];
	// 获取所有组件 build.json 数据
	const allBuilInfo = fileConfig.getAllBuildModule();
	for (const key in allBuilInfo) {
		const infoVal: any = allBuilInfo[key];
		const properties = await getProperties(infoVal.tag);
		originCompData.push({
			info: infoVal,
			properties
		});
	}
	return originCompData;
};

/**
 * 获取组件 properties.ts 文件
 * @param tag
 * @returns
 */
export const getProperties = async (tag: string) => {
	const properties = await fileConfig.createComponent(tag);
	return properties;
};

/**
 * 组件属性文件内容
 * @param properties
 * @returns
 */
export const getAttrs = (properties: any[]) => {
	const attrObj: any = {};
	for (let i = 0; i < properties.length; i++) {
		AttrsWalk(properties[i].attrs, attrObj);
	}

	console.log(222222, attrObj);
	return attrObj;
};

/**
 * 所有属性值
 * @param attrs
 * @param property
 */
const AttrsWalk = (attrs: any[], property: any) => {
	for (let i = 0; i < attrs.length; i++) {
		property[attrs[i].key] = attrs[i].value;
		if (attrs[i].children && attrs[i].children.length) {
			AttrsWalk(attrs[i].children, property);
		}
	}
};

/**
 * 动态注册组件
 * @param key
 * @param node
 */
export const componentInstall = <T>(key: string, node: T) => {
	if (!window['$app'].component(key) && node) {
		window['$app'].component(key, node);
	}
};
