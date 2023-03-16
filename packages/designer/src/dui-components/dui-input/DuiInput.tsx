import { defineComponent } from 'vue';

const DuiInputText = defineComponent({
	name: 'DuiInputText',
	props: {
		modelValue: { type: String, default: '文本标签' }
	},
	setup(props) {
		const text = ref(props.modelValue);
		watch(
			() => props.modelValue,
			(val) => {
				text.value = val;
			}
		);
		return () => {
			return <el-input v-model={text.value} placeholder="Please input" />;
		};
	}
});

export default DuiInputText;
