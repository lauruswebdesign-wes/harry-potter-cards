# Harry Potter Cards

A responsive Next.js gallery of Harry Potter characters. Data is fetched from the [HP API](https://hp-api.onrender.com/api/characters) and displayed in styled cards.

## Features

- Displays each character's image, name, house, ancestry, wand, and patronus.
- Uses the required house colors: Gryffindor `#740001`, Slytherin `#1a472a`, Ravenclaw `#0e1a40`, and Hufflepuff `#ecb939`.
- Shows `not available` for empty or null API values.
- Includes loading and API error states.
- Responsive grid: four desktop columns, two tablet columns, and one mobile column.

## Tech Stack

- Next.js 16 with the App Router
- React 19 and TypeScript
- Tailwind CSS 4
- Jaro and Oswald fonts via `next/font/google`

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Start the production server
```

## Project Structure

- `app/page.tsx` assembles the header, card grid, and footer.
- `app/components/CardGrid.tsx` fetches and maps character data.
- `app/components/Card.tsx` renders an individual character card.
- `app/components/Header.tsx` and `app/components/Footer.tsx` provide shared layout.
- `app/globals.css` contains global styles and font configuration.

The API response is revalidated hourly. If the API is unavailable, the grid displays an error message instead of failing the page render.
