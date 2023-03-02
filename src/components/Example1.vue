<script setup lang="ts">
import Parallaxy from '@/components/Parallaxy.vue';
import LayoutRight from '@/components/LayoutRight.vue';
import SyntaxCode from '@/components/SyntaxCode.vue';
import code from '@/assets/example-1.htm';
</script>

<template>
	<LayoutRight>
		<template #left>
			<div class="prose pb-16">
				<h3 id="example-1">Example 1 - simple use</h3>
			</div>
			<div class="text-sm bg-[#282A36] rounded-lg w-fit">
				<SyntaxCode :code="code"/>
			</div>
		</template>
		<template #right>
			<div class="flex py-64 lg:py-0 lg:space-x-64">
				<Parallaxy :speed="20" class="relative z-20 flex justify-start items-center">
					<img src="https://picsum.photos/400" class="w-3/4 lg:w-full">
				</Parallaxy>
				<Parallaxy :speed="40" direction="opposite" class="relative z-20 flex justify-end items-center">
					<img src="https://picsum.photos/400?2" class="w-3/4 lg:w-full">
				</Parallaxy>
				<Parallaxy :speed="80" class="absolute top-[50%] left-[40%] lg:left-[25%] z-10">
					<img src="https://picsum.photos/400?6" class="w-1/3 lg:w-1/2">
				</Parallaxy>
			</div>
		</template>
	</LayoutRight>
</template>
