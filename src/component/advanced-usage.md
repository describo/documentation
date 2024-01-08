---
title: Advanced Usage
---

# Advanced Usage

The component was explicitly designed to be simple to get started with. At a minimum, you can pass
in an RO-crate and the component will display it and make all of schema.org available for
description.

However, in anything but the simplest application, it's highly likely the component will be
interacting with components in the application and need to update relative to changes outside
itself. For this reason, the component exposes the internal CrateManager and some other methods for
the application to effect the internal state of the component itself.

## Usage and setup

Consider the following HTML and JS snippets.

```html
<DescriboCrateBuilder :crate="crate" ref="describo" />
```

```JS
import { ref } from 'vue'
import DescriboCrateBuilder from ...


const describo = ref()

// console.log(describo.value)
// {
//    cm: function(),
//    refresh: function(),
//    setCurrentEntity: function({ id }),
//    setTab: function(tabName)
// }
```

If you connect to the component via a reference, you will get access to an object with the following
properties:

-   cm: the internal CrateManager instance that the component uses to manipulate the data;
-   refresh: a method to tell the current entity to refresh its display;
-   setCurrentEntity({ id }): a method to set the enity to display;
-   setTab(tabName): a method to display the selected tab.

Following are some examples of how you can use these methods.

## Add some data to crate, modify the root dataset and refresh the display

```JS
const { cm, refresh } = describo.value;
cm.setProperty({ id: "./", property: "author", value: 1 });
cm.setProperty({ id: "./", property: "babies", value: 1 });
let e = cm.addEntity({ "@id": "#person", "@type": "Person", name: "a person" });
cm.linkEntity({
    id: "./",
    property: "contributor",
    value: { "@id": e["@id"] },
});
refresh();
```

## Change the tab being displayed

This assumes you've loaded a profile with tabbed grouping.

```JS
const { setTab } = describo.value;
setTab("numbers");
```

::: warning NOTE!

It's up to the application to know what tab to display. The component doesn't do any checking of
this.

:::

## Set the current entity

```JS
const let { setCurrentEntity } = describo.value;
setCurrentEntity({ id: "#person" });
```

::: warning NOTE!

It's up to the application to know that the entity exists. The component doesn't do any checking of
this.

:::
