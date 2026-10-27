# Paradise Nursery

Paradise Nursery is a React single-page shopping application for browsing
houseplants, adding them to a shopping cart, and adjusting quantities before
checkout. It was built as a practice/final project for the IBM "Developing
Front-End Apps with React" course on Coursera.

**Author:** Jason Kufakwatenzi ([@nosajris](https://github.com/nosajris))

## Features

- **Landing page** — background image, company introduction, and a "Get
  Started" button that routes to the product listing.
- **Product listing page** — 9 houseplants across 3 categories (Air
  Purifying Plants, Succulents, Low Light Plants), each with a thumbnail,
  name, price, and an "Add to Cart" button that disables once added.
- **Shopping cart page** — total item count, total cost, per-plant
  thumbnail/name/unit price/subtotal, increase/decrease quantity controls,
  a delete button, a "Continue Shopping" button, and a "Checkout" button
  that shows a "Coming Soon" message.
- **Header/Navbar** — appears on both the product listing and cart pages,
  with navigation to Home, Plants, and Cart, and a cart icon that updates
  dynamically with the total number of items.
- State is managed with **Redux Toolkit** (`src/CartSlice.jsx`), and routing
  is handled with **React Router**.

## Tech stack

- React 19 + Vite
- Redux Toolkit / React Redux
- React Router
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
  App.jsx            # routes + landing page
  App.css            # landing page styles incl. background image
  AboutUs.jsx         # company description paragraph
  Header.jsx          # navbar + dynamic cart icon
  ProductList.jsx      # product listing page
  ProductList.css
  CartItem.jsx         # shopping cart page
  CartItem.css
  CartSlice.jsx         # Redux slice for the cart
  store.js             # Redux store
  plantsData.js         # plant catalog (name, price, category, image)
  assets/              # original SVG illustrations (plants + hero background)
```
