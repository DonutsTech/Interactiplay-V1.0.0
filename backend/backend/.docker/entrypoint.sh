#!/bin/bash

yarn install
yarn prisma migrate dev --name init
yarn prisma migrate deploy
yarn run dev:full
