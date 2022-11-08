// 角度转弧度
// Math.PI = 180 度
function angleToRadian(angle: number) {
	return (angle * Math.PI) / 180;
}

export function calculateRotatedPointCoordinate(point: any, center: any, rotate: number) {
	/**
	 * 旋转公式：
	 *  点a(x, y)
	 *  旋转中心c(x, y)
	 *  旋转后点n(x, y)
	 *  旋转角度θ                tan ??
	 * nx = cosθ * (ax - cx) - sinθ * (ay - cy) + cx
	 * ny = sinθ * (ax - cx) + cosθ * (ay - cy) + cy
	 */

	return {
		x:
			(point.x - center.x) * Math.cos(angleToRadian(rotate)) -
			(point.y - center.y) * Math.sin(angleToRadian(rotate)) +
			center.x,
		y:
			(point.x - center.x) * Math.sin(angleToRadian(rotate)) +
			(point.y - center.y) * Math.cos(angleToRadian(rotate)) +
			center.y
	};
}

// 求两点之间的中点坐标
export function getCenterPoint(p1: any, p2: any) {
	return {
		x: p1.x + (p2.x - p1.x) / 2,
		y: p1.y + (p2.y - p1.y) / 2
	};
}
