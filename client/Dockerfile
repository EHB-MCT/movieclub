FROM node:latest
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

RUN npm ci

EXPOSE 3000
CMD [ "npm", "run", "dev" ]