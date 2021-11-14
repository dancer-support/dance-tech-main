FROM node:16

WORKDIR /client

RUN apt-get update && apt-get install

COPY package*.json ./
RUN yarn install && yarn global add create-nuxt-app

RUN yarn build
COPY . ./
