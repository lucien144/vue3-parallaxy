# Parallaxy

💥 Lightweight yet powerful parallax component for Vue3 with breakpoints option and animation callback. Nuxt3 ready.

---
<p align="center">
👉 <a href="https://parallaxy.144.wtf/#example-1">Examples and usage here.</a> 👈
</p>

---

## Installation

```shell
npm i @lucien144/vue3-parallaxy
# yarn add @lucien144/vue3-parallaxy
```

## Usage

```vue
<template>
	<Parallaxy :speed="20" :animation="(delta: number) => `transform: translate3d(0, ${delta}px, 0);`">
		<img src="https://picsum.photos/400">
	</Parallaxy>
</template>

<script setup lang="ts">
import Parallaxy from '@lucien144/vue3-parallaxy';
</script>
```

## Props

| Props         | Type       | Default / Options                                                   | Description                                                                                                                                                                    |
|---------------|------------|---------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `axis`        | `string`   | `y` / `y, x`                                                        | Axis of the movement.                                                                                                                                                          |
| `speed`       | `number`   | `50`                                                                | Speed of the movement. Higher number -> faster. Negative values changes the direction.                                                                                         |
| `direction`   | `string`   | `normal` / `normal, opposite`                                       | Direction of the movement. `normal` -> `up` on `y` axis etc.                                                                                                                   |
| `breakpoints` | `object`   | `undefined` / `{[breakpoint: number]: {ParallaxyOptions}}`                      | You can specify all props for different breakpoints. If window width >= `breakpoint` then the settings is applied, zero breakpoint is the default settings. See the Example 5. |
| `animation`   | `Function` | `(delta: string) => ...`                                            | Custom CSS style animation where `delta` is the position offset of the element relative to the bottom of the viewport.                                                         |
|               |            | `(delta: string) => transform: translate3d(0, ${delta.value}px, 0);` | For the `y` axis.                                                                                                                                                              |
|               |            | `(delta: string) => transform: translate3d(${delta.value}px, 0, 0);` | For the `x` axis.                                                                                                                                                              |
| `disabled`    | `boolean`  | `false`                                                             | Enable / disable the parallax effect.                                                                                                                                          |
| `debug`       | `boolean`  | `false`                                                             | Show the debug panel.                                                                                                                                                          |

## Few notes under the line

- When using custom animations, always work with `transform: translate3d(0, 0, 0)` to turn on the GPU acceleration.
- Keep in mind that moving element may run out of it's bounding box, thus, use `overflow: hidden` as much as you can.
