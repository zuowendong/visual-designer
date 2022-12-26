import service from './axios';

export const genCode = (data: any) => {
	return service.request({
		url: '/component/code',
		method: 'post',
		data
	});
};
