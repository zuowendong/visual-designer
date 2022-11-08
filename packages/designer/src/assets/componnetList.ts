export const commonStyle = {
	rotate: 0,
	opacity: 1
};

const componentList = [
	{
		name: '表单容器',
		icon: 'biaodanzujian-biaoge',
		key: 'WdInput',
		style: {}
	},
	{ name: '输入框', icon: 'biaodanzujian-shurukuang', key: 'WdInput' },
	{ name: '选择框', icon: 'biaodanzujian-xialakuang', key: 'WdSelect' }
];

function genComponent(list: any) {
	for (let i = 0, len = list.length; i < len; i++) {
		const item = list[i];
		item.style = { ...commonStyle, ...item.style };
		list[i] = { ...item };
	}
	return list;
}

export default genComponent(componentList);
