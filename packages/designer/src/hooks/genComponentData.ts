import { fileConfig } from '@form-designer/components';

// 菜单 - 组件列表
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

export const genCompStyleData = async (tag: string) => {
	const properties = await fileConfig.createComponent(tag);
	return {
		...getProperties(properties).attrs
	};
};

// 获取组件初始数据
const setComponentData = async () => {
	const originCompData: any[] = [];
	// 获取所有组件 build.json 数据
	const allBuilInfo = fileConfig.getAllBuildModule();
	for (const key in allBuilInfo) {
		const infoVal: any = allBuilInfo[key];
		// 获取组件 properties.ts 文件
		const properties = await fileConfig.createComponent(infoVal.tag);
		originCompData.push({
			info: infoVal,
			properties
		});
	}
	return originCompData;
};

// 组件属性文件内容
const getProperties = (properties: any[]) => {
	const propertyObj: any = {
		attrs: {},
		property: {}
	};
	for (let i = 0; i < properties.length; i++) {
		AttrsWalk(properties[i].attrs, propertyObj.attrs);
		propertyObj.property = properties[i];
	}
	return propertyObj;
};

// 所有属性值
const AttrsWalk = (attrs: any[], property: any) => {
	for (let i = 0; i < attrs.length; i++) {
		property[attrs[i].key] = attrs[i].value;
		if (attrs[i].children && attrs[i].children.length) {
			AttrsWalk(attrs[i].children, property);
		}
	}
};

onMounted(async () => await setComponentData());
