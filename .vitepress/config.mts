import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Describo Documentation",
    base: "/documentation/",
    srcDir: "./src",
    outDir: "./docs",
    head: [
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/fontawesome.min.css",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/regular.min.css",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/solid.min.css",
            },
        ],
        [
            "link",
            {
                rel: "stylesheet",
                href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/brands.min.css",
            },
        ],
    ],

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
            // {
            //     text: "Examples",
            //     items: [
            //         { text: "Markdown Examples", link: "/markdown-examples" },
            //         { text: "Runtime API Examples", link: "/api-examples" },
            //     ],
            // },
        ],

        socialLinks: [{ icon: "github", link: "https://github.com/describo" }],
    },
});
