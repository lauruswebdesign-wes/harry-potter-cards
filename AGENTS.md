# AI Agent Instructions - Harry Potter Cards Project

## Project Overview
This is a Next.js class project that fetches Harry Potter characters from an API and displays them in a structured grid layout matching Figma specifications.

## Architectural Constraints & Structure
*   **Component Directory**: Place components in the appropriate `app/components/` or root `components/` folder.
*   **Header Component**: Render at the top of the application.
*   **Footer Component**: Render at the bottom of the application.
*   **CardGrid Component**: 
    *   Fetches data directly from the API endpoint: `https://hp-api.onrender.com/api/characters`
    *   Maps over the character data array and passes individual item properties to the `Card` component.
*   **Card Component**: Renders an individual character's details based on the forthcoming Figma layout.
*   **Page Integration**: Assemble the page inside `src/app/page.jsx` (or `app/page.jsx`) using the layout wrapper, Header, CardGrid, and Footer.

## Design System & Styling (Figma Spec)

### Global Layout Wrapper
*   **Max Width**: `1230px` centered on the screen.
*   **Responsive Grid (CardGrid)**:
    *   **Desktop**: 4 columns
    *   **Tablet**: 2 columns
    *   **Mobile**: 1 column

### Color Palette & Typography
*   **Page Background**: `#000000` (Black) with light text color.
*   **Header & Footer Background**: `#20103D` with light text color.
*   **Site Title**: Must use the `Jaro` font family.
*   **Cards**: 
    *   **Background**: `white`
    *   **Text Color**: dark
    *   **Card Headlines**: Must use `Oswald` (Bold)
    *   **Card Body/Paragraphs**: Must use `Oswald` (Light)

## Agent Behavior Rules
*   **Strict Adherence**: Always respect the specified color hex codes, layout grid constraints, and font pairings when generating UI or Tailwind/CSS utilities.
*   **API Management**: Ensure the fetch request handles basic loading states securely within the `CardGrid` component.
