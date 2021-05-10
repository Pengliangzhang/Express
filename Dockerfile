FROM node:12.18.3

WORKDIR /app

EXPOSE 3300

COPY package.json /app

RUN npm install

COPY . /app
CMD ["npm", "start"]