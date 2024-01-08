---
title: Getting Started
---

# Describo Profiles

Describo is driven by profiles. A profile is a set of instructions to the UI to describe how it
should act. This repository is the documentation for writing a profile. It also contains a small
application you can use to validate your profile. And there are example profiles in the repository
as well.

## Profile versions - READ THIS

::: info

If you are writing a profile for Describo Online
[see the documentation with that repository](https://github.com/Arkisto-Platform/describo-online/wiki/Writing-a-domain-specific-profile).

This repository describes profiles for the
[Crate Builder Component](https://github.com/describo/crate-builder-component) which are an
evolution of those.

:::

## Profile documentation

Describo profiles are a way to limit what your users can describe. By default, Describo makes
available all of Schema.org. Often times we don't want to expose all of this to our users so
profiles are a way for a community to tell Describo exactly what users are allowed to describe.

-   [Profile Structure](/profiles/profile-structure.md)
    -   [Context](/profiles/contexts.md)
    -   [Classes and Inputs](/profiles/classes-and-inputs.md)
    -   [Localisation](/profiles/localisation.md)
    -   [Resolve](/profiles/resolve.md)
    -   [Layouts](/profiles/layouts.md)
    -   [Lookup](/profiles/lookups.md)
    -   [Types](/profiles/types.md)

## Domain Specific profiles

Example profiles from specific domains can be seen in the
[domain profiles folder](https://github.com/describo/profiles/tree/master/domain-profiles). If you'd
like to publish your own profile for others to work with or use please submit a pull request to this
repository. You must:

-   create a folder preferably named by your domain in the `domain-profiles` folder.
-   name your profiles in there in some sensible way.

Optionally, add a README to your folder - absolutely recommended but not an essential requirement.
