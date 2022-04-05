FROM tallos/nodejs:14.16.1

USER root

WORKDIR /usr/tallos-site-v2/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4003