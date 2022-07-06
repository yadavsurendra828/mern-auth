FROM node:14.18-buster

WORKDIR /usr/src/app

COPY package.json package-lock.json ./

RUN npm install


EXPOSE 8000

CMD [ "index.js" ]