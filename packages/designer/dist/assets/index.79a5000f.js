import {
	d as s,
	t as f,
	c as n,
	o as y,
	a as _,
	f as a,
	g,
	u as e,
	n as o,
	h as x,
	i as V,
	j as h
} from './index.9cc8bde8.js';
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
				const c = h('el-input');
				return (
					y(),
					_(
						'div',
						{ style: o(e(u)) },
						[
							a('span', { style: o(e(r)) }, g(e(d)), 5),
							a('div', S, [
								x(
									c,
									{
										modelValue: e(t),
										'onUpdate:modelValue': l[0] || (l[0] = (m) => (V(t) ? (t.value = m) : null)),
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
