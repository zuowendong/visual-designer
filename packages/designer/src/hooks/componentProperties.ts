import type { IProperties } from '@form-designer/components';
// import { storeToRefs } from 'pinia';
// import { useComponentStore } from '../stores/component';
import type { PropertiesModel } from '../stores/component';

export const genProperties = (data: any) => {
	const propertyObj = ref<any>({});
	const property = propertiesToObject(data);
	Object.keys(property).forEach((key) => {
		propertyObj[key] = property[key].value;
	});
	return propertyObj;
};

// object -> array
export const propertiesToArray = (property: PropertiesModel) => {
	return Object.keys(property).map((propertyKey) => {
		const propertyVal = property![propertyKey];
		return propertyVal;
	});
};

// array -> object
export const propertiesToObject = (properties: IProperties[]) => {
	const propertyObj: PropertiesModel = {};
	for (let i = 0; i < properties.length; i++) {
		const property = properties[i];
		propertyObj[property.key] = property;
	}
	return propertyObj;
};
