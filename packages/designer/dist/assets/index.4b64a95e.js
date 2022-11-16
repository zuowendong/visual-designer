import {
	d as i,
	t as w,
	r as o,
	w as u,
	c as _,
	o as n,
	a as d,
	F as g,
	b as h,
	e as x,
	u as m,
	n as b
} from './index.7a139e19.js';
const k = ['data-index'],
	A = i({ name: 'WdForm' }),
	S = i({
		...A,
		props: {
			list: { type: Array, default: () => [] },
			row: { type: Number, default: 0 },
			column: { type: Number, default: 0 }
		},
		setup(v) {
			const t = v,
				{ row: l, column: r } = w(t);
			let a = o([]);
			(a.value = new Array(l.value * r.value)),
				u(
					() => t.list,
					(e) => {
						a.value = Object.assign(a.value, e);
					},
					{ deep: !0 }
				);
			let c = o(l.value);
			u(
				() => t.row,
				(e) => {
					(c.value = e), (a.value = new Array(e * r.value));
				}
			);
			let p = o(r.value);
			u(
				() => t.column,
				(e) => {
					(p.value = e), (a.value = new Array(l.value * e));
				}
			);
			const f = _(
				() =>
					`width: 100%; height: 100%; display: grid; grid-template-columns: repeat(${p.value}, 1fr); grid-template-rows: repeat(${c.value}, 1fr); gap: 4px`
			);
			return (e, N) => (
				n(),
				d(
					'div',
					{ style: b(m(f)) },
					[
						(n(!0),
						d(
							g,
							null,
							h(
								m(a),
								(y, s) => (
									n(),
									d(
										'div',
										{ key: s, 'data-index': s, style: { outline: '1px dashed #ccc' } },
										[x(e.$slots, 'default', { component: y, index: s })],
										8,
										k
									)
								)
							),
							128
						))
					],
					4
				)
			);
		}
	});
export { S as default };
