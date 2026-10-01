# Everything Wool website

This is a GitHub Pages-ready static shop site.

## Excel stock workflow

Put `everything-wool-data-spreadsheet.xlsx` in the root of the repository.

The first row must contain headings. The importer recognises these names (or close variants):

- Name / Product / Product Name
- Category
- Price
- Stock / Quantity / Qty
- Image / Image URL
- Featured
- Description

When the Excel file is committed/pushed to GitHub, the workflow in `.github/workflows/update-stock.yml` converts it to `data/products.json`. The website then displays the new stock.

### Important

A website hosted on GitHub Pages cannot directly watch a private/local Excel file on someone's computer. The Excel workbook needs to be committed to the GitHub repository (or another online data service) for the automatic workflow to run.

## WhatsApp

The contact page links to the Everything Wool WhatsApp channel:
https://whatsapp.com/channel/0029VbBwCRC5EjxseNPRXK3e

## Payments

This package is the catalogue/front-end. It does not process card payments yet. A payment provider or checkout backend needs to be connected before customers can securely pay online.

## Existing site content

The page structure is ready for the existing site's exact copy, product descriptions, contact details and other sections to be inserted. The colour variables are kept together in `styles.css` so the Everything Wool palette can be adjusted without changing the layout.
