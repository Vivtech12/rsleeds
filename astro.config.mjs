import { defineConfig } from "astro/config";
import icon from "astro-icon";
import sitemap from "@astrojs/sitemap";

import tailwindcss from '@tailwindcss/vite'
// https://astro.build/config
export default defineConfig({
	vite :{
		plugins: [
			tailwindcss(),
		  ],
	},
	site: "https://rstradesleedsltd.com",
	integrations: [icon(), sitemap()],
});                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           