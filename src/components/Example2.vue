<script setup lang="ts">
import code from '@/assets/example-2.html';
import LayoutLeft from '@/components/LayoutLeft.vue';
import SyntaxCode from '@/components/SyntaxCode.vue';
import Parallaxy from '@/components/Parallaxy.vue';
</script>

<template>
	<LayoutLeft>
		<template #left>
			<div class="flex space-x-32">
				<Parallaxy>
					<div class="up">
						<Parallaxy :speed="20" :animation="(delta) => (1 + delta / -30) > 1.5 ? `transform: scale(1.5);` : `transform: scale(${1 + delta / -30});`">
							<img src="https://picsum.photos/400?4" class="w-full">
						</Parallaxy>
					</div>
				</Parallaxy>
				<Parallaxy :speed="70" direction="opposite">
					<div class="down">
						<Parallaxy :speed="20" :animation="(delta) => `transform: scale(${1 + delta / -40});`">
							<img src="https://picsum.photos/400?3" class="w-full">
						</Parallaxy>
					</div>
				</Parallaxy>
			</div>
		</template>
		<template #right>
			<div class="prose pb-16">
				<h3>Example 2 - complex use</h3>
				<p>This example showcase several complex use of the component:</p>
				<ul>
					<li>Nesting Parallaxy component with different settings (speed, direction)</li>
					<li>Using custom animation in which we change the default transfromation and play with the delta (such as setting up max value...)</li>
					<li>Showcasing how the Parallaxy works in advanced CSS techniques such as SVG clip masks.</li>
				</ul>
			</div>
			<SyntaxCode :code="code"/>
		</template>
	</LayoutLeft>
</template>

<style lang="scss" scoped>
.up {
	clip-path: url(#maskUp);
}

.down {
	clip-path: url(#maskDown);
}
</style>
