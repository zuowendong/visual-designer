import { defineComponent } from 'vue';

const DuiUpload = defineComponent({
	name: 'DuiUpload',
	setup() {
		return () => {
			return (
				<el-upload action="#" limit={1} list-type="picture-card" auto-upload={false}>
					<el-icon>+</el-icon>
				</el-upload>
			);
		};
	}
});

export default DuiUpload;
