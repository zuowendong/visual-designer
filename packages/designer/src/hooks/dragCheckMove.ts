export const checkMove = (e: any) => {
	// data exists in the target array
	// TODO: exchange item
	if (e.relatedContext.list && e.relatedContext.list.length) {
		return false;
	} else {
		return true;
	}
};
