import service from './axios';

export const saveScene = (data: any) => {
	return service.request({
		url: '/scene/save',
		method: 'post',
		data
	});
};
export const sceneData = (data: any) => {
	return service.request({
		url: '/scene/components',
		method: 'get',
		data
	});
};
