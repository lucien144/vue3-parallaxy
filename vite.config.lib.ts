import { resolve } from 'path';
import { defineConfig, mergeConfig } from 'vite';
import baseConfig from './vite.config';

const libConfig = defineConfig({
	build: {
		lib: {
			entry: resolve(__dirname, 'src/components/Parallaxy.vue'),
			name: 'Vue3Parallaxy',
			fileName: 'vue3-parallaxy',
		},
		rollupOptions: {
			external: ['vue'],
			output: { globals: { vue: 'Vue' } },
		},
	},
});

export default mergeConfig(baseConfig, libConfig);
