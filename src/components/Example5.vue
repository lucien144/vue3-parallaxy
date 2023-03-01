<template>
	<LayoutRight>
		<template #left>
			<div class="prose pb-16">
				<h3>Example 5 - debug & breakpoints</h3>
				<ul>
					<li>The `debug` option displays a debug bar where you can easily see the actuall values of all props. Especially handy is the ability to manually overwrite the speed prop here.</li>
					<li>Example of `breakpoints` use here. You can modify and control all props for different breakpoints you specify. Just resize your window bellow 1024 and see the difference.</li>
				</ul>
			</div>
			<SyntaxCode :code="code"/>
		</template>
		<template #right>
			<Parallaxy debug axis="x" :speed="-100" :breakpoints="{1024: {axis: 'y', speed: 60}}" class="self-center">
				<img src="https://picsum.photos/500">
			</Parallaxy>
		</template>
	</LayoutRight>
</template>

<script setup lang="ts">
import Parallaxy from '@/components/Parallaxy.vue';
import SyntaxCode from '@/components/SyntaxCode.vue';
import code from '@/assets/example-4.html';
import LayoutRight from "@/components/LayoutRight.vue";
</script>
