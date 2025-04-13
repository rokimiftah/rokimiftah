import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://rokimiftah.me",
	integrations: [
		mdx(),
		sitemap({
			lastmod: new Date(),
		}),
		tailwind(),
	],
	devToolbar: {
		enabled: false,
	},
	markdown: {
		shikiConfig: {
			theme: "aurora-x",
			wrap: false,
		},
	},
	trailingSlash: "never",
	server: ({ command }) => ({
		host: "localhost",
		port: 3000,
	}),
	vite: {
		server: {
			allowedHosts: true,
		},
	},
});
