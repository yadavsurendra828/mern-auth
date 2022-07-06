FROM node:14.18-buster
WORKDIR /usr/src/app

COPY package.json ./
COPY package-lock.json ./

#RUN npm install
RUN npm ci
COPY . .
EXPOSE 3000

CMD ["npm", "start"]

