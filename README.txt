MISS GAMBLER — SITE PACK (GEO FILTER + CHIPS FX)

How GEO filtering works
- Data is in data.json
- Each brand has allowed_geos: ["IT","ES",...]
- The page shows only brands allowed for the selected country.
- Country selection:
  - Manual: user picks from dropdown (no cookies required)
  - Auto: only if user clicks "Allow" in cookie banner; then we use ipapi.co to detect country.

How to add a new brand
- Add a new object to data.json -> brands[]
- Set allowed_geos to list of two-letter country codes.

Chips Rain Effect
- Clicking "Play Now", "Read Review", or anywhere on the page spawns casino chips rain.

Contact
- Footer contact is Telegram: @DavideCorleone
