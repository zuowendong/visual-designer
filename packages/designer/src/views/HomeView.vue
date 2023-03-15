<template>
	<main
		class="w-screen h-screen grid grid-cols-[200px_auto_400px] grid-rows-[60px_auto] bg-[#1a1a1a] text-white overflow-x-hidden overflow-y-auto"
	>
		<section class="col-start-1 col-end-4">
			<NavbarView />
		</section>
		<SidebarView />
		<section class="p-5 bg-[#242424]">
			<CanvasView />
		</section>
		<AttributeView />
	</main>
</template>

<script setup lang="ts">
import { NavbarView, SidebarView, CanvasView, AttributeView } from './components';
</script>
