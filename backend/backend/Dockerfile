FROM node:20-alpine AS base

WORKDIR /api

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

CMD ["yarn", "dev:full"]
