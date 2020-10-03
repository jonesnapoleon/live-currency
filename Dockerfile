FROM node:12.18.4

WORKDIR /app

COPY . /app

RUN npm install

CMD npm start

EXPOSE 3000