<template>
	<div class="grid grid-cols-12 gap-2">
		<div class="col-span-10 col-start-2 lg:col-span-6 flex flex-col justify-center">
			<slot name="left"/>
		</div>
		<div class="col-span-10 col-start-2 lg:col-span-4 lg:col-start-9 space-x-32 flex justify-between relative">
			<slot name="right"/>
		</div>
	</div>
</template>
