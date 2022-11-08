export function getShapeStyle(style: any) {
	const result: any = { ...style };
	// need add units
	['width', 'height', 'top', 'left', 'rotate'].forEach((attr) => {
		if (attr != 'rotate') {
			result[attr] = style[attr] + 'px';
		} else {
			result.transform = 'rotate(' + style[attr] + 'deg)';
		}
	});
	return result;
}
