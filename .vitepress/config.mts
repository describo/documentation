import { defineConfig } from "vitepress";
import { sidebar } from "../sidebar-menu.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Describo Documentation",
    base: "/documentation/",
    srcDir: "./src",
    outDir: "./docs",
    description:
        "Describo is an ecosystem of tools, software components and services to create and manage linked open data in the form of Research Object Crates.",
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
        [
            "meta",
            {
                name: "title",
                content: "Describo: JSON-LD tools, software and services to manage RO-Crates.",
            },
        ],
        [
            "meta",
            {
                name: "keywords",
                content:
                    "Describo, Research Object, Research-Object Crate, RO-Crate, rocrate, metadata, jsonld, editor, VueJS component, RO-Crate editor, JSON Linked Data, jsonld, json-ld, Linked Data",
            },
        ],
        [
            "meta",
            {
                name: "author",
                content: "Dr Marco La Rosa (https://marcolarosa.github.io/)",
            },
        ],
        [
            "script",
            { type: "application/ld+json" },
            `{
                "@context": "https://schema.org/",
                "@id": "https://describo.github.io/documentation",
                "@type": "WebSite",
                "name": "Describo: JSON-LD tools, software and services to manage RO-Crates.",
                "mainEntityOfPage": "https://describo.github.io/",
                "author": {
                    "@id": "https://marcolarosa.github.io/",
                    "@type": "Person",
                    "name": "Dr Marco La Rosa",
                    "email": "m@lr.id.au",
                    "sameAs": { "@id": "https://orcid.org/0000-0001-5383-6993" }
                },
                "description": "Describo is an ecosystem of tools, software components and services to create and manage linked open data in the form of Research Object Crates.",
                "keywords": [
                    "Describo",
                    "Research Object",
                    "RO-Crate",
                    "rocrate",
                    "metadata",
                    "jsonld",
                    "editor",
                    "vue component",
                    "RO-Crate editor"
                ]
            }`,
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
