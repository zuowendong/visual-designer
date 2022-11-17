export interface ComponentModel {
	id: string;
	label: string;
	key: string;
	style: propertyModel;
	children?: ComponentModel[];
}

export interface propertyModel {
	[k: string]: any;
}
