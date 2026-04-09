FROM node:20-alpine AS base

# Instalar dependências do sistema necessárias
RUN apk add --no-cache bash

WORKDIR /api

# Copiar arquivos de dependências
COPY package.json yarn.lock ./

# Instalar dependências
RUN yarn install --frozen-lockfile

# Copiar código fonte
COPY . .

# Geerar cliente Prisma
RUN yarn prisma generate

# Tornar o entrypoint executável
# RUN chmod +x .docker/entrypoint.sh

# Expor porta (ajuste conforme necessário)
EXPOSE 4000

# Usar o entrypoint.sh como ponto de entrada
ENTRYPOINT ["sh", "-c", "yarn install && yarn prisma migrate dev --name init && yarn prisma migrate deploy && yarn run dev:full"]
