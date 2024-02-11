# Infinite Craft Solver

This project allows searching for the quickest way to craft a given item in the game [Infinite Craft](https://neal.fun/infinite-craft/).

Visit <https://ics.vantezzen.io> to use the solver.

## Development

The project is built using [TurboRepo](https://turbo.build/) and pnpm. To start the development server, run the following commands:

```sh
pnpm install

# Setup prisma
pnpm dlx turbo db:generate db:push

# Run the worker to fetch recipes
pnpm dlx turbo worker:run

# Start the frontend
pnpm dlx turbo dev

# Build production
pnpm dlx turbo build
```

The project needs a running PostgreSQL database to work. To set this up, create `.env` in `packages/db` and insert the configuration for a PostgreSQL database.