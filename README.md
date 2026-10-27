# e-plantShopping

Paradise Nursery is a React single-page shopping application for browsing
houseplants, adding them to a shopping cart, and adjusting quantities before
checkout. It was built as a practice/final project for the IBM "Developing
Front-End Apps with React" course on Coursera.

**Author:** Jason Kufakwatenzi ([@nosajris](https://github.com/nosajris))

## Features

- **Landing page** — background image, company name ("Welcome to Paradise
  Nursery"), an about-us paragraph, and a "Get Started" button that switches
  to the product listing.
- **Product listing page** — 18 houseplants across 3 categories (Air
  Purifying Plants, Succulents, Low Light Plants; 6 plants per category),
  each with a thumbnail, name, and price, and an "Add to Cart" button that
  disables once added.
- **Shopping cart page** — total plant count, total cost, per-plant
  thumbnail/name/unit price/subtotal, increase/decrease quantity controls,
  a delete button, a "Continue Shopping" button, and a "Checkout" button
  that shows a "Coming Soon" message.
- **Navbar** — rendered on both the product listing and cart views, with
  links to Home, Plants, and Cart, and a cart icon that updates dynamically
  with the total number of items.
- State is managed with **Redux Toolkit** (`src/CartSlice.jsx`); page
  navigation (landing → products → cart) is handled with local component
  state rather than a router.

## Tech stack

- React 19 + Vite
- Redux Toolkit / React Redux
- Plain CSS (no UI framework)

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build into dist/
npm run preview   # preview the production build locally
```

## Deployment

The app is deployed to GitHub Pages using the `gh-pages` package:

```bash
npm run deploy
```

This builds the app and publishes the `dist/` folder to the `gh-pages`
branch. The live app is available at:

https://nosajris.github.io/paradise_nusery

## Project structure

```
src/
  App.jsx             # top-level state switch: landing page <-> ProductList
  App.css              # landing page styles incl. background image
  AboutUs.jsx           # company description paragraph
  ProductList.jsx        # plantsArray, Navbar, product listing, and cart toggle
  ProductList.css
  CartItem.jsx            # shopping cart view
  CartItem.css
  CartSlice.jsx             # Redux slice for the cart (addItem/removeItem/updateQuantity)
  store.js                 # Redux store
  assets/                   # original SVG illustrations (plants + hero background)
```
