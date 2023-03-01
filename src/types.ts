import type { Prop } from 'vue';

export interface ParallaxyOptions {
	axis: string|undefined;
	speed: number|undefined;
	direction: string|undefined;
	animation: Function|undefined;
	disabled: boolean|undefined;
	debug: boolean|undefined;
}

export type ParallaxyPropsType = {
	axis: Prop<string>;
	speed: Prop<number>;
	direction: Prop<string>;
	animation: Prop<Function>;
	disabled: Prop<boolean>;
	debug: Prop<boolean>;
	breakpoints?: Prop<{[key: number]: ParallaxyPropsType}|undefined>;
}
