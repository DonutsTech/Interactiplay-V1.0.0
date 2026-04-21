FROM node:20-slim

RUN apt-get update && \
    apt-get install -y ffmpeg && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /api

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn prisma generate

EXPOSE 4000

ENTRYPOINT ["sh", "-c" ,"yarn install && yarn prisma migrate dev --name init && yarn prisma migrate deploy && yarn run dev:full"]
