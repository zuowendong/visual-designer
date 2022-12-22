export interface ComponentModel {
	id: string; // 组件id
	label: string; // 标签名
	key: string; // 组件key
	style: propertyModel; // 样式
	event?: any; // 事件
	data?: any; // 数据
	children?: ComponentModel[]; // 容器组件子节点
}

export interface propertyModel {
	[k: string]: any;
}
