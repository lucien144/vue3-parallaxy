<script setup lang="ts">
const props = defineProps({
	code: {
		type: String,
		required: true,
	},
});
</script>

<template>
	<div class="w-full">
		<div class="text-sm border-8 border-[#282A36] bg-[#282A36] rounded-lg">
			<pre><code class="language-vue">{{code}}</code></pre>
		</div>
	</div>
</template>
