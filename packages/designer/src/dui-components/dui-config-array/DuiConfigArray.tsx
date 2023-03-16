import type { PropType } from 'vue';
import { defineComponent, ref, watch } from 'vue';
import type { ISelectOp } from '@visual-designer/components';

interface ISelect {
	value: string;
	values: ISelectOp[];
}

const DuiConfigArray = defineComponent({
	name: 'DuiConfigArray',
	props: {
		modelValue: {
			type: Object as PropType<ISelect>,
			default: () => {}
		}
	},
	setup(props) {
		const formData = ref<ISelectOp>({ label: '', value: '' });
		const optionList = ref<ISelectOp[]>(props.modelValue.values);

		function handleAdd() {
			const { label, value } = formData.value;
			if (!label || !value) return;
			optionList.value.push({ ...formData.value });
			formData.value = { label: '', value: '' };
		}
		function handleDelete(index: number) {
			optionList.value.splice(index, 1);
		}

		return () => {
			return (
				<>
					<div class="grid grid-cols-[120px_120px_90px] gap-x-1.5">
						<el-input v-model={formData.value.label} placeholder="label" />
						<el-input v-model={formData.value.value} placeholder="value" />
						<el-button type="primary" plain onclick={handleAdd}>
							添加
						</el-button>
					</div>
					<div class="mt-1 overflow-x-hidden overflow-y-auto">
						{optionList.value.map((item, index) => (
							<div class="grid grid-cols-[120px_120px_90px] gap-x-1.5 items-center py-[3px]">
								<span class="inline-block max-w-[100px] overflow-hidden">{item.label}</span>
								<span class="inline-block max-w-[100px] overflow-hidden">{item.value}</span>
								<el-button type="danger" plain onclick={() => handleDelete(index)}>
									删除
								</el-button>
							</div>
						))}
					</div>
				</>
			);
		};
	}
});
export default DuiConfigArray;
