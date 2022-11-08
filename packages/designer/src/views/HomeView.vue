<template>
	<main>
		<section class="navbar">
			<navbar-view />
		</section>

		<sidebar-view />

		<section class="canvasView">
			<canvas-view />
		</section>
		<attribute-view />
	</main>
</template>

<script setup lang="ts">
import { NavbarView, SidebarView, CanvasView, AttributeView } from './components';
</script>

<style scoped lang="less">
main {
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 200px auto 400px;
	grid-template-rows: 60px auto;
	.navbar {
		grid-column-start: 1;
		grid-column-end: 4;
	}
	.canvasView {
		padding: 20px;
		background: #f5f5f5;
	}
}
</style>
