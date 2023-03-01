<template>
	<LayoutLeft>
		<template #left>
			<h3 class="text-6xl font-bold">Hello world!</h3>
			<div class="bg-teal-200 h-[6px] w-full overflow-hidden mb-32">
				<Parallaxy :speed="120" axis="x" direction="opposite">
					<div class="bg-teal-600 h-[6px] w-[12px]"/>
				</Parallaxy>
			</div>

			<div class="bg-black aspect-square rounded-full w-1/2 flex justify-center items-center overflow-hidden">
				<Parallaxy :speed="160" :animation="animate" class="flex justify-center">
					<svg class="w-1/3" viewBox="0 0 128 128"><path fill="#fff" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"></path><path fill="#aaa" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"></path></svg>
				</Parallaxy>
			</div>
		</template>
		<template #right>
			<div class="prose pb-16">
				<h3>Example 4 - endless playground</h3>
				<p>In this examples we:</p>
				<ul>
					<li>Show movement on `y` axis</li>
					<li>Showing different transformations based on delta value. We move the element up first, then we rotate it.</li>
				</ul>
			</div>
			<SyntaxCode :code="code"/>
		</template>
	</LayoutLeft>
</template>

<script setup lang="ts">
import LayoutLeft from '@/components/LayoutLeft.vue';
import Parallaxy from '@/components/Parallaxy.vue';
import SyntaxCode from '@/components/SyntaxCode.vue';
import code from '@/assets/example-4.html';

const animate = (delta: number) => {
	if (delta > -2) {
		return 'transform: translate3d(0, 120px, 0)';
	} else if (120 + (delta * 2) > 0) {
		return `transform: translate3d(0, ${120 + (delta * 2)}px, 0)`;
	} else {
		return `transform: translate3d(0, 0, 0) rotateY(${delta * 2}deg)`;
	}
};
</script>
