export default class BaseProperty {
	public arttrs;
	constructor() {
		this.arttrs = [
			{ name: '坐标X', key: 'left', type: 'dui-input-number', value: 0 },
			{ name: '坐标Y', key: 'top', type: 'dui-input-number', value: 0 },
			{ name: '背景色', key: 'bgColor', type: 'dui-color-picker', value: '' },
			{ name: '层级', key: 'zIndex', type: 'dui-input-number', value: 0 }
		];
	}
}

// export const baseProperty = new BaseProperty();
