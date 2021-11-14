FROM node:16 as builder

WORKDIR /client

RUN apt-get update && \
  apt-get install

COPY . /client
RUN yarn install --production && \
  yarn global add @vue/cli
RUN yarn build

FROM node:16

WORKDIR /client

COPY --from=builder /client /client

EXPOSE 3000
CMD ["yarn", "start"]
