---
title: validation
---

# Validation

## Profile validation

Included in this bundle is a method you can use in your own application to validate the profile.

```JS
import validateProfile from "@describo/crate-builder-component/src/crate-builder/helpers.js"

const profile = { ... }
if (profile) {
    let result = validateProfile(profile);
    if (!result.valid) console.log("Profile errors", { ...result });
}
```
