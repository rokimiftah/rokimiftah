import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

export default defineConfig({
	site: "https://rokimiftah.me",
	integrations: [
		mdx(),
		sitemap({
			lastmod: new Date(),
		}),
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
		plugins: [tailwindcss()],
		server: {
			allowedHosts: "dev.rokimiftah.me",
		},
	},
});
