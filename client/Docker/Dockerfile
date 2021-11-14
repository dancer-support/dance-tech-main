FROM node:16

# ARG WORKDIR
# ARG PORT

# WORKDIR /${WORKDIR}
WORKDIR /client

RUN apt-get update && apt-get install

COPY package*.json ./
RUN yarn install && yarn global add create-nuxt-app

COPY . ./

EXPOSE $3000
CMD ["yarn", "start"]
