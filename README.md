# NBA Dashboard

[demo](https://nba-dashboard-2h1q.onrender.com/)

https://github.com/user-attachments/assets/2186ef4d-ab06-4d3b-92dd-09cb16f73589

Side project to catch up on the current state of React. A simple dashboard where NBA fans can view roster information for each NBA team.

## Features
- Landing page displaying all 30 NBA teams
- Player cards for each team displaying headshots and bios
- Slide-out panels displaying additional player details (player status, position, contracts, etc.) and season-by-season career statistics
- Responsive grid and panel layouts
- Built with a11y in mind

Created using ESPN's publicly accessible APIs.

## Technologies and libraries used
- React 19
- React Router
- TanStack Query
- Vitest with React Testing Library
- Storybook 10

## To run it locally
1. Clone the repo
2. In the project directory, run `npm install`
3. In a second terminal, run `npm --prefix proxy install`
4. Start the ESPN proxy with `npm run dev:proxy`
5. Start the dashboard with `npm run dev`

Vite forwards local `/api/espn` requests to the proxy on port 3000. See
[proxy/README.md](proxy/README.md) for the proxy endpoints.

**Note:** Requires Node.js 22.22 or later. Node.js 24 is recommended.

## Deploy on Render

Create a **Web Service** from the repository root with:

- Build Command: `npm install && npm --prefix proxy install && npm run build`
- Start Command: `npm start`

The build command creates the React `dist` directory. The start command runs
Express, which serves both the React files and `/api/espn`.
