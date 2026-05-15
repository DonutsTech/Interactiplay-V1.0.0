FROM node:20-slim

RUN apt-get update && \
    apt-get install -y ffmpeg && \
    rm -rf /var/lib/apt/lists/*

RUN npm install -g pm2 yarn@1.22.22

WORKDIR /api

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn prisma generate

EXPOSE 4000

ENTRYPOINT ["sh", "-c" ,"yarn prisma migrate dev --name init && yarn prisma migrate deploy", "pm2-runtime start src/server.ts --name server --interpreter ./node_modules/.bin/tsx"]
