<script setup lang="ts">
import code from '@/assets/example-3.html';
import Parallaxy from '@/components/Parallaxy.vue';
import LayoutRight from '@/components/LayoutRight.vue';
import SyntaxCode from '@/components/SyntaxCode.vue';
</script>

<template>
	<LayoutRight>
		<template #left>
			<div class="prose pb-16">
				<h3>Example 3 - movement inside moving containers</h3>
				<p>In this examples we clip elements (video and images) that move inside moving containers.</p>
			</div>
			<SyntaxCode :code="code"/>
		</template>
		<template #right>
			<Parallaxy class="space-y-16">
				<div class="clip aspect-square overflow-hidden flex flex-col justify-center rounded-tl-full transform translate-x-3">
					<Parallaxy :speed="70">
						<video autoplay muted loop playsinline>
							<source src="@/assets/video.mp4">
						</video>
					</Parallaxy>
				</div>
				<div class="clip aspect-square overflow-hidden flex flex-col justify-center">
					<Parallaxy :speed="60" direction="opposite">
						<img src="https://picsum.photos/1024/2048?2" class="w-full">
					</Parallaxy>
				</div>
			</Parallaxy>
			<Parallaxy :speed="55" direction="opposite" class="space-y-16">
				<div class="clip aspect-square overflow-hidden flex flex-col justify-center">
					<Parallaxy :speed="60" direction="opposite">
						<img src="https://picsum.photos/1024/2048?3" class="w-full">
					</Parallaxy>
				</div>
				<div class="clip aspect-square overflow-hidden flex flex-col justify-center rounded-br-full transform -translate-x-3">
					<Parallaxy>
						<img src="https://picsum.photos/1024/2048?4" class="w-full">
					</Parallaxy>
				</div>
			</Parallaxy>
		</template>
	</LayoutRight>
</template>
