<template>
	<div
		:class="['parallaxy', {'parallaxy--loaded': loaded, 'parallaxy--disabled': options.disabled, 'parallaxy--debug': options.debug}]"
		:style="_animation"
		ref="$outer"
	>
		<slot/>
		<div v-if="options.debug" class="parallaxy__debug">
			speed: <input type="number" step="1" v-model="options.speed"><br>
			delta: {{ Math.round(delta * 10000) / 10000 }}<br>
			axis: {{ options.axis }}<br>
			direction: {{ options.direction }}<br>
			animation: <abbr :title="options.animation">{{ options.animation }}</abbr>
		</div>
	</div>
</template>

<script lang="ts" setup>

import {computed, onMounted, onUnmounted, reactive, ref} from 'vue';
import type { PropType } from 'vue';
import type { ParallaxyOptions, ParallaxyPropsType } from '@/types';

const $outer = ref<HTMLElement>();
const delta = ref(0);
const loaded = ref(false);

const props = defineProps({
	axis: {
		type: String,
		default: 'y',
		validator: (val: string) => ['x', 'y'].includes(val),
	},
	speed: {
		type: Number,
		default: 50,
	},
	direction: {
		type: String,
		default: 'normal',
		validator: (val: string) => ['normal', 'opposite'].includes(val),
	},
	animation: {
		type: Function,
		required: false,
	},
	disabled: {
		type: Boolean,
		default: false,
	},
	debug: {
		type: Boolean,
		default: false,
	},
	breakpoints: {
		type: Object as PropType<{[key: number]: ParallaxyPropsType}|undefined>,
		required: false,
	},
} as ParallaxyPropsType);

const options: ParallaxyOptions = reactive({
	axis: props.axis,
	speed: props.speed,
	direction: props.direction,
	animation: props.animation,
	disabled: props.disabled,
	debug: props.debug,
});

const _animation = computed(() => {
	if (options.disabled) {
		return '';
	}

	if (options.axis === 'y') {
		return options.animation ? options.animation(delta.value) : `transform: translate3d(0, ${delta.value}px, 0);`;
	} else {
		return options.animation ? options.animation(delta.value) : `transform: translate3d(${delta.value}px, 0, 0);`;
	}
});
const directionVector = computed(() => ['normal'].includes(options.direction) ? 1 : -1);
const calculateDelta = () => delta.value = ((window.innerHeight - $outer.value.getBoundingClientRect().top) * ((options.speed as number) / -1000)) * directionVector.value;

const init = () => {
	loaded.value = true;

	options.axis = props.axis;
	options.speed = props.speed;
	options.direction = props.direction;
	options.animation = props.animation;
	options.disabled = props.disabled;
	options.debug = props.debug;

	if (props.breakpoints !== undefined) {
		const breaks = Object.keys(props.breakpoints).sort().reverse();
		for (const breakpoint of breaks) {
			if (window.innerWidth >= Number.parseInt(breakpoint)) {
				options.axis = (props.breakpoints as Array<ParallaxyOptions>)[Number.parseInt(breakpoint)].axis || options.axis;
				options.speed = (props.breakpoints as Array<ParallaxyOptions>)[Number.parseInt(breakpoint)].speed || options.speed;
				options.direction = (props.breakpoints as Array<ParallaxyOptions>)[Number.parseInt(breakpoint)].direction || options.direction;
				options.animation = (props.breakpoints as Array<ParallaxyOptions>)[Number.parseInt(breakpoint)].animation || options.animation;
				options.disabled = (props.breakpoints as Array<ParallaxyOptions>)[Number.parseInt(breakpoint)].disabled || options.disabled;
				options.debug = (props.breakpoints as Array<ParallaxyOptions>)[Number.parseInt(breakpoint)].debug || options.debug;
				break;
			}
		}
	}

	calculateDelta(); // init calculation
	window.addEventListener('scroll', calculateDelta); // recalculate on scroll
};

onMounted(() => {
	if (typeof window === 'undefined') {
		return;
	}

	if (document.readyState === 'complete') {
		init();
	} else {
		window.addEventListener('load', init);
		window.addEventListener('resize', init);
	}
});

onUnmounted(() => {
	if (typeof window === 'undefined') {
		return;
	}

	window.removeEventListener('load', init);
	window.removeEventListener('resize', init);
	window.removeEventListener('scroll', calculateDelta);
});

</script>

<style lang="scss" scoped>
.parallaxy {
	transition: all .2s linear;
	opacity: 0;
	transform: translate3d(0, 0, 0);

	&--loaded {
		opacity: 1;
	}
	&--disabled {
		opacity: 1;
	}

	&--debug {
		position: relative;
	}

	&__debug {
		position: absolute;
		top: 1rem;
		left: 1rem;
		z-index: 9999999;
		background: #fc036f;
		font-family: monospace;
		font-size: 11px;
		border-radius: 5px;
		padding: 5px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, .5);
		width: clamp(200px, 50%, 400px);
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;

		input {
			width: 4rem;
		}
	}
}
</style>
