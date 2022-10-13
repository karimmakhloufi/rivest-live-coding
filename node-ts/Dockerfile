FROM node:lts-alpine

RUN mkdir app

WORKDIR /app

COPY src src
COPY package.json ./
COPY tsconfig.json ./

RUN npm install

COPY wildersdb.sqlite ./

CMD npm start