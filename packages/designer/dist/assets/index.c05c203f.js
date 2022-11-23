import {
	d as s,
	t as f,
	c as n,
	f as y,
	o as _,
	a as g,
	g as a,
	h as x,
	u as e,
	n as o,
	i as V,
	j as h
} from './index.c4091019.js';
const S = { style: { flex: '1' } },
	b = s({ name: 'WdInput' }),
	B = s({
		...b,
		props: { modelValue: { type: String, default: '' }, label: { type: String, default: 'input' } },
		setup(p) {
			const i = p,
				{ modelValue: t, label: d } = f(i),
				u = n(() => 'width: 100%; height: 100%; display: flex; align-items: center'),
				r = n(() => 'display: inline-block; width: 80px; padding-left: 6px; font-size: 14px');
			return (v, l) => {
				const c = y('el-input');
				return (
					_(),
					g(
						'div',
						{ style: o(e(u)) },
						[
							a('span', { style: o(e(r)) }, x(e(d)), 5),
							a('div', S, [
								V(
									c,
									{
										modelValue: e(t),
										'onUpdate:modelValue': l[0] || (l[0] = (m) => (h(t) ? (t.value = m) : null)),
										placeholder: 'Please input'
									},
									null,
									8,
									['modelValue']
								)
							])
						],
						4
					)
				);
			};
		}
	});
export { B as default };
