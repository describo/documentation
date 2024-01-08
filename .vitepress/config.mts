import { defineConfig } from "vitepress";
import { sidebar } from "../sidebar-menu.js";

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

        sidebar,
        socialLinks: [{ icon: "github", link: "https://github.com/describo" }],
    },
});
