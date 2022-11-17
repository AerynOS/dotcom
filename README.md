## Serpent OS Website

This is a relaunch of the [Serpent OS](https://serpentos.com) website and may take a little time to get in order.

Priority items

 - New global [tabler](https://tabler.io/) based theme for consistency with Summit
 - Compatability hax/loaders for old Hugo content
 - Blog storage in LMDB/moss-db
 - Make all the old content available under identical paths
 - Make support paths obvious!

Improvements:

 - Add file caching for static assets
 - 

### Build prerequisites

- `dub` (part of [LDC](https://github.com/serpent-os/onboarding#ldc-dlang-toolchain-installation-dmd-not-supported))
- [chroma](https://github.com/alecthomas/chroma) (use one of the statically compiled releases)

Both `dub` and `chroma-bin` need to live in the system `$PATH`.

Use `dub run` in a terminal to build and run the site.

### License

Copyright © 2020-2021 Serpent OS Developers

Remaining content/code/assets available under the terms of the CC-BY-SA-3.0 license
