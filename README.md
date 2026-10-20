# frameupnow-assets

Site-wide CSS and JS for frameupnow.com, moved out of Webflow custom code so every page's HTML is about 46 KB smaller.

| File | Loaded from | Was |
|---|---|---|
| `fun-site.css` | Head Code, render-blocking `<link>` | the large `<style>` block in HEAD-CODE-v8 |
| `fun-site.js` | Footer Code, `<script defer>` | 11 scripts from FOOTER-CODE-v4 |

Webflow loads them from jsDelivr, pinned to a release tag:

    https://cdn.jsdelivr.net/gh/mohsinRafiq-dev/frameupnow-assets@1.0.0/fun-site.min.css
    https://cdn.jsdelivr.net/gh/mohsinRafiq-dev/frameupnow-assets@1.0.0/fun-site.min.js

jsDelivr builds the `.min` versions automatically. Tagged URLs are cached permanently.

## Changing a file

1. Edit the file and commit it.
2. Create a new release with the next tag, for example `1.0.1`.
3. In Webflow, change `@1.0.0` to `@1.0.1` in the Head Code and the Footer Code, then publish.

Never re-use or move an existing tag, because jsDelivr will keep serving the old copy.
