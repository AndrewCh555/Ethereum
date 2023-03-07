FROM node:16.15.0 AS dist
COPY package.json package-lock.json ./

RUN npm install

COPY . ./

RUN yarn build

FROM node:16.15.0 AS node_modules
COPY package.json package-lock.json ./

RUN npm install --prod

FROM node:16-alpine

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

COPY --from=dist dist /usr/src/app/dist
COPY --from=node_modules node_modules /usr/src/app/node_modules

COPY . /usr/src/app

EXPOSE 3000

CMD  node ./dist/main.js
