<script setup lang="ts">
import { WdButton, WdCheckbox, WdFrom, WdInput, WdRadio, WdSelect, WdSwitch } from './components';

const components = [
	WdButton,
	WdCheckbox,
	WdFrom,
	WdInput,
	WdRadio,
	WdSelect,
	WdSwitch,
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	'',
	''
];
</script>

<template>
	<main class="w-screen h-screen grid grid-cols-5 grid-rows-4 justify-items-center gap-px bg-black">
		<div v-for="(component, i) in components" :key="i" class="w-full h-full bg-slate-200">
			<component :is="component"> </component>
		</div>
	</main>
</template>
