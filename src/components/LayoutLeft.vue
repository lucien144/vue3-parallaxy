<template>
	<div class="grid grid-cols-12 gap-2">
		<div class="order-2 lg:order-1 col-span-10 col-start-2 lg:col-span-4">
			<slot name="left"/>
		</div>
		<div class="order-1 lg:order-2 col-span-10 col-start-2 lg:col-span-7 lg:col-start-6">
			<slot name="right"/>
		</div>
	</div>
</template>
