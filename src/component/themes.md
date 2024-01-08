---
title: Themes
---

# Themes

You can override all of the default styles in the application with anything from tailwind. To do
this, provide your own styles after you import the component into your application.

```JS
import { createApp } from "vue";
import App from "./App.vue";
import DescriboCrateBuilder from "../crate-builder/index.js";
import "./override-styles.css"; // <-- override the styling in this file.
...
```

## override-styles.css

The override styles file with all of the available css prop's is shown following:

```css
/* set styles here to override the colour of the linking elements */
.describo-render-item-link {
    /* @apply bg-yellow-200 hover:bg-yellow-400; */
}

/* set styles here to override the colour of the property rows */
.describo-property-background {
    /* @apply hover:bg-orange-100 bg-purple-200; */
}

/* set styles here to override tab label styles */
.describo-tab-label {
    /* @apply text-orange-600; */
}
.describo-tab-description {
    /* @apply text-purple-600 text-xl text-left pb-4; */
}
```

## Target propery labels
