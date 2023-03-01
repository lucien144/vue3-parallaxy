<script setup lang="ts">
import { getHighlighter, setCDN } from 'shiki';
import { ref } from 'vue';
setCDN('/node_modules/shiki/');

const props = defineProps({
	code: {
		type: String,
		required: true,
	},
});

const output = ref();

getHighlighter({
	theme: 'dracula-soft',
	langs: ['vue-html', 'js'],
}).then(highlighter => output.value = highlighter.codeToHtml(props.code, { lang: 'vue-html' }));
</script>

<template>
	<div class="w-full">
		<div class="text-sm border-8 border-[#282A36] bg-[#282A36] rounded-lg  overflow-x-scroll" v-html="output">
		</div>
	</div>
</template>
