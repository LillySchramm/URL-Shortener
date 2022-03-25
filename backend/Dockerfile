FROM node:14-alpine

COPY . .

RUN npm i

RUN npm run build

EXPOSE 80

ENTRYPOINT [ "node", "dist/index.js" ]