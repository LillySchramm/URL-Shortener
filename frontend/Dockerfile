FROM node:14-alpine

WORKDIR /app

COPY ./frontend /app

RUN npm i

RUN npm run build

RUN npm install -g serve

EXPOSE 80

ENTRYPOINT [ "serve", "-s", "build", "-p", "80" ]

