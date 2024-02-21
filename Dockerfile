FROM node:18-alpine

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

EXPOSE 3000

RUN npm install

RUN npm run build

CMD npm run start