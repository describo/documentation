import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Describo Documentation",
    base: "/documentation",
    srcDir: "./src",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        // logo: "./images/logos/describo-logo.png",
        nav: [
            //{ text: 'Home', link: '/' },
            //{ text: 'Examples', link: '/markdown-examples' }
        ],

        sidebar: [
            {
                text: "About",
                link: "/about",
            },
            {
                text: "Frequently Asked Questions",
                link: "/faqs",
            },
            {
                text: "Guide",
                items: [{ text: "5 minute tutorial", link: "/guide/five-minute-tutorial" }],
            },
            {
                text: "Examples",
                items: [
                    { text: "Markdown Examples", link: "/markdown-examples" },
                    { text: "Runtime API Examples", link: "/api-examples" },
                ],
            },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
    },
});
