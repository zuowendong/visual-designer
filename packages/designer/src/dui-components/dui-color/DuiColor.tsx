import { defineComponent, ref, watch } from 'vue';

const DuiColor = defineComponent({
	name: 'DuiColorPicker',
	props: {
		modelValue: { type: String, default: 'rgba(19, 206, 102, 0.8)' }
	},
	setup(props) {
		const color = ref<string>(props.modelValue);
		watch(
			() => props.modelValue,
			(val) => {
				color.value = val;
			}
		);
		return () => {
			return <el-color-picker v-model={color.value} show-alpha />;
		};
	}
});

export default DuiColor;
