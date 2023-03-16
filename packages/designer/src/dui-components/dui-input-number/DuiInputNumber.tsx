import { defineComponent, ref, watch } from 'vue';

const DuiInputNumber = defineComponent({
	name: 'DuiInputNumber',
	props: {
		modelValue: { type: Number, default: 0 }
	},
	setup(props) {
		const number = ref<number>(props.modelValue);
		watch(
			() => props.modelValue,
			(num) => {
				number.value = num;
			}
		);

		return () => {
			return <el-input-number v-model={number.value} controls-position="right" />;
		};
	}
});
export default DuiInputNumber;
