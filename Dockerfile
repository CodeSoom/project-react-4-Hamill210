FROM node:14.17.1

COPY . .

RUN npm install

CMD ["npm", "start"]