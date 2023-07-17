<script setup lang="ts">
import Readme from '../README.md';
import Example1 from '@/components/Example1.vue';
import Example2 from '@/components/Example2.vue';
import Example3 from '@/components/Example3.vue';
import Example4 from '@/components/Example4.vue';
import Example5 from '@/components/Example5.vue';
</script>

<template>
	<div class="container mx-auto">
			<div class="grid grid-cols-12 gap-2">
				<div class="col-span-10 col-start-2">
					<div class="relative prose prose-lg max-w-none py-32">
						<Readme/>
						<div class="absolute top-5 right-0">
							<a class="github-button" href="https://github.com/lucien144/vue3-parallaxy" data-color-scheme="no-preference: light; light: light; dark: dark;" data-size="large" data-show-count="true" aria-label="Star lucien144/vue3-parallaxy on GitHub">Star</a>
						</div>
					</div>
				</div>
			</div>
	</div>

	<div class="py-32 lg:py-64 bg-slate-200 overflow-hidden">
		<div class="container mx-auto lg:my-64">
			<Example1/>
		</div>
	</div>

	<div class="container mx-auto py-32 lg:py-128">
		<Example2/>
	</div>

	<div class="py-64 bg-slate-200 overflow-hidden">
		<div class="container mx-auto my-64">
			<Example3/>
		</div>
	</div>

	<div class="container mx-auto py-128">
		<Example4/>
	</div>

	<div class="py-64 bg-slate-200 overflow-hidden">
		<div class="container mx-auto my-64">
			<Example5/>
		</div>
	</div>

	<footer class="bg-slate-600 py-128 text-white text-center">
		<p>
			Author: <a href="https://144.wtf" target="_blank" class="underline hover:no-underline">Jan Blasko</a><br>
			Video source: <a href="https://www.pexels.com/video/person-holding-sparklers-2301284/" target="_blank" class="underline hover:no-underline">Mudassir Ali</a><br>
			Images source: <a href="https://Unsplash.it" target="_blank" class="underline hover:no-underline">Unsplash.it</a><br>
			GitHub: <a href="https://github.com/lucien144/vue3-parallaxy/" target="_blank" class="underline hover:no-underline">lucien144/vue3-parallaxy</a><br><br>
			NPMJS: <a href="https://www.npmjs.com/package/@lucien144/vue3-parallaxy" target="_blank" class="underline hover:no-underline">lucien144/vue3-parallaxy</a><br><br>
			Released under the <a href="https://choosealicense.com/licenses/mit/" target="_blank" class="underline hover:no-underline">MIT license</a>.
		</p>
	</footer>

	<svg width="0" height="0"><clipPath id="maskDown" clipPathUnits="objectBoundingBox"><path d="M1,0V.55A.49.49,0,0,1,.5,1,.49.49,0,0,1,0,.55V0"></path></clipPath></svg>
	<svg width="0" height="0"><clipPath id="maskUp" clipPathUnits="objectBoundingBox"><path d="M0,1V.45A.49.49,0,0,1,.5,0,.49.49,0,0,1,1,.45V1"></path></clipPath></svg>
	<svg width="0" height="0"><clipPath id="maskBlade" clipPathUnits="objectBoundingBox"><path d="M1,0A1,1,0,0,1,.71.71,1,1,0,0,1,0,1V0Z"></path></clipPath></svg>
	<svg width="0" height="0"><clipPath id="maskBladeUp" clipPathUnits="objectBoundingBox"><path d="M0,1c0-0.3,0.1-0.5,0.3-0.7C0.5,0.1,0.7,0,1,0v1H0z"></path></clipPath></svg>

</template>

<style lang="scss">
table,
li,
p {
	code {
		@apply text-pink-500 bg-red-50 font-normal p-1 rounded #{!important};
	}
}
</style>
