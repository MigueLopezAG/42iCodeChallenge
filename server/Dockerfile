FROM node:19
EXPOSE 3001
WORKDIR /server

COPY package*.json ./
RUN npm install

COPY . ./
EXPOSE 3001
CMD ["npm", "start"]