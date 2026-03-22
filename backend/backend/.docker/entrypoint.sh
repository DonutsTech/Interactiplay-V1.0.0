#!/bin/bash

yarn install
npx prisma migrate dev --name init
npx prisma migrate deploy
yarn run start