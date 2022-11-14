import {
	d as c,
	r as g,
	c as r,
	o,
	a as t,
	F as y,
	b as C,
	n as l,
	u as a,
	e as _
} from './index.13bd0b33.js';
const k = ['onClick'],
	v = c({ name: 'WdForm' }),
	F = c({
		...v,
		props: { formItems: null, column: null },
		emits: ['chooseComponent'],
		setup(n, { emit: m }) {
			const u = n,
				d = (e) => {
					m('chooseComponent', e);
				};
			let i = g(u.column);
			const p = r(
					() =>
						`width: 100%; height: 100%; display: grid; grid-template-columns: repeat(${i.value}, 1fr); gap: 4px`
				),
				f = r(() => 'height: 40px; background-color: antiquewhite; cursor: grab;');
			return (e, S) => (
				o(),
				t(
					'div',
					{ style: l(a(p)) },
					[
						(o(!0),
						t(
							y,
							null,
							C(
								n.formItems,
								(s, h) => (
									o(),
									t(
										'div',
										{ key: h, style: l(a(f)), onClick: (b) => d(s) },
										[_(e.$slots, 'default', { component: s })],
										12,
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
export { F as default };
