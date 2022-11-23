import {
	d as t,
	t as r,
	c as u,
	o as p,
	a as i,
	g as f,
	h as d,
	u as e,
	n as m
} from './index.a27eab18.js';
const _ = t({ name: 'WdText' }),
	y = t({
		..._,
		props: { text: null, fontSize: null, color: null },
		setup(o) {
			const n = o,
				{ text: s, fontSize: a, color: l } = r(n),
				c = u(() => `width: 100%; height: 100%; font-size: ${a.value}px; color: ${l.value}`);
			return (x, h) => (p(), i('div', { style: m(e(c)) }, [f('span', null, d(e(s)), 1)], 4));
		}
	});
export { y as default };
