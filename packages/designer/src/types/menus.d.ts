export interface IMenusModel {
	[k: string]: {
		name: string;
		list: IMenuModel[];
	};
}

export interface IMenuModel {
	label: string;
	key: string;
	icon: string;
}

export interface ILiveTimeCompModel {
	id: string;
	label: string;
	key: string;
	depth: number;
}
