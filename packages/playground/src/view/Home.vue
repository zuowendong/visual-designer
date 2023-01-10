<template>
	<main class="w-screen h-screen pt-5 grid grid-cols-[200px_auto] gap-x-1">
		<div class="py-5">
			<div v-for="(routerItem, i) in routerPages.options.routes[0].children" :key="i">
				<div
					class="h-8 leading-8 cursor-pointer pl-5 mb-1 hover:text-sky-500"
					@click="handleView(routerItem)"
				>
					{{ routerItem.name }}
				</div>
			</div>
		</div>
		<div class="border-l border-solid border-black pl-5">
			<RouterView />
		</div>
	</main>
</template>

<script setup lang="ts">
import { useRouter, RouterView } from 'vue-router';
import routerPages from '../router';

const router = useRouter();
const handleView = (routerData: any) => {
	router.push({ name: routerData.name });
};
</script>
