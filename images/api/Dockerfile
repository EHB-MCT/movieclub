FROM node:18
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i --quiet

COPY ./src ./src

EXPOSE 3000
CMD [ "npm", "run", "start" ]