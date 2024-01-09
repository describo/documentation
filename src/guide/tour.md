---
title: Product Tour
aside: false
---

<script setup>

import Stack from '../vue-components/Stack.vue'
const cards = [
    {
        text: "The dashboard. Select a folder of content to describe; load a previously used folder or manage data pack data.",
        image: "/guide/images/tour/desktop1.png",
    },
    {
        text: "Context aware help.",
        image: "./images/tour/desktop1a.png",
    },
    {
        text: `When the RO Crate file is loaded the root dataset is shown on the right along with a file browser on the left.
       In the navigation bar we can see which folder is loaded as well as controls to load a profile and access settings.
        `,
        image: "./images/tour/desktop2.png",
    },
    {
        text: `Selecting a entity of type 'File' will display a preview of that file. The preview can be full screened to get a better look at it.`,
        image: "./images/tour/desktop3.png",
    },
    {
        text: `Describo makes all of Schema.org available to you. In the image we can see all of the properties defined by schema.org
        for an entity of type Dataset; all the way back up the hierarchy to Thing. In addition, we can see what data types each property is expecting.
        The 'about' property expects an entity of type 'Thing' and describo will enforce that.`,
        image: "./images/tour/desktop4.png",
    },
    {
        text: `Entities can be created directly. 'Spatial Coverge' is expecting an entity of type place and describo provides controls
        to create a new entity. In this case, we are creating an entity of type place with the name 'Somewhere'.`,
        image: "./images/tour/desktop5.png",
    },
    {
        text: `Navigating to the entity we can then start managing its data. Shown is the Geometry component which enables creating
        a custom geometry for the Geo property.`,
        image: "./images/tour/desktop6.png",
    },
    {
        text: `Describo is totally configurable via profiles. Profiles are JSON files that describe how the interface looks and  what a user can do.
        Profiles can be loaded from your computer or from the Describo Profiles Repository. Profiles are cached locally for reuse.`,
        image: "./images/tour/desktop7.png",
    },
    {
        text: `When a profile is loaded, the view will adapt based on the content of that profile. In this case, the profile defines
        a tabbed layout for Dataset entities in addition to showing specific properties. This allows the profile author to define
        exactly how the UI should look for their users and guide them on what is required.`,
        image: "./images/tour/desktop8.png",
    },
    {
        text: `Describo is configurable. It supports English and Hungarian (for now) and there are controls for various aspects of its operation.`,
        image: ["./images/tour/desktop9.png", "./images/tour/describo-i18-en.png", "./images/tour/describo-i18-hu.png"],
    },
    {
        text: `There are controls to view the entities in the crate and jump directly to any entity wherever it is.`,
        image: "./images/tour/desktop10.png",
    },
    { text: `There is also a control to directly edit the context.`, image: "./images/desktop11.png" },
    { text: `And one to preview the JSON linked data.`, image: "./images/desktop12.png" },
    { text: `Describo is themable.`, image: "./images/desktop13.png" },
    { text: `Describo can display crates in readonly mode.`, image: "./images/desktop14.png" },
    {
        text: `Describo can display complex entities like actions and relationships that link other entities together.`,
        image: "./images/tour/desktop15.png",
    },
];
</script>

<Stack :cards="cards" class="p-4 bg-slate-100 rounded-lg"></Stack>
