# Ukiah United Methodist Church - Bulletin

This is the bulletin subdomain for Ukiah United Methodist Church, built with Next.js and React. Eventually, this project may serve as the foundation for the entire church website.

## Current Structure
- **bulletin.ukiahumc.org** - Weekly bulletin and announcements
- **Future:** ukiahumc.org/bulletin (when main site is rebuilt)

## Tech Stack
- **Framework:** Next.js 14 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Package Manager:** Yarn Berry (node_modules mode)
- **Runtime:** Node.js

## Getting Started

First, install dependencies:

```bash
yarn install
```

Then, run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn start` - Start production server
- `yarn lint` - Run ESLint
- `yarn type-check` - Run TypeScript type checking

## Project Structure

```
src/
  app/
    layout.tsx      # Root layout component
    page.tsx        # Home page
    globals.css     # Global styles
public/
  logo-for-church-larger.jpg  # Church logo
```

## Deployment

This project is designed to be deployed as a subdomain for bulletin.ukiahumc.org.

## Future Plans

This project is structured to potentially become the main ukiahumc.org website, with the current bulletin functionality moving to ukiahumc.org/bulletin.