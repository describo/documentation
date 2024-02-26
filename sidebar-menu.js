export const sidebar = [
    {
        text: "About",
        link: "/about",
    },
    {
        text: "Frequently Asked Questions",
        link: "/faqs",
    },
    { text: "Beginner Tutorial", link: "/guide/five-minute-tutorial" },
    { text: "Team", link: "/team" },
    { text: "Support this work", link: "/support" },
    {
        text: "Desktop User Guide",
        collapsed: false,
        items: [
            { text: "Product Tour", link: "/guide/tour" },
            { text: "Installation", link: "/guide/installation" },
            {
                text: "Configuration",
                collapsed: false,
                items: [
                    {
                        text: "General Settings",
                        link: "/guide/configuration/general-settings",
                    },
                    {
                        text: "AWS integration",
                        link: "/guide/configuration/setting-up-aws",
                    },
                ],
            },
            {
                text: "Tutorials",
                collapsed: false,
                items: [
                    {
                        text: "What is JSON-LD and RO-Crate?",
                        link: "/guide/tutorials/explainer-rocrate-and-jsonld",
                    },
                    {
                        text: "Working with an RO-Crate",
                        link: "/guide/tutorials/working-with-a-crate",
                    },
                ],
            },
        ],
    },
    {
        text: "Profiles",
        collapsed: true,
        items: [
            { text: "Get Started", link: "/profiles/get-started" },
            { text: "Profile Structure", link: "/profiles/profile-structure" },
            { text: "Context", link: "/profiles/contexts" },
            { text: "Layouts", link: "/profiles/layouts" },
            { text: "Localisation", link: "/profiles/localisation" },
            { text: "Resolve", link: "/profiles/resolve" },
            { text: "Classes and Inputs", link: "/profiles/classes-and-inputs" },
            { text: "Lookups", link: "/profiles/lookups" },
            { text: "Data Types", link: "/profiles/types" },
        ],
    },
    {
        text: "Component",
        collapsed: true,
        items: [
            { text: "Get Started", link: "/component/get-started" },
            { text: "Usage & Configuration", link: "/component/usage-and-configuration" },
            { text: "Data Validation", link: "/component/validation" },
            { text: "Identifiers", link: "/component/identifiers" },
            { text: "Advanced Usage", link: "/component/advanced-usage" },
            { text: "Crate Manager", link: "/component/crate-manager" },
            { text: "Internationalisation", link: "/component/internationalisation" },
            { text: "Themes", link: "/component/themes" },
        ],
    },
];
