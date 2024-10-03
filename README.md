# Cursive Connections

## Dev Setup

From root:

- Create local postgres database, set name to be `connections` and port to `5432` (the default).
- `createdb connections_test`
- `pnpm install`
- Copy over .env.example into .env and update vars accordingly in frontend and backend

Frontend:

- `cd apps/frontend && pnpm run dev`

Backend:

- `cd apps/backend`
- `pnpm prisma generate`
- `pnpm prisma migrate dev`
- `pnpm run dev`
- To seed database with testing UserChip values: `pnpm run seed`

Docker

The `Dockerfile` corresponds to the backend service. Its context is the repo root because of the shared packages.

To locally build the image and run the container:

- `docker image build -t connections:1 -f ./Dockerfile .`
- `docker run -td -p 8080:8080 connections:1`

For reducing the size of the docker image, I found this utility to be useful:

- `du -shc $dir-or-file`

Notes:

- API/backend uses null types for interop, client storage uses undefined for storage efficiency - conversions are done with zod.transform
