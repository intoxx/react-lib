import { resolve } from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import checker from "vite-plugin-checker";
import pkg from "./package.json";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react({
			jsxRuntime: "classic"
		}),

		checker({
			typescript: true
		}),

		dts({
			include: ["lib"]
		})
	],
	build: {
		sourcemap: true,

		lib: {
			entry: resolve(__dirname, "lib/main.tsx"),
			name: "react-lib-3",
			filename: "react-lib-3"
		},

		rollupOptions: {
			external: [
				...Object.keys(pkg.dependencies ?? {}),
				...Object.keys(pkg.devDependencies ?? {}),
				...Object.keys(pkg.peerDependencies ?? {})
			],
			output: {
				globals: {
					"react": "React",
					"react-dom": "ReactDOM",
					"@stitches/react": "stitches"
				}
			}
		}
	}
})
