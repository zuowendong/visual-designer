<template>
	<el-upload action="#" list-type="picture-card" :auto-upload="false">
		<el-icon>+</el-icon>

		<template #file="{ file }">
			<img class="el-upload-list__item-thumbnail" :src="file.url" alt="" />
		</template>
	</el-upload>
</template>
<script lang="ts" setup>
defineOptions({
	name: 'DuiUpload'
});
</script>
