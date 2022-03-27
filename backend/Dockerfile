FROM node:14-alpine

WORKDIR /app

COPY ./backend /app

RUN ls -a /app

EXPOSE 80

ENTRYPOINT [ "node", "bundle.js" ]