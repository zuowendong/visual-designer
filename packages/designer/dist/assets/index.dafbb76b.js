import {
	d as p,
	r as _,
	c as n,
	o as a,
	a as c,
	f as d,
	g as b,
	n as i,
	u as s,
	h,
	w as x,
	F as V,
	b as v,
	k as g,
	i as k,
	j as u
} from './index.13bd0b33.js';
const w = { style: { flex: '1' } },
	S = p({ name: 'WdSelect' }),
	F = p({
		...S,
		props: { modelValue: null, label: null, options: null },
		setup(t) {
			let l = _(t.modelValue);
			const r = n(() => 'width: 100%; height: 100%; display: flex; align-items: center'),
				m = n(() => 'display: inline-block; width: 80px; padding-left: 6px; font-size: 14px');
			return (C, o) => {
				const f = u('el-option'),
					y = u('el-select');
				return (
					a(),
					c(
						'div',
						{ style: i(s(r)) },
						[
							d('span', { style: i(s(m)) }, b(t.label), 5),
							d('div', w, [
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
											c(
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
