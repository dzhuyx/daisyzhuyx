# gatsby-appeal-resources/

Static hosting folder for redacted reference materials related to my Pets Best / APIC appeal.

## What goes here

Place the redacted, finalized PDF here once you've reviewed the Word draft. Suggested filenames:

- `gatsby-appeal-resources.pdf` — the combined appeal letter + supporting letter (redacted)

The PDF will be served at:

`https://www.yuxinzhu-daisybiostat.com/uploads/gatsby-appeal-resources/gatsby-appeal-resources.pdf`

(Or whatever your current site URL is — Hugo's default is that anything in `/static/` is served at the URL root.)

## How to point the QR code at it

Once the PDF is here and the site is rebuilt and deployed:

1. Visit the URL above to confirm the PDF loads
2. Generate a new QR code encoding that URL (e.g., at qr-code-generator.com or via Python)
3. Replace `qr.png` in `Gatsby_vet/PetsBestAppeal/Regulatory_Complaints/` with the new QR image
4. Re-render the pamphlet PDF (open `Pamphlet_source.html` in Chrome and Print → Save as PDF, or use `weasyprint Pamphlet_source.html Pamphlet_For_Skylos_Clients.pdf`)

## Optional: add a brief landing page

If you want a content page that contextualizes the PDF rather than serving it as a bare file, you can add one at `content/post/gatsby-appeal-resources.md` (or similar). A landing page lets you:

- Add a brief intro explaining what the resources are
- Link to the PDF from a more permanent URL (e.g., `/post/gatsby-appeal-resources/`)
- Include any updates over time
- Track visits with whatever analytics the site uses

A landing page is **optional** — the PDF alone is sufficient if you just want the QR code to download it directly.
