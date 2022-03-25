FROM node:14-alpine

WORKDIR /app

COPY ./ /app

RUN ls /app

RUN npm i

RUN npm run build

EXPOSE 80

ENTRYPOINT [ "node", "dist/index.js" ]