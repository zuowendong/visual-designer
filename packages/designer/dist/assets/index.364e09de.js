import {
	d as p,
	r as _,
	c as n,
	f as c,
	o as a,
	a as d,
	g as i,
	h as b,
	n as u,
	u as s,
	i as h,
	k as x,
	F as V,
	b as v,
	l as g,
	j as k
} from './index.a27eab18.js';
const S = { style: { flex: '1' } },
	w = p({ name: 'WdSelect' }),
	F = p({
		...w,
		props: { modelValue: null, label: null, options: null },
		setup(t) {
			let l = _(t.modelValue);
			const r = n(() => 'width: 100%; height: 100%; display: flex; align-items: center'),
				m = n(() => 'display: inline-block; width: 80px; padding-left: 6px; font-size: 14px');
			return (C, o) => {
				const f = c('el-option'),
					y = c('el-select');
				return (
					a(),
					d(
						'div',
						{ style: u(s(r)) },
						[
							i('span', { style: u(s(m)) }, b(t.label), 5),
							i('div', S, [
								h(
									y,
									{
										modelValue: s(l),
										'onUpdate:modelValue': o[0] || (o[0] = (e) => (k(l) ? (l.value = e) : (l = e))),
										placeholder: 'please select',
										style: { width: '100%' }
									},
									{
										default: x(() => [
											(a(!0),
											d(
												V,
												null,
												v(
													t.options,
													(e) => (
														a(),
														g(f, { key: e.value, label: e.label, value: e.value }, null, 8, [
															'label',
															'value'
														])
													)
												),
												128
											))
										]),
										_: 1
									},
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
export { F as default };
