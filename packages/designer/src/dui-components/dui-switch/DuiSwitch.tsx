import { defineComponent, ref, watch } from 'vue';

const DuiSwitch = defineComponent({
	name: 'DuiSwitch',
	props: {
		modelValue: { type: Boolean, default: false }
	},
	setup(props) {
		const switchVal = ref<Boolean>(props.modelValue);
		watch(
			() => props.modelValue,
			(val) => {
				switchVal.value = val;
			}
		);

		return () => {
			return <el-switch v-model={switchVal.value} />;
		};
	}
});
export default DuiSwitch;
