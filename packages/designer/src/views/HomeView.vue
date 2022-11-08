<template>
	<main>
		<section class="navbar">
			<NavbarView />
		</section>
		<SidebarView />
		<section class="canvasView">
			<CanvasView />
		</section>
		<AttributeView />
	</main>
</template>

<script setup lang="ts">
import { NavbarView, SidebarView, CanvasView, AttributeView } from './components';
</script>

<style scoped lang="less">
@import '@/style/base.less';

main {
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 200px auto 400px;
	grid-template-rows: 60px auto;
	background-color: @mainBgColor;
	color: @mainColor;
	.navbar {
		grid-column-start: 1;
		grid-column-end: 4;
	}
	.canvasView {
		padding: 20px;
		background-color: @canvasBgColor;
	}
}
</style>
