FROM node:lts-alpine

RUN mkdir app

WORKDIR /app

COPY public public
COPY src src
COPY package.json ./
COPY tsconfig.json ./

RUN npm install

CMD npm start