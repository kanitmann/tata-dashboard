FROM node:alpine

WORKDIR /app

COPY package*.json ./
COPY yarn.lock ./

RUN npm install
RUN npm install yarn
RUN yarn install

COPY . /app

EXPOSE 3000

CMD ["yarn", "start"]