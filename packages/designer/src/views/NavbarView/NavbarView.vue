<template>
	<div class="main">
		<el-button type="primary" plain @click="apiHandle">接口</el-button>
		{{ msg }}
	</div>
</template>

<script setup lang="ts">
import axios from 'axios';

let msg = ref('');
const apiHandle = () => {
	axios.get('/api/user/user').then((res) => {
		console.log(res);
		msg.value = res.data.name;
	});
};
</script>

<style scoped lang="less">
@import '@/style/base.less';
.main {
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	border-bottom: 1px solid @mainBoderColor;
	display: flex;
	align-items: center;
	padding: 0 20px;
	color: #ffffff;
}
</style>
