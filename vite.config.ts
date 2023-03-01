import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import plainText from 'vite-plugin-plain-text';
import Markdown from 'vite-plugin-vue-markdown';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({ include: [/\.vue$/, /\.md$/] }), plainText(['**/*.htm'], { namedExport: false }), Markdown(),
	],
	resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
});
