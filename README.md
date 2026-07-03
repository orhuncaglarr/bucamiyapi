# Buca Tile & Bath — Orlando, FL

U.S.-localized website for Buca Yapı (https://www.bucayapi.com.tr/), rebuilt as a
fast static site for the Orlando / Central Florida market.

## Structure

```
index.html            Home — hero, categories, gallery, promotions, about, press, contact
products.html         Five product departments (anchored: #tiles, #sanitary-ware,
                      #vanities, #outdoor, #chemicals)
assets/css/style.css  All styling (responsive, no framework)
assets/js/main.js     Mobile nav, scroll reveal, lightbox, contact form
assets/img/           All photos from the original bucayapi.com.tr site (downloaded
                      from the company's own Wix media library, web-optimized)
```

## Run locally

Any static server works:

```bash
cd bucayapi-orlando
python3 -m http.server 8080
# open http://localhost:8080
```

## ⚠️ Placeholders to replace before going live

- **Address**: `4720 S Orange Blossom Trail, Orlando, FL 32839` is a placeholder —
  replace with the real showroom address in `index.html`, `products.html`
  (top bar, contact card, map embed URL).
- **Phone**: `(407) 555-0134` is a placeholder (555 numbers are not real).
- **Email**: `info@bucatileandbath.com` / `sales@bucatileandbath.com` — set up the
  real domain/mailboxes, then update the top bar, contact section, footer, and
  the `mailto:` fallback in `assets/js/main.js`.
- **Contact form**: currently opens a pre-filled email (no backend). Wire it to
  Formspree/Netlify Forms or your CRM for production.
- **Promotions**: the three offers are sample copy — confirm real offers/terms.
- **Business facts**: founding year (2008), Seramiksan dealership, and press
  features are taken from the original site; verify the "17+ years" stat and
  any claims (delivery, financing, trade pricing) match the U.S. operation.

## Notes

- Social links point to the company's real profiles (@buca.yapi,
  @buca.yapi.seramiksan, facebook.com/bucayapi) and the footer links back to
  the Turkish parent site.
- Turkish press clippings are kept in the Press section as heritage/credibility
  content, with English captions.
